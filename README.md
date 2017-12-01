# node-boilerplate

This provides a boilerplate code for starting off with an AWS Lambda in Node JS. The purpose of this is to provide a start-up code for writing a Lambda function using Node JS.

The main advantages for devs using this:
1. Avoid writing boilerplate code and can start off with development immediately
2. Able to build with Babel with latest preset - ES6
3. Write unit tests using ~~Jest~~ Mocha
4. Write component level testing using lambda-local
5. Watch for code changes and build / run unit tests simultaneously
6. make the Golem deployable artifact with a single command with dependencies

# usage

This project requires you to have gulp-cli installed, so if not

```shell
$ [sudo] npm i -g gulp-cli
```

Then to checkout

```shell
$ git clone git@github.com:dipsa/node-boilerplate.git
```
And install dependencies by

```shell
$ cd node-boilerplate
$ npm install
```

This has few built-in functions

# 1. compile

```shell
$ npm run build
```

or, if you want to update your build folder while coding

```shell
$ npm run build:watch
```

# 2. test

```shell
$ npm run test
```

or, if you want to watch tests for code changes

```shell
$ npm run test:watch
```

# 3. execute local

```shell
$ npm run execlocal
```

# 4. create the final artifact for Golem

This command resolves all dev dependancies required for build and test, then compiles your code, install the dependencies (production mode) and create a file called `payload.zip` inside a folder called *build*. This folder will not version controlled and is referred by the `metadata.json` file when Golem is trying to resolve the payload.
This `npm run make` command can be embedded in `setup.py` file inside the lambda, so that everytime golem takes over, it knows that the artifact is ready.

```shell
$ npm run make
```
