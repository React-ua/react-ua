
import React from 'react'
import cx from 'classnames'
import colors from '../utils/colors'

class Toolbar extends React.Component {

  render () {
    let color = this.props.color

    return (
      <div className={cx(
          'h5',
          'flex',
          'flex-center',
          'flex-wrap',
          'p1',
          'white',
          color ? 'bg-' + color : 'bg-black'
        )}>
        {this.props.children}
      </div>
    )
  }

}

Toolbar.propTypes = {
  color: React.PropTypes.oneOf(colors)
}

export default Toolbar
