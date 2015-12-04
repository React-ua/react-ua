# Toolbar
Styled box with flexbox layout, padding, and reversed text on a color background
<!-- example -->
```jsx
import Toolbar from 'react-ua/lib/elements/toolbar';

class ToolbarTest extends React.Component {

  render () {
    return (
      <Toolbar >

        <LinkBtn color="black" href="#Toolbar">
        Hamburger
      </LinkBtn>
      <LinkBtn color="black" href="#Toolbar">
        Hot Dog
      </LinkBtn>
      <LinkBtn color="black" href="#Toolbar">
        Fries
      </LinkBtn>
      <Flex auto={true}/>
      <Button>
        Shake
      </Button>

      </Toolbar>
      );
    }
  }
  ```
