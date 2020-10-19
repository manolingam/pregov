import React from 'react'

const Error = ({ classes, error }) => (
  <div className='error-block'>
    <div >
      <h3 className={'error-title'}>
        Error
      </h3>
    </div>
    <div item>
      <div container>
          <pre className={classes.errorText}>
            {JSON.stringify(error, undefined, 2)}
          </pre>
      </div>
    </div>
  </div>
)

export default Error
