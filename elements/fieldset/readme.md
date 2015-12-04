# Fieldset

Wrapper for form label and Fieldset input elements
<!-- example -->
```jsx
import Fieldset from 'react-ua/lib/elements/Fieldset';

class FieldsetTest extends React.Component {

  render () {
    return (

      <Fieldset legend="Hamburger">
          <Input
            label="Fries"
            name="demo-fries"/>
          <Input
            label="Pickles"
            name="demo-pickles"/>
          <Select
            label="Temperature"
            name="demo-temperature"
            options={[{"value":1,"label":"Rare"},{"value":2,"label":"Medium Rare"},{"value":3,"label":"Medium"},{"value":4,"label":"Medium Well"},{"value":5,"label":"Well Done"}]}/>
        </Fieldset>

      );
    }
  }
  ```
