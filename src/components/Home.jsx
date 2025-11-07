export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center text-center md:text-left gap-8 px-6 pt-24 md:pt-32"
    >
      {/* Profile Photo */}
      <img
        src="resume\photo.jpg"
        alt="Profile"
        className="w-44 h-44 md:w-72 md:h-72 rounded-full object-cover border-4 border-sky-500 shadow-lg"
      />

      {/* Intro */}
      <div className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
          Somu Sri Harshavardhan Reddy
        </h1>
        <p className="text-slate-300 text-lg mb-6">
          Data Analyst | Power BI | SQL | Python | Excel
        </p>
        <a
          href="#projects"
          className="inline-block px-6 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}
