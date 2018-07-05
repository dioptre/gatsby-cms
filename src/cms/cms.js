import CMS from 'netlify-cms'

import AdPreview from './preview-templates/AdPreview'

CMS.registerPreviewStyle('/styles.css')
CMS.registerPreviewTemplate('ad', AdPreview)
