# Standin the project up

This project utilizes the Spotify API, so before you can beign head over to https://developer.spotify.com/dashboard/applications and create a new application

Creating a new application should generate a client id and a client secret. Copy these and create a new file in the base folder called .env and throw your client variables in there
(In server.js I call these varibles so refer to that file for correct naming).

# Starting the application

### `npm install`

First, Install the necessary dependencies describes in the package-lock.json

### `node server.js`

This project uses expressjs to authorize users and fetch routes so start the express server with the command above

### `npm start`

Finally start your react app and begin coding (:

# Contributions guides

You can contribute to this project by forking this repository, branching off to work on your feature then commiting and pushing the result and submitting a pull request
I use gitkraken to manage my git repositories, or you can use sourcetree or just the plain old terminal.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
