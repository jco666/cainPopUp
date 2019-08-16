# :feet: cainPopUp
### Simple library to create Pop-Ups


### :japanese_goblin: [Demo](https://jco666.github.io/cainPopUp/)

## CDN
```html
<script src="https://cdn.jsdelivr.net/gh/jco666/cainPopUp@latest/cainPopUp.min.js"></script>
```

## Usage example
```javascript
cainPopUp.init({
	times: 5,
	clickInterval: 15,
	cycleInterval: 2,
    url: [
		'https://example.com?url1',
		'https://example.com?url2',
		'https://example.com?url3'
	],
	type:'pupup',
	cookieName:'cainPopUp'
})
```

## Options
| Option | Type | Default | Description |
| - | - | - | - |
**`times`** | Integer | `99999` | Max Pop-Up count per cycle
**`clickInterval`** | Integer | `15` | Time in seconds for each click interval
**`cycleInterval`** | Integer | `24` | Time in hours to reset Pop-Up counter cyle
**`url`** | String or Object | `window.location.href` | List of URLs to open
**`type`** | String | `"pupup"` | Type of action on click
**`cookieName`** | String | `"__cfduid"` | Pop-Up counter cookie name

## License
[MIT](LICENSE) © [Jacob K.](http://lsdev.cf)
