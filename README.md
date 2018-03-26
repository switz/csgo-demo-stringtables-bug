# CS:GO Demo Stringtables Bug

This will not check for redundant updates, rather it is a simple count of how often each table is updated. I didn't include instancebaseline. Values are approximate, not exact.

## Setup
```
$ git clone ...
$ yarn # or npm i
$ node index.js --file=/absolute/path/to/demo/file.dem
```

## Demos from before bug
* 11/11/17 http://s3.popflash.site/popflash-00558973-e303-4e77-8186-4b9c5dfc447b.dem
	```
	soundprecache: 4474 updates
	Scenes: 118 updates
	userinfo: 518 updates
	```
* 11/25/17 http://s3.popflash.site/popflash-0028dcf9-4c40-4d46-85d8-03009d6915ad.dem
	```
	soundprecache: 4473 updates
	Scenes: 127 updates
	userinfo: 511 updates
	```
* 11/26/17 http://s3.popflash.site/popflash-0082c11b-cef6-4394-b77d-c9400ab9e827.dem
	```
	soundprecache: 4456 updates
	Scenes: 102 updates
	userinfo: 513 updates
	```
* 11/28/17 (2017-11-28 20:10:25.581+00) http://s3.popflash.site/popflash-0066e51a-efe8-47be-aa50-68d7b1bcb65f.dem
	```
	soundprecache: 4524 updates
	userinfo: 521 updates
	Scenes: 178 updates
	```

## Demos from after bug
* 11/29/17 (2017-11-29 02:19:40.264+00) http://s3.popflash.site/popflash-0012971e-362e-46e4-b1a8-c6feee60910f.dem
	```
	soundprecache: 192615 updates
	Scenes: 190442 updates
	userinfo: 267 updates
	```
* 11/30/17 http://s3.popflash.site/popflash-0011f0d2-17ac-4cfd-9aa1-c344a3ac9182.dem
	```
	soundprecache: 187996 updates
	Scenes: 185822 updates
	userinfo: 261 updates
	```
* 12/03/17 http://s3.popflash.site/popflash-007d0340-8fa9-4164-98c6-9c025470a381.dem
	```
	soundprecache: 251214 updates
	Scenes: 249041 updates
	userinfo: 271 updates
	```
* 12/19/17 http://s3.popflash.site/popflash-005cf74e-795e-4b67-9c4e-176b0519074d.dem
	```
	soundprecache: 194561 updates
	Scenes: 192387 updates
	userinfo: 262 updates
	```
* 3/26/18 http://s3.popflash.host/popflash-8b69662f-fe8f-4009-810b-75cae9134908.zip
	```
	soundprecache: 172040 updates
	Scenes: 169863 updates
	userinfo: 256 updates
	```


## File list for easier bulk downloading

```
http://s3.popflash.site/popflash-00558973-e303-4e77-8186-4b9c5dfc447b.dem
http://s3.popflash.site/popflash-0028dcf9-4c40-4d46-85d8-03009d6915ad.dem
http://s3.popflash.site/popflash-0082c11b-cef6-4394-b77d-c9400ab9e827.dem
http://s3.popflash.site/popflash-0066e51a-efe8-47be-aa50-68d7b1bcb65f.dem
```

```
http://s3.popflash.site/popflash-0012971e-362e-46e4-b1a8-c6feee60910f.dem
http://s3.popflash.site/popflash-0011f0d2-17ac-4cfd-9aa1-c344a3ac9182.dem
http://s3.popflash.site/popflash-007d0340-8fa9-4164-98c6-9c025470a381.dem
http://s3.popflash.site/popflash-005cf74e-795e-4b67-9c4e-176b0519074d.dem
http://s3.popflash.host/popflash-8b69662f-fe8f-4009-810b-75cae9134908.zip
```
