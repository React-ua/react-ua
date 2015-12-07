import React, {PropTypes} from 'react';
import ClassNames from 'classnames';
import styles from './style';

export default class Arrow extends React.Component {

  render() {
    let classes = ClassNames('inline-block', this.props.className, styles.root,
    {
      [styles.up]: this.props.up,
    [styles.down]: this.props.down
  }
);

return (
  <span className={classes}/>
);
}
}

Arrow.propTypes = {
  className: React.PropTypes.string
};

Arrow.defaultProps = {
  className: ''
};
