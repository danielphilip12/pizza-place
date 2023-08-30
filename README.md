# pizza-project

This is a small fake pizza place site that I am building for practice in Vuejs. Currently, you can see the pizzas available (current 3: cheese, pepperoni, veggie) with the price, name, image (taken from unsplash), and the ingredients (basic). 

You can also see a list of fake orders and create new orders (new orders can only have 1 pizza, currently). 

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup
```sh
npm install
```

### Compile and Hot-Reload for Development
In one command prompt, run 
```sh
json-server --watch src/db.json
```
In another command prompt, run
```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
