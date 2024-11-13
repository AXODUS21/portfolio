import react from './atom.png'
import css from './css-3.png'
import firebase from './firebase.png'
import html from './html-5.png'
import js from './js.png'
import mongoDB from './mongoDB.png'
import sass from './sass.png'
import typescript from './typescript.png'
import vite from './vite.png'
import nextJs from './nextJs.png'
import tailwind from './tailwind.png'
import git from "./git.png";

const stackEntries = Object.entries({
  React: react,
  CSS: css,
  Firebase: firebase,
  HTML: html,
  JS: js,
  MongoDB: mongoDB,
  SASS: sass,
  Typescript: typescript,
  Vite: vite,
  NextJS: nextJs,
  Tailwind: tailwind,
  Git: git,
});

export const Stack = stackEntries.map(([name, image]) => ({ name, image }));