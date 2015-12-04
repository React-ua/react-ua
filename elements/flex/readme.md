# Flex

Flexbox item container with default padding
<!-- example -->
```jsx
import Flex from 'react-ua/lib/elements/flex';

class FlexTest extends React.Component {

  render () {
    return (

      <Flex >

      <t auto={true}>
      Helloooo
      </t>
      <t pad={false}>
      Helloooo
      </t>
      <t noshrink={true}>
      Helloooo
      </t>

      </Flex>

      );
    }
  }
  ```

  ## Properties

  | Name      | Type      | Default         | Description|
  |:-----|:-----|:-----|:-----|
  | `auto`  | `Bool` |  | Set the text on middle to style the Component.|
  | `noshrink`  | `Bool` |  | Set the text on middle to style the Component.|
  | `pad`  | `Bool` | true | Set the text on middle to style the Component.|
