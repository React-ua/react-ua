import React, {PropTypes} from 'react';
import cx from 'classnames';
import css,{root, up, down} from './style';

export default class Arrow extends React.Component {

  render() {
    let classes = cx(this.props.className, root,
      {
        [up]: this.props.up,
        [down]: this.props.down
      }
    );
    console.log(css);
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
