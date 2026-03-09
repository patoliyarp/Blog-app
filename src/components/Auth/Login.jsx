import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const { setUserEmail } = useAuthContext();
  const Navigate = useNavigate();
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('Invalid email address').required('Required'),
      password: yup
        .string()
        .min(8, 'Password must be at least 8 characters')
        .max(15, 'Password must be 15 characters or less')
        .required('Required'),
    }),
    onSubmit: (values) => {
      // Mock auth — any valid email + password is accepted
      setUserEmail(values.email);
      Navigate('/');
      setError(null);
    },
  });

  return (
    <>
      <div className="min-h-[80vh] bg-primary flex flex-col items-center pt-8 px-4 font-sans justify-center">
        <h1 className="text-2xl font-light mb-4 dark:text-gray-100">Sign in</h1>

        <div className="w-full max-w-77 bg-white dark:bg-primary-200 border border-[#d8dee4] dark:border-[#30363d] rounded-md p-4 shadow-sm">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">
                Email address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="w-full px-3 py-1 bg-white dark:bg-[#0d1117] border border-[#d8dee4] dark:border-[#30363d] rounded-md focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none dark:text-white"
              />
              {formik.touched.email && formik.errors.email ? (
                <p className="text-red-700">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                className="w-full px-3 py-1 bg-white dark:bg-[#0d1117] border border-[#d8dee4] dark:border-[#30363d] rounded-md focus:border-[#0969da] focus:ring-1 focus:ring-[#0969da] outline-none dark:text-white"
              />
              {formik.touched.password && formik.errors.password ? (
                <p className="text-red-700">{formik.errors.password}</p>
              ) : null}

              {error ? (
                <p className="text-red-700 mt-1 text-sm">{error}</p>
              ) : null}
            </div>

            <button
              type="submit"
              className="w-full py-1.5 bg-btn text-black font-semibold rounded-md text-sm transition shadow-sm"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
