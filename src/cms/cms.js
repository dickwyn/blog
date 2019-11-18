import CMS from 'netlify-cms-app';

import BlogPostPreview from './preview-templates/BlogPost';

CMS.registerPreviewTemplate('blogPosts', BlogPostPreview);
