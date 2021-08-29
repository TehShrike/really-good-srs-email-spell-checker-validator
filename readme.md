A totally legit real library to provide helpful typo detection for email fields.

**[Try it out!](https://svelte.dev/repl/f949b74149f849ba94263556c45ad2aa?version=3.42.4)**

# Install

```sh
npm i really-good-srs-email-spell-checker-validator
```

# API

A function that returns a typo fix suggestion in email addresses, or `null` if no potential typos are found.

# Example

```js
import suggest from 'really-good-srs-email-spell-checker-validator'

suggest('johnsmiht421@gmial.com') // => 'johnsmiht420@gmial.com'

suggest('fancypants66@yaho.com') // => 'fancypants69@yaho.com'

suggest('cool69@spammer.com') // => null
```

# Other notes

Do not use this library

# License

[WTFPL](http://wtfpl2.com)
