import * as Yup from 'yup';

export const blogSchema = Yup.object().shape({
  title: Yup.string()
    .min(10, 'title must grater than 10 character')
    .max(150, 'Title must be 150 or less character')
    .required('Title is required'),
  content: Yup.string()
    .min(250, '250 character must be required')
    .required('Blog is required'),
  category: Yup.string()
    .oneOf(['Marketing', 'Sales', 'Business', 'Technology'])
    .required('Category is required'),
});
