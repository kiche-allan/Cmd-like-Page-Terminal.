const about = document.querySelector('#about')
const contact = document.querySelector('#contact')
const aboutContent = document.querySelector('#about-content')
const contactContent= document.querySelector('#contact-content')

about.addEventListener('click', () => {
    const aboutBox = new WinBox({
        title: 'About Me',
        background: '#00aa00',
        width: '400px',
        heightt: '400px',
        top: 50,
        right:50,
        bottom:50,
        left:50,
        // html: '<h1>Test</h1>' u can add it with js
        mount: aboutContent, 
        onfocus: function(){
            this.setBackground('#00aa00')
        },

        onblur: function(){
            this.setBackground('#777')
        }
    })
})

contact.addEventListener('click', () => {
    const contactBox = new WinBox({
        title: 'Lets Connect',
        // modal:true,
        background: '#00aa00',
        width: '400px',
        heightt: '700px',
        top: 150,
        right:50,
        bottom:50,
        left:250,
        // html: '<h1>Test</h1>' u can add it with js
        mount: contactContent, 
        onfocus: function(){
            this.setBackground('#00aa00')
        },

        onblur: function(){
            this.setBackground('#777')
        }
    })
})