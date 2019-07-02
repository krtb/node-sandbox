# NodePackageManager

* command line tool and a registry of 3rd party libraries that we can add to our node apps
* `npm init --save` to quickly craete a `package.json` file

* Node
  * first assumes a required package is a `core node module`
  * then it assumes it's a file ora folder
  * finally it looks in `node_modules` folder 

## CLI Commands
* `npm list`
* `npm list --depth=0`
  * to see only dependencies of your app
* `npm view name-of-package`
  * to list properties of a package
* `npm view name-of-package dependencies`
* `npm view name-of-package versions`
  * usefule to downgrade or upgrade   
* `npm i name-of-package@2.4.0`

## dealing with oudated packages
* `npm outdated`
  * `npm update` only works for minor and patch releases
* `npm-check-updates`
  * `ncu` command

## jshint
* npm i jshint --save-dev
  * add flag to specify that this is a  development dependency
  * tells node that this should not go into a PROD environment

## uninstalling a package
* `npm un name-of-package`
