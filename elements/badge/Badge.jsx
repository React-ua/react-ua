
import React from 'react'
import cx from 'classnames'
import colors from '../utils/colors'
import styles from './style'

class Badge extends React.Component {

  render() {
    let classes = cx(styles.root,
      'bg-' + this.props.color
    )


    console.log(classes);

    return (
      <span className={classes}>
        {this.props.children}
      </span>
    )
  }

}

Badge.propTypes = {
  color: React.PropTypes.oneOf(colors)
}

Badge.defaultProps = {
  color: 'blue'
}

export default Badge
