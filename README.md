# Aerochimps CSS Reset

_This project use as base [HTL5 Doctor Reset V1.6.1](http://html5doctor.com/html-5-reset-stylesheet/)._

##Usage
Link `dist/acReset.css` in your HTML pages.

##Modifying
You need to have NPM and Gulp installed.

1. Run `npm install`;
2. Run `gulp`;

It will watch any changes that you do in `sass/acReset.scss` and compile it to `css/acReset.css`

##Production usage
- Run `gulp dist`.

It will compile and minify styles from `sass/acReset.css` to `dist/acReset.css`  
After compile, you just need to link it to your HTML pages.