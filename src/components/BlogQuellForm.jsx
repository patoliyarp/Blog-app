import { Formik, Form, Field, ErrorMessage } from 'formik';
import React, { useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { blogSchema } from '../schema/BlogSchema.js';
import { useBlogContext } from '../context/BlogContext.js';
import { useAuthContext } from '../context/AuthContext.js';
import { useSearchParams, useNavigate } from 'react-router-dom';

function BlogQuellForm() {
  const { Blog, addBlog, updateBlog } = useBlogContext();

  const { userEmail } = useAuthContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const editId = searchParams.get('edit');
  const editBlog = editId ? Blog.find((b) => String(b.id) === editId) : null;
  const isEditMode = !!editBlog;
  const [blogState, setBlogState] = useState(null);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline'],
      [({ list: 'ordered' }, { list: 'bullet' })],
    ],
  };

  const handleSubmit = (values, { resetForm }) => {
    if (isEditMode) {
      updateBlog(Number(editId), values);
      setBlogState('updated');
      setTimeout(() => {
        navigate('/blogs');
      }, 500);
    } else {
      const newBlog = {
        id: Date.now(),
        user: userEmail,
        ...values,
        upload_date: new Date().toDateString(),
      };
      addBlog(newBlog);
      resetForm();
      setBlogState('added');
    }
  };
  return (
    <div className="max-w-5xl mx-auto ">
      <h2 className="text-2xl font-bold mb-4">
        {isEditMode ? 'Edit Blog' : 'Create Blog'}
      </h2>
      <div className="mt-3">
        <Formik
          enableReinitialize
          initialValues={{
            title: editBlog?.title || '',
            category: editBlog?.category || '',
            content: editBlog?.content || '',
          }}
          validationSchema={blogSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, values, setFieldValue, setFieldTouched }) => (
            <Form>
              {/* blog title */}
              <div className="mb-4">
                <Field
                  name="title"
                  placeholder="Enter Post Title"
                  className="w-[80%] bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white placeholder-primary-text outline-none focus:border-btn"
                />
                <ErrorMessage
                  name="title"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <div className="mt-3 mb-12">
                <div className="w-[80%] text-white ">
                  <ReactQuill
                    theme="snow"
                    modules={modules}
                    value={values.content}
                    onChange={(content) => setFieldValue('content', content)}
                    onBlur={() => setFieldTouched('content', true)}
                    className="bg-secondary rounded-xl overflow-hidden border border-primary-100"
                  />
                </div>
                <ErrorMessage
                  name="content"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* blog category */}
              <div className="mt-4">
                <label htmlFor="category" className="text-white block mb-1">
                  Category
                </label>
                <Field
                  as="select"
                  name="category"
                  className="bg-secondary border border-primary-100 rounded-xl px-4 py-2.5 text-sm text-white outline-none focus:border-btn"
                >
                  <option value="">Select Category</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Sales">Sales</option>
                  <option value="Business">Business</option>
                  <option value="Technology">Technology</option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="p"
                  className="text-red-500 text-xs mt-1"
                />
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                className="px-5 py-3 bg-btn text-black font-semibold rounded-md mt-6 cursor-pointer"
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
}

export default BlogQuellForm;
