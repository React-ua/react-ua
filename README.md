# React Universal Application Toolbox



## Installation

React Universal Application Toolbox can be installed as an [npm package](https://www.npmjs.org/package/react-ua);

```
npm install --save react-ua
```

## Usage

Although there are other ways to use React ua, the recommended way is to create a Webpack workflow with [Babel Loader](https://github.com/babel/babel-loader), [CSS Loader](https://github.com/webpack/css-loader) and [SASS Loader](https://github.com/jtangelder/sass-loader). A good starting point is [React Hot Webpack Boilerplate](https://github.com/gaearon/react-hot-boilerplate).

Once you have the workflow ready, you can just require and use the components:

```jsx
import React from 'react';
import Button from 'react-ua/lib/button';

const CustomButton = () => (
  <Button label="Hello world" raised accent />
);

export default CustomButton;
```

The previous code creates a React button component based on React ua button. It's important to notice that requiring a module from the exposed root of the package will import the **Style** of the component.

## Authors and Contributors

The project is being initially developed and maintained by [Mohamed JEBLI](http://codeseven.github.io).I want to create reference components so any contribution is very welcome.

To work in the project you'd need a `node` version supporting ES6 syntax. Although the project is built using Babel we use some ES6 features in the development server. Also, the packages has been tested with `node 4.2.1`. Consider using [nvm](https://github.com/creationix/nvm) or [n](https://github.com/tj/n) to handle different node versions!

## License
This project is licensed under the terms of the [MIT license](https://github.com/react-toolbox/react-toolbox/blob/master/LICENSE).
