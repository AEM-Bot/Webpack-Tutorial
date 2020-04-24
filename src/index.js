import HelloWorldButton from './components/hello-world-button/hello-world-button.js';
const helloWorldButton = new HelloWorldButton();
helloWorldButton.render();

if(process.env.NODE_ENV === 'production'){
    console.log('Production Mode');
}
else if(process.env.NODE_ENV === 'development'){
    console.log('Development Mode');
}


helloWorldButton.Text();