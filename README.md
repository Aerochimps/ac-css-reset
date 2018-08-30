# Aerochimps CSS Reset

_This project use as base [HTML5 Doctor Reset V1.6.1](http://html5doctor.com/html-5-reset-stylesheet/)._

## Usage

1. Clone the repo or install via Bower
2. Add a link to `dist/acReset.css` in your HTML pages `<head>`

## Development

### Dependencies

In order to run the development environment you need to have the following installed:
- [NPM](https://www.npmjs.com/)
- [Gulp](https://gulpjs.com/)


### Start development environment

1. `npm i`
2. `gulp`

This will watch changes in `sass/acReset.scss` and compile it to `css/acReset.css`

## Genearete a new distribution version

1. Do the changes/aditions that you need,
2. `gulp dist`.

This will compile and minify styles from `sass/acReset.css` to `dist/acReset.css`  