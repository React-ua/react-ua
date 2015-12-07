# Panel
Styled box with header and footer components
<!-- example -->
```jsx
import Panel from 'react-ua/lib/elements/panel';

class PanelTest extends React.Component {

  render () {
    return (

      <Panel>
        <PanelHeader title='PanelHeader' />
        <PanelBody>
          <Input
            label='Name'
            name='demo-username' />
          <Input
            label='Email'
            name='demo-password' />
          <Button>Login</Button>
        </PanelBody>
        <PanelFooter text='PanelFooter' />
      </Panel>

      );
    }
  }
  ```
