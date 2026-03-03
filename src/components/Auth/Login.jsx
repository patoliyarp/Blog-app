import { useFormik } from 'formik';
import * as yup from 'yup';
import { useAuthContext } from '../../context/AuthContext';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export function Login() {
  const { setIsLogin } = useAuthContext();

  const Navigate = useNavigate();

  let userEmail = 'user@gmail.com';
  let userPass = 'user@1234';
  let [error, setError] = useState(null);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: yup.object({
      email: yup.string().email('invalid email address').required('Required'),
      password: yup
        .string()
        .max(15, 'password must be 15 character or grater than 8')
        .min(8, 'password must be grater than 8 character')
        .required('Required'),
    }),
    onSubmit: (value) => {
      if (value.email == userEmail && value.password == userPass) {
        setIsLogin(true);
        Navigate('/');
        setError(null);
      } else {
        setError('enter valid credentials');
      }
    },
  });

  return (
    <>
      <div className="min-h-[80vh] bg-primary flex flex-col items-center pt-8 px-4 font-sans justify-center">
        <h1 className="text-2xl font-light mb-4 dark:text-gray-100">
          Sign in to{' '}
        </h1>

        {/* <!-- Login Card --> */}
        <div className="w-full max-w-77 bg-white dark:bg-primary-200 border border-[#d8dee4] dark:border-[#30363d] rounded-md p-4 shadow-sm">
          <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div>
              <label className="block text-sm mb-2 dark:text-gray-300">
                email address
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
                <p className="text-red-700 ">{formik.errors.email}</p>
              ) : null}
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm dark:text-gray-300">Password</label>
              </div>
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
                <p className="text-red-700 ">{formik.errors.password}</p>
              ) : null}

              {error ? <p className="text-red-700 ">{error}</p> : null}
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
