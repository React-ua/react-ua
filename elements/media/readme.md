# Media

Media object with vertical alignment options

<!-- example -->
```jsx
import Media from 'react-ua/lib/elements/media';

class MediaTest extends React.Component {

  render () {
    return (

      <Media image={<img src='//placehold.it/128' width={128} height={128} />}>
      Hamburger
      </Media>

      );
    }
  }
  ```

  ## Properties

  | Name      | Type      | Default         | Description|
  |:-----|:-----|:-----|:-----|
  | `image`    | `Node`   | | Children for the image. You can pass an SVG for a custom icon or, for example, an image.|
  | `middle` | `Bool`  | false | Set the text on middle to style the Component.|
  | `bottom`  | `Bool` | false | Set the text on middle to style the Component.|
