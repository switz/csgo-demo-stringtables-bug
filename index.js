const fs = require('fs');
const demofile = require('demofile');
const argv = require('minimist')(process.argv.slice(2));

const tableCounts = {};

// input an absolute path
fs.readFile(argv.file, function(err, buffer) {
  const demo = new demofile.DemoFile();

  demo.stringTables.on('update', e => {
    if (!tableCounts[e.table.name]) tableCounts[e.table.name] = 0;

    console.log(`${e.table.name}: ${++tableCounts[e.table.name]} updated`);
  });

  demo.parse(buffer);
});
