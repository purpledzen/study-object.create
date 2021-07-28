const colorizedBtn = Object.create({},{
    element : {
        value : document.querySelector('.colorizedBtn'),
        enumerable: false,
        writable: false,
        configurable: false
    },
    changeColor: {
        set(color) {
            this.element.style.background = color
            console.log(`New color is ${color}`)
        }
    }
})