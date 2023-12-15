# Portfolio

### It is build react vite 
### It has two route home and portfolio route
```
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/portfolio',
        element: <Portfolio></Portfolio>
      }
    ]
  },
]);
```

### Run locally 
* Firstly: Clone the github URL
* Secondly: Open the file VS Code
* Thirdly: Command Line give the command    [npm i]
* Fourthly: give command [npm run dev]
* Fifthly: Build the project give the command [npm run build]
```
npm i
npm run dev
npm run build
```

### This Project Package Uses:
* [vite-react](https://vitejs.dev/guide/)
* [react-router-dom](https://reactrouter.com/en/main)
* [react-icon](https://react-icons.github.io/react-icons)
* [tailwind-css](https://tailwindcss.com/docs/guides/vite)

