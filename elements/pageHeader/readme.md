# PageHeader

Heading and description for main page headers with border bottom. Child elements are displayed to the right.

<!-- example -->
```jsx
import PageHeader from 'react-ua/lib/elements/PageHeader';

class PageHeaderTest extends React.Component {

  render () {
    return (
      <PageHeader
      title="Helloooo"
      className="mb0 blue"
      description="One, two  seven, and last">
      <div>
      Salutation
      </div>
      </PageHeader>
      );
    }
  }
  ```
