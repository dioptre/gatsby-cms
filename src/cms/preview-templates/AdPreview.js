import React from 'react'
import PropTypes from 'prop-types'
import { AdTemplate } from '../../templates/ad'

const AdPreview = ({ entry, widgetFor }) => (
  <AdTemplate
    content={widgetFor('body')}
    title={entry.getIn(['data', 'title'])}
  />
)

AdPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AdPreview
