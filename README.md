# node-boilerplate

This provides a boilerplate code for starting off with an AWS Lambda in Node JS.

# usage

```shell
$ git clone git@github.com:dipsa/node-boilerplate.git
```

```shell
$ cd node-boilerplate
$ npm install
```

This project requires you to have gulp-cli installed, so if not

```shell
$ [sudo] npm i -g gulp-cli
```

# build

```shell
$ npm run build
```

or, if you want to update your build folder while coding

```shell
$ npm run build:watch
```

# test

```shell
$ npm run test
```

or, if you want to watch tests for code changes

```shell
$ npm run test:watch
```

# build for golem deploy

## if you need the compiled source only

```shell
$ npm run deploy $GOLEM_LAMBDA_DEST {destination_path}
```

The source files should be available in the mentioned path.

## If you need complete artifact compiled with all the dependancies

```shell
$ npm run deploy-artifact $GOLEM_LAMBDA_DEST {destination_path}
```

Please note that your artifact will be a zip file with the same name as what you have in your package.json -> name attribute, and it should be available in the given path. So use that name in your metadata.json file as the payload.
