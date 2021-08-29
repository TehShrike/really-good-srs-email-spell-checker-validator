import { equal as assertEqual } from 'assert'

import suggest from './index.mjs'

assertEqual(suggest('johnsmiht421@gmial.com'), 'johnsmiht420@gmial.com')

assertEqual(suggest('fancypants66@yaho.com'), 'fancypants69@yaho.com')

assertEqual(suggest('cool69@spammer.com'), null)
