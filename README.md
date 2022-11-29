# Getting Started with Pokemon Dashboard

This project aims to build a framework that allows to have a defined set of components that 
can be reusable across multiple dashboards-clients. These dashboards can have different configurations
in terms of the number of columns, amount of widgets, displaying different data, etc.

## FrontEnd Task

The end goal is to create a basic framework that allows us to reuse components, to
easily build dashboards for different clients.

The requirement is that based on the client (This could be a hardcoded variable, for
now, ie `const client = “pokemon”;`) should be able to get a configuration file and
build the dashboard based on that.

Each “widget” has a type and a logic associated with it. In this case, we have two.
The type “list”, which shows a list of elements and the “number” shows the count of
elements

## Test Checklist
 - React
 - Readme
 - Functional programming
 - Use of a linter
 - Unit testing (Critical parts of the code is enough)
 - If the configuration file is updated the dashboard would be changed

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