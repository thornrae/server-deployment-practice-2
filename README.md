# server-deployment-practice-2

To deploy to heroku: 
1. Login to Heroku account
2. Create new app
3. Go to deploy tab to connect repo to git hub
4. Choose branch for deploy 
5. Choose "wait for CI to pass before deploy"
6. Choose "enable automatic deploys"

Initialize app: `npm init -y`
Install dependencies: `npm i dotenv express jest`
Test Server `npm test`
Start Server `nodemon`

File Structure:

`├── LICENSE
├── README.md
├── index.js
├── package-lock.json
├── package.json
└── server
    ├── __tests__
    │   └── server.test.js
    ├── handlers
    │   ├── 404.js
    │   └── 500.js
    ├── middleware
    │   └── stamper.js
    └── server.js`

Simple Simple Express Server:
1. .env
    - PORT=3000
2. index.js
    - bring in dotenv
    - require the server.js file, assign to variable
    - chain to variable holding server.js file .start(process.env.PORT)
3. server.js
    - require express
    - instantiate express(), store in const app
    - bring in middleware, error handlers
    - write a function named start that takes in a port as an argument and has a callback function that console.log a template literal in the terminal showing a message with the port number in use (defined in the .env file)


