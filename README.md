# grunt js-builder
****
Dowload node.js

Open cmd/gitBash run
```sh
install npm
$ npm install -g grunt-cli
```
Install plugin for grunt
```sh
$ npm install grunt --save-dev
$ npm install time-grunt --save
$ npm install load-grunt-config --save-dev
$ npm install grunt-concurrent --save-dev
$ npm install grunt-contrib-concat --save-dev
$ npm install grunt-contrib-clean --save-dev
$ npm install grunt-contrib-imagemin --save-dev
$ npm install grunt-contrib-uglify --save-dev
$ npm install grunt-zip --save-dev
```
Options in builder
```sh
$ grunt
```
Run default tasks:
- clean

Clean folder 'build/*'

Be careful!
```sh
$ grunt dev
```
Run next tasks and prepeare build for develop:

- 'concurrent:buildDev'
  - 'copy'
  - 'concat'

Creation build for developers
```sh
$ grunt prod
```
- 'concurrent:buildDev'
- 'concurrent:buildProd'
   - 'uglify'
- 'concurrent:imgMin'
- 'concurrent:mathJax'
    
Prepea build for production
****
### About
**clean.js**
>Clean folder 'build/*'

**copy.js**
>

**concat.js**
>

**uglify.js**
>

**imagemin.js**
>

**unzip.js**
>
