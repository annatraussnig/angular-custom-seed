# Angular Example App

## Intro


This repo is meant as a seed for any AngularJS project. I don't claim for it to be better than anything else out there, but I always found myself a bit frustrated starting out projects with magical seeds and generators, so I decided to write my own template project.

## Getting Started

First clone the repo somewhere you like ```&& cd $_```.

The seed uses [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) to install useful packages. To be able to use npm, you should have [NodeJS](http://nodejs.org/) installed on your machine (if not, stop everything and do it now).

Once Node is installed, navigate to the root of your project and type:

```
$ npm install
```
Once the Node dependencies specified in ```package.json``` are downloaded and installed in the ```/node_modules``` folder, npm calls bower and installs the bower dependencies as required by ```bower.json``` into ```app/bower_components```.

In theory you should be all set by now.

## What's in this repo?

I tried to keep the app repo is tiny as I could. Are installed and available:

* angular (1.3.8)
* angular-resource
* angular-ui-router

The rest of the modules and packages are utilities for testing and automation. Which brings us to...

## Using this seed

You will need to modify the following with your own stuff before getting started:

* ```package.json```: name attribute
* ```bower.json```: name attribute
* ```/app```: this really isn't meant to stay
* ```/integration_tests/scenarios.js```: replace content with appropriate tests 

## Available commands

### Run locally

```
$ grunt http-server:dev
```

Serves the files and makes the app available at http://localhost:8282/

### Run the unittests

```
$ grunt testem:run:unit
```

This command watches for changes in the source code of the app (and the unittests). Each time a change is detected, [JSHint](http://jshint.com/) (a linting tool) scans the files. If those are free from syntactic errors, the unittests are run.

The test framwork I chose is [Jasmine](http://jasmine.github.io/2.1/introduction.html) (mainly because I kinda know it and because it served me well so far). I also use PhantomJS because having a real browser bouncing around each time I start the tests annoys the hell out of me.

It is recommended to have the tests continuously running during development.

If you wish to the test suite once and exit afterwards, you are welcome to launch testem in CI mode:

```
$ grunt testem:ci:unit
```

### (Setup and) run the integration tests

For testing views and behaviour, I'm using [Protractor](http://angular.github.io/protractor/#/). First you should install the webdriver-manager that ships with Protractor:

```
$ node node_modules/grunt-protractor-runner/node_modules/protractor/bin/webdriver-manager update
```

So far, I have only configured Protractor to work locally. For other environments, one will have to look into the ```Gruntfile.js```, set up another task and create another ```configFile```.

Anyway, for the moment you should: a) have the app up and running locally

```
$ grunt http-server:test
```

(The ```test``` option will make the site available on another port than the dev server.)

Now, leave this terminal window alone, and in another one, run the integration tests with the following command:

```
$ grunt protractor:localrun
```

As integration tests are pretty slow, those will run once and exit afterwards.

## Style guidelines

### General

I mostly try and stick to [this one](https://github.com/johnpapa/angularjs-styleguide#controllers) (for now at least).
