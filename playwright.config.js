const {playwrighttestconfig} = require ('@playwright/test');

const config ={
    retries: 0,
    timout: 5000,
    //reporter: './reporter.js',
    use : {
        baseURL: "https://the-internet.herokuapp.com",
        headless: true,
        viewport: {width:1200, height : 720 },
        video : "off",
        screenshot : "off",
        trace : "on"
    },
    
    projects:  [
        {
            name : 'chrome',
            use : {browsername: 'chromium'}
        },
        {
            name : 'firefox',
            use : {browsername: 'firefox'}
        },
        {
            name : 'webkit',
            use : {browsername: 'webkit'}
        },
    ]
}

module.exports = config;