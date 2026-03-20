import { Formik, Form, Field, ErrorMessage } from 'formik';
import { blogSchema } from '../schema/BlogSchema.js';
import { useBlogContext } from '../context/BlogContext.js';
import { useAuthContext } from '../context/AuthContext.js';
import { useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';

const CreateBlog = () => {
  const { Blog, addBlog, updateBlog } = useBlogContext();

  const { userEmail } = useAuthContext();
  const [searchParams] = useSearchParams();

  const navigate = useNavigate();

  const editId = searchParams.get('edit');
  const editBlog = editId ? Blog.find((b) => String(b.id) === editId) : null;
  const isEditMode = !!editBlog;

  const [blogState, setBlogState] = useState(null);

  const currDate = new Date();

  const handleSubmitPost = (values, { resetForm }) => {
    if (isEditMode) {
      updateBlog(Number(editId), values);
      setBlogState('updated');
      setTimeout(() => navigate('/blogs'), 500);
    } else {
      const newBlog = {
        id: Date.now(),
        user: userEmail,
        ...values,
        upload_date: currDate.toDateString(),
      };
      addBlog(newBlog);
      resetForm();
      setBlogState('added');
    }
  };

  return (
    <div className="max-w-5xl mx-auto ">
      <h2>{isEditMode ? 'Edit Blog' : 'Create Blog'}</h2>
      <div className="mt-3">
        <Formik
          enableReinitialize
          initialValues={{
            title: editBlog?.title || '',
            category: editBlog?.category || '',
            content: editBlog?.content || '',
          }}
          validationSchema={blogSchema}
          onSubmit={handleSubmitPost}
        >
          {({ isSubmitting, values }) => (
            <Form>
              {/*  Blog Title */}
              <div className="">
                <Field
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Enter Post Title"
                  className="w-[80%] bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
                  value={values.title}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="title"
                    component="p"
                    className=" text-red-500 "
                  />
                </div>
              </div>

              {/* Content */}
              <div className="mt-3">
                <Field
                  name="content"
                  id="content"
                  as="textarea"
                  rows="10"
                  placeholder="Enter Post Content"
                  className="w-[80%] bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
                  value={values.content}
                />
                <div className="h-5 mt-1">
                  <ErrorMessage
                    name="content"
                    component="p"
                    className=" text-red-500"
                  />
                </div>
                {/*Blog Category */}
                <div className="mt-1">
                  <label htmlFor="category">Category</label>
                  <br />
                  <Field
                    as="select"
                    name="category"
                    id="category"
                    className="bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-btn"
                    value={values.category}
                  >
                    <option value="">Select Category</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Sales">Sales</option>
                    <option value="Business">Business</option>
                    <option value="Technology">Technology</option>
                  </Field>
                  <div className="h-5 mt-1">
                    <ErrorMessage
                      name="category"
                      component="p"
                      className=" text-red-500"
                    />
                  </div>
                </div>
              </div>

              <button
                disabled={isSubmitting}
                type="submit"
                className="px-5 py-3 bg-btn text-black rounded-md mt-3 cursor-pointer"
              >
                {isEditMode ? 'Update' : 'Post'}
              </button>
            </Form>
          )}
        </Formik>

        {blogState === 'added' && (
          <p className="text-green-600 mt-2">Blog added successfully</p>
        )}
        {blogState === 'updated' && (
          <p className="text-green-600 mt-2">Blog updated successfully!</p>
        )}
      </div>
    </div>
  );
};
export default CreateBlog;
