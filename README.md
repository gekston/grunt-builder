# grunt js-builder
![alt tag](http://gruntjs.com/img/grunt-logo.svg)
### Installation
****
Download [https://nodejs.org/en/]

Open cmd/gitBash and  run
```sh
npm install
npm install -g grunt-cli
```
Install plugin for grunt
```sh
npm install grunt --save-dev
npm install time-grunt --save
npm install load-grunt-config --save-dev
npm install grunt-concurrent --save-dev
npm install grunt-contrib-copy --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-clean --save-dev
npm install grunt-contrib-imagemin --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-zip --save-dev
npm install grunt-contrib-compress --save-dev
```
Options in builder
```sh
grunt
```
Run default tasks:
- clean

Clean folder 'build/*'

Be careful!
```sh
grunt develop
```
Run next tasks and prepeare build for develop:

- 'concurrent:buildDev'
  - 'copy'
  - 'concat'

Creation build for developer

```sh
grunt imagemin
```
Start copy files from img/ and compress him

```sh
grunt production
```
- 'concurrent:buildDev'
- 'concurrent:buildProd'
   - 'uglify'
- 'concurrent:imgMin'
   - 'imagemin'
- 'concurrent:mathJax'
   - 'unzip'

Preparation project to production
****
### Plugins
**clean.js**
>Clean folder build/*

**copy.js**
>css/ all files to build/css/*
>fonts from libs/materialize and font-awesome/fonts to build/css/fonts

**concat.js**
> - concat extended.js, prototype_to_jquery_ajax_helper.js and stub_for_growler.js in one extended.js
> - jquery.min.js go too prototype.js
> - materialize.min.js go too scriptaculous.js
> - concat font-awesome.css, materialize.min.css in style.css

**uglify.js**
>Minification .js files in build/js

**imagemin.js**
>Minification image

**unzip.js**
>Unzip file mathjax.zip to build/js/mathjax
