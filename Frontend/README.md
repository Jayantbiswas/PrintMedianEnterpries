# PrintMediaEnterprise

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Local development environment

Angular requires an active LTS or maintenance LTS version of Node. Let's confirm your version of `node.js`

Run the following command: `node --version`

If you do not have a version of node.js installed, please follow the [directions for installation on nodejs.org](https://nodejs.org/en/download/)

With `node.js` and `npm` installed, the next step is to install the Angular CLI which provides tooling for effective Angular development.

From a Terminal window run the following command: `npm install -g @angular/cli`.

## Create a workspace and initial application

Run the CLI command `ng` new and provide the name `my-app`, as shown here:
`ng new my-app`

The `ng new` command prompts you for information about features to include in the initial app. Accept the defaults by pressing the Enter or Return key.

## Run the application

The Angular CLI includes a server, for you to build and serve your app locally.

Navigate to the workspace folder, such as my-app.

Run the following command:
`cd my-app`
`ng serve --open`

The ng serve command launches the server, watches your files, and rebuilds the app as you make changes to those files.

The `--open` (or just `-o`) option automatically opens your browser to `http://localhost:4200/`.

## Installing other dependencies

To Install Bootstrap run the following commands

`npm i bootstrap@<-version->`
`npm install @popperjs/core`
`npm i jquery`

After installation don't forget to import packages in `angular.json`

`"styles": [
"src/styles.css",
"node_modules/bootstrap/dist/css/bootstrap.min.css"
],
"scripts": [
"node_modules/jquery/dist/jquery.min.js",
"node_modules/@popperjs/core/dist/umd/popper.min.js",
"node_modules/bootstrap/dist/js/bootstrap.min.js"
]`
