# Gulp Starter
1. Before using it, install all dependencies:
```bash
npm install
```

2. Ensure that you are using Node.js version 18.17.0 or higher.

## Commands

This Gulp starter has all in one command:

```bash
npm run start
```
This command will initiate several tasks:
- **Run Develop Mode**: This is the main command. It packs the project for development, starts the watcher, and launches the server. The watcher monitors the following folders/files: `data/json`, `html/html,njk`, `scss/scss`, `js/js`.

- **Run Build**: Use this command to create a production-ready build with minified and optimized code.

- **Compile Fonts**: Since the watcher doesn't handle fonts, you can use this command to compile fonts separately. Make sure to follow strict naming conventions for fonts, e.g., `Roboto_400_normal.ttf`, where "Roboto" is the font name, "400" is the font weight, and "normal" is the font style.

- **Compile Images**: Similar to fonts, this command compiles images separately, as the watcher doesn't track them.

- **Create Folders (setup)**: This command creates the basic project structure. Use it the first time you set up your project.

## Structure
### data
This folder contains only `*.json` files, which are convenient for creating data structures for blocks, sections, pages, etc. You can include data from JSON files in your HTML using Nunjucks like this:
```html
{% set data = '../data/file.json' | json %}
```

### fonts
In this folder, you'll find `*.ttf` files. Gulp automatically converts fonts to WOFF and WOFF2 formats. To ensure smooth usage, strictly adhere to the font naming convention. For example, `Roboto_400_normal.ttf` where "Roboto" is the font name, "400" is the font weight, and "normal" is the font style.

### html
For html was be installed [nunjucks](https://mozilla.github.io/nunjucks/templating.html "nunjucks"), you can use all him syntax. This folder contains `*.html` or `*.njk` files and has two subfolders:

- `components`: This folder is for placing components. You can organize the structure as you prefer.

- `pages`: Use this folder for page files. You can structure it according to your project needs.

### img
In this folder, you'll find `*.jpg`, `*.jpeg`, `*.png`, `*.gif`, `*.webp`, or `*.svg` files. It has two subfolders:

- `pictures`: This is where you should save non-vector images.

- `svg`: Place vector images in this folder.

### js
You can write in ES6 syntax & using imports/exports. This folder contains `*.js` files and has two subfolders:

- `components`: Use this folder for component scripts. Organize it as needed.

- `pages`: Place page scripts in this folder. Organize it as needed.

- `script.js`: This is the main entry point for your scripts.

### libs
In this folder, you can create any folder and file structure you need. After building, these files will be placed in `assets/libs`.

### scss
This folder contains `*.scss` files and has two subfolders:

- `components`: Organize component styles in this folder as required.

- `pages`: Organize page styles in this folder as required.

- `style.js`: This is the main entry point for your styles.
