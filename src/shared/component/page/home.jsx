// @flow
import React from 'react'
import Helmet from 'react-helmet'
import injectSheet from 'react-jss'
import { APP_NAME } from '../../config'

const styles = {
  hoverMe: {
    '&:hover': {
      color: 'red',
    },
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red',
    },
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen',
  },
}

/* eslint-disable jsx-a11y/anchor-is-valid */
const HomePage = ({ classes }: { classes: Object }) =>
  <div>
    <Helmet
      meta={[
        { name: 'description', content: 'Hello App is an app to say hello' },
        { property: 'og:title', content: APP_NAME },
      ]}
    />
    <div className="card-panel hoverable"> Hoverable Card Panel</div>
    <div className="col-md-4 mb-4">
      <h3 className="mb-3">JSS</h3>
      <p className={classes.hoverMe}>Hover me.</p>
      <p className={classes.resizeMe}>Resize the window.</p>
      <button className={classes.specialButton}>Composition</button>
    </div>
  </div>

/* eslint-enable jsx-a11y/anchor-is-valid */
export default injectSheet(styles)(HomePage)
