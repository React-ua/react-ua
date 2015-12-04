# Banner

Hero banner styled box with background image props

<!-- example -->
```jsx
import Banner from 'react-ua/lib/elements/banner';

class BannerTest extends React.Component {

  render () {
    return (
      <Banner>
      <h1 className="m0">
      React Univeral
      </h1>
      </Banner>
      );
    }
  }
  ```
  ## Properties

  | Name      | Type      | Default         | Description|
  |:-----|:-----|:-----|:-----|
  | `left`    | `bool`   | | Change the position of the Banner children|
  | `right`    | `bool`   | | Change the position of the Banner children|
  | `bgColor`    | `colors`   | 'black'| Change the color of the Banner background|
  | `bgImage`    | `string`   | | Add a background Image to the Banner|
  | `bgSize`    | `string`   |'cover' | Change the size of the Banner background|
  | `bgPosition`    | `string`   | 'center'| Change the position of the Banner background|
