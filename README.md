How to make a full MVC (Model View Controller) backend and a React frontend

<!-- ///// Side note ///// -->
<!-- To get a list of all npm global packages -->
```npm list -g --depth 0```

<!-- To get a list of outdated global packages -->
```npm outdated -g --depth=0```

<!-- To update one global packages -->
```npm install -g <package>```

<!-- To update ALL global packages -->
```npm update -g```

<!-- To uninstall a global package -->
```npm -g uninstall <package>```

<!-- To install a local package and save as devDependency -->
```npm i <package> --save-dev```


### Step 1: npm initialization and get the package.json
```npm init```
    - edit the package.json scripts


### Step 2: download your npm packages
`npm i express mongoose concurrently if-env`


### Step 3: create the folders and files
# FILES
    - server.js
    - .gitignore

# FOLDERS
(obj would be the name of the data object ex: contact, messages, info)
    - client
        - create-react-app in here
    - config
        - keys.js
    - controllers
        - objController.js
    - models
        - index.js
        - obj.js
    - routes
        -index.js
        - api
            - index.js
            - message.js


###Step 4: Set up server.js
    - Dependencies variables
    - Middleware
    - serve static assets to heroku
    - connect to mogo db
    - add routes
    - listen to port


### Step 5: Set up models folder
    - index.js
    - models.js


### Step 6:Set up controllers folder
    - modelController.js


### Step 7: Set up routes
    - index.js (send to "/api")
    - api
        - index.js (direct to correct extension after api call) 
        - modelRoute.js (send to "/api/model")


### Step 8: Set up MLab online
    - https://mlab.com/home?newLogin=1
    - create a new development
    - amazon web server - SANDBOX (free)
    - click on ```US East (Virgina) (us-east-1)```
    - create a database name 
    (this one is boiler-plate)
    - submit order

    - new deployment will be created 
    (once the blue key turns to a check mark you are good to go)
    - click in to the new development
    - click on the User tab
    - Add database user
    (this one is boilerplate)
    - Add password
    (this one is boiler654)
    - Scroll back up and copy the MongoDB URL
    (mongodb://<dbuser>:<dbpassword>@ds235197.mlab.com:35197/boiler-plate) -- replace <dbuser> with user and <dbpassword> with the password


### Step 9: Set up the config folder
    - keys.js


### Step 10: Create react app
    - from your root level (where server.js is at) enter in terminal:
```create-react-app client```

            or

    - create a client folder then inside the client folder in terminal:
```create-react-app .```


### Step 11: Clear out junk in react files
    Delete the whole file
    - README.md
    - src/logo.svg
    - src/index.css
    - src/App.test.js
    - public/favicon.ico
    - public/manifest.json

    Delete inside file
    - src/App.css
    - src/index.js (the index.css import)
    - src/App.js (everything between return, logo import)
    - public/index.html (just the comments)


### Step 12: Add the proxy in to the react package.json
```"proxy": "http://localhost:8080/",``` (make sure the proxy is the correct server!!)

### Step 13: install axios and react router in client side
    - cd client
```npm i axios react-router-dom```

### Step 14: Create the folders inside src folder
    - components
    - pages
    - utils
        -API.js


### Step 15: Set up the dom-routes in App.js
### Step 16: Set up the API.js
