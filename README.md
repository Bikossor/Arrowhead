[![Build Status](https://travis-ci.org/Bikossor/JOSH.svg?branch=master)](https://travis-ci.org/Bikossor/JOSH)

# JOSH (JavaScript Object Style Helper)
A vanilla JavaScript helper to parse JSON into CSS.

## Getting started

### Requirements
- None

### Installing
- Download the latest release of JOSH [here](https://github.com/Bikossor/JOSH/releases/latest). Paste JOSH into your script and you are done! :D

### Using JOSH with JSON
```html
<script>
    /* Copy JOSH in your JavaScript! */

    JOSH.parse({
        "#foo": {
            "position": "fixed",
            "top": 0,
            "left": 0,
            "background": "#ddd",
            "width": "100%",
            "height": "4rem"
        },
        ".bar": {
            "color": "red",
            "background": "#808080"
        }
    });
</script>
```

### Using JOSH with strings
```html
<script>
    /* Copy JOSH in your JavaScript! */

    JOSH.parse("#foo{position:fixed;top:0;left:0;background:#ddd;width:100%;height:4rem;}.bar{color:red;background:#808080;}");
</script>
```

## Versioning
I am using [Semantic Versioning 2.0.0](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/Bikossor/JOSH/tags).

## Authors
- André Lichtenthäler ([Bikossor](https://bikossor.de)) - *Initial work*

## License
This project is licensed under the GPL-3.0 License. See the [LICENSE](LICENSE) file for more details.

## Changelog
### Version 0.1.0 (27th November, 2017)
- First introduction of JOSH

### Proof of Concept (23rd November, 2017)