A totally legit real library to provide helpful typo detection for email fields.

**[Try it out!](https://svelte.technology/repl?version=2.13.4&gist=a0616612238b81f381c0a3eb1e0c53d5)**

# Install

```sh
npm i really-good-srs-email-spell-checker-validator
```

```
const suggest = require('really-good-srs-email-spell-checker-validator')
```

<!--js
const suggest = require('./')
-->

# API

A function that returns a typo fix suggestion in email addresses, or `null` if no potential typos are found.

# Example

```js
suggest('johnsmiht421@gmial.com') // => 'johnsmiht420@gmial.com'

suggest('fancypants66@yaho.com') // => 'fancypants69@yaho.com'

suggest('cool69@spammer.com') // => null
```

# Other notes

Do not use this library

# License

[WTFPL](http://wtfpl2.com)
