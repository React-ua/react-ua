# Select

Wrapper for form label and Select elements
<!-- example -->
```jsx
import Select from 'react-ua/lib/elements/Select';

class SelectTest extends React.Component {

  render () {
    return (

      <Select
      label="Product"
  name="demo-select"
  options={[{"value":1,"label":"One"},{"value":2,"label":"Two"},{"value":3,"label":"Three"}]}/>

      );
    }
  }
  ```
