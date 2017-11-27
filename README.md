# JOSH (JavaScript Object Style Helper)
A vanilla JavaScript helper to parse JSON into CSS.

### Installing
- ***Coming soon...***

### Using JOSH
```html
<script>
    /* Copy JOSH in your JavaScript! */

    var headElement = document.getElementsByTagName("head")[0];
    var styleElement = document.createElement("style");
    styleElement.innerHTML = JOSH.parse({
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
        }});
    headElement.appendChild(styleElement);
</script>
```

## Changelog
### Version 0.1.0 (27th November, 2017)
- First introduction of JOSH

### Proof of Concept (23rd November, 2017)