export default function About() {
  return (
    <div className="min-h-screen text-slate-200 font-sans">
      <main className="max-w-4xl mx-auto px-6 pt-16 pb-24">
        {/* Hero Image */}
        <div className="w-full rounded-2xl overflow-hidden mb-10">
          <img
            src="https://img.freepik.com/free-vector/wave-dark-gradient-background-desogn_343694-4095.jpg?semt=ais_rp_progressive&w=740&q=80"
            width={900}
            alt="About page banner"
            height={300}
            loading="eager"
            className="w-full h-auto object-cover opacity-90"
          />
        </div>

        {/* Content */}
        <h1 className="text-4xl font-bold text-white mb-6">About BlogApp</h1>

        <div className="space-y-5 text-slate-400 text-base leading-7">
          <p>
            Welcome to BlogApp — a simple and clean platform for sharing your
            thoughts, ideas, and stories with the world. Whether you are a
            seasoned writer or just getting started, BlogApp gives you the tools
            to publish and manage your content effortlessly.
          </p>
          <p>
            This project is built with Next.js as part of a learning journey,
            exploring features like dynamic routing, API routes, server-side
            rendering, middleware authentication, and more.
          </p>
          <p>
            We believe in keeping things minimal and focused — great content
            deserves a distraction-free reading experience.
          </p>
        </div>
      </main>
    </div>
  );
}
