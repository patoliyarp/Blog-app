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
                Data to enrich your online business
              </h1>
              <p className="mt-8 text-lg font-medium  text-primary-text sm:text-xl/8">
                Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
                lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="rounded-md bg-btn  px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs  focus-visible:outline-2 focus-visible:outline-offset-2 "
                >
                  Get started
                </a>
                <a href="#" className="text-sm/6 font-semibold text-white">
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Home />
    </>
  );
}
