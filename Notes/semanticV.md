# Semantic Versionning

* "^4.13.6"
  * has 3 numbers
    * first number: major version
      * adding a new feature that may potentially break
    * second number: minor version
      * for minor features that don't break the existing api
    * third number: patch
      * bug fixes
    * carrot character = ^
      * as long as there are no major changes, will update to the newest version of (4)
      * or `4.x`
    * tilde = ~ 
      * interested in any version as long as major version is 1 and minor version is 8 === 1.8.x || ~1.8.3