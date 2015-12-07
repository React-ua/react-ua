# Message

Styled box with padding and background color for application flash messages

<!-- example -->
```jsx
import Pad from 'react-ua/lib/elements/pad';

class PadTest extends React.Component {

  render () {
    return (
      <Message>Sumbitted Something request</Message>
      <Message color='green'>Something successfully acquired</Message>
      <Message color='red'>Warning! Something missing from message</Message>
      <Message color='red' outline>Warning! Something has been carmelized</Message>
    );
  }
}
```

## Properties

| Name              | Type          | Default         | Description |
|:-----|:-----|:-----|:-----|
| `color`        | `colors`       |  1        | Change a color of message .|
