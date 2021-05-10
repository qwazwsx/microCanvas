# microCanvas
popup implementation of DrawingBoard JS for a top secret project i'm working on

![](https://i.imgur.com/xABEKDT.gif)

# [EXAMPLE](https://qwazwsx.xyz/microCanvas/)

# Features:

* save button with callback to main window
* extend/shrink the window


# Usage

### new microCanvas(popupButton, onSaveCallback)

* `popupButton` (type HTMLElement) button to trigger popup
* `onSaveCallback` (type function(data)) function to be called after save button is pressed, is passed image as URL

**example:**

```Javascript
new microCanvas($('button')[0], (data) => {
    // set image src to returned data
    $('.image').attr('src', data)
  })
```

See [`index.html`](https://qwazwsx.xyz/microCanvas/) for an example. 

*note: you may have to run this file on a server (on a domain other than file://) due to cross-origin policies in Chrome. Try spinning up a test server with `python3 -m http.server`. [stack overflow](https://stackoverflow.com/questions/29983786/blocked-a-frame-of-origin-null-from-accessing-a-cross-origin-frame-chrome/65234451)*

# Libraries used
* [Jquery](https://jquery.com/)
* [DrawingBoard JS](https://github.com/Leimi/drawingboard.js)
* [Google Material Design Icons](https://fonts.google.com/icons)
* [Iconify.design Eraser](https://iconify.design/icon-sets/mdi/eraser.html)
* [Iconify.design Paint Bucket](https://iconify.design/icon-sets/foundation/paint-bucket.html)
