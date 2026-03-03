import * as Yup from 'yup';

export const blogSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'Title must be 10 or more character')
    .max(150, 'Title must be 150 or less character')
    .required('Title is required'),
  content: Yup.string()
    .min(500, 'Blog mus be 500 or more character')
    .required('Blog is required'),
  category: Yup.string()
    .oneOf(['Marketing', 'Sales', 'Business', 'Technology'])
    .required('Category is required'),
});
