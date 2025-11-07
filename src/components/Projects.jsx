export default function Projects() {
  const projects = [
    {
      title: "E-commerce Retail Insights Dashboard",
      description:
        "Power BI dashboard analyzing sales trends, customer behavior, and product performance using SQL + Python.",
      image: "/images/ecommerce_dashboard.webp", // ✅ exact name and folder
      pdf: "/reports/Sales.pbix",
    },
    {
      title: "Supermarket Sales Analysis Dashboard",
      description:
        "Interactive Power BI report to monitor profit, revenue KPIs, and inventory performance.",
      image: "/images/supermarket_dashboard.jpg", // ✅ exact name and folder
      pdf: "/reports/Supermarket Sales.pbix",
    },
  ];

  return (
    <section id="projects" className="p-6 md:p-12">
      <h2 className="text-3xl font-bold mb-6 text-white">Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-lg hover:bg-white/20 transition"
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="rounded-lg mb-4 w-full h-48 object-cover"
            />
            <h3 className="text-xl font-semibold text-sky-400 mb-2">
              {proj.title}
            </h3>
            <p className="text-slate-300 text-sm mb-3">{proj.description}</p>
            <a
              href={proj.pdf}
              download
              className="px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-500 text-sm"
            >
              Download Report
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
