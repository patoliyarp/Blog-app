import { Link } from 'react-router-dom';
import Home from './Home';

export default function Hero() {
  return (
    <>
      <div className="bg-primary border-b border-primary-200">
        <div className="relative  px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-10 sm:py-15 lg:py-20">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center"></div>
            <div className="text-center">
              <h1 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-6xl">
                Welcome To Blog app
              </h1>
              <p className="mt-8 text-lg font-medium  text-primary-text sm:text-xl/8">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                quas iusto distinctio temporibus quod eaque fuga repellendus
                odit sapiente architecto.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link
                  to="/blogs"
                  href="#"
                  className="rounded-md bg-btn  px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Get started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}
