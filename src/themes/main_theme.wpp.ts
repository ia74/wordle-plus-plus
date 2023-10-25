export default {
    name: 'W++ Starter Theme',
    author: 'Wordle++ Team',
    css: `
    button {
        transition-duration: 0.25s;
    }
    button:hover {
        transform: scale(1.5);
    }
    /* Lets susdeck-ify it */
    body {
        background: rgba(255, 0, 89, 1);
        background: -webkit-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
        background: -moz-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
        background: -ms-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
        background: -o-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
        background: linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);
        background-size: 400% 400%;
        -webkit-animation: errorBg 5s linear infinite;
        -moz-animation: errorBg 5s linear infinite;
        animation: errorBg 5s linear infinite;
        height: 100vh;
        width: 100vw;
        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
    }
    @-webkit-keyframes errorBg {
        0% {
            background-position: 100% 0%
        }
    
        100% {
            background-position: 15% 100%
        }
    }
    
    @-moz-keyframes errorBg {
        0% {
            background-position: 100% 0%
        }
    
        100% {
            background-position: 15% 100%
        }
    }
    
    @keyframes errorBg {
        0% {
            background-position: 100% 0%
        }
    
        100% {
            background-position: 15% 100%
        }
    }
    `,
    js: `
    let g2 = document.createElement('p')
        g2.style = "text-align: center;"
        g2.innerText = "Hello!"
        g2.onhover = () => {this.remove();}
        w_bkb.appendChild(g2)
    console.log('HI');
    `
}
