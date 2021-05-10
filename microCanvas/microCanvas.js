// we put this on window so we can call it from the popup
var onCanvasSave

class microCanvas {
  constructor(el, onSave) {
    this.el = el
    onCanvasSave = (data) => {
      // set up previous image
      this.img = data
      if (onSave) onSave(data)
    }

    this.el.onclick = () => {
      this.popup = window.open('microCanvas/popup.html', '_blank', "menubar=false, width=410, height=400")
      // once window is done loading, set image
      this.popup.addEventListener('load', () => {
        this.popup.updateCanvas(this.img)
      })
    }
  }

  resetPreviousImage() {
    this.img = undefined
  }

}