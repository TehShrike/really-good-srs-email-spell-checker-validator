A totally legit real library to provide helpful typo detection for email fields.

```sh
npm i really-good-srs-email-spell-checker-validator
```

```
const suggest = require('really-good-srs-email-spell-checker-validator')
```

A function that returns a typo fix suggestion in email addresses, or `null` if no potential typos are found.

<!--js
const suggest = require('./')
-->

# Example

```js
suggest('johnsmiht421@gmial.com') // => 'johnsmiht420@gmial.com'

suggest('fancypants66@yaho.com') // => 'fancypants69@yaho.com'
```

# Other notes

Do not use this library

# License

[WTFPL](http://wtfpl2.com)
