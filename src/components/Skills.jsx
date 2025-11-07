export default function Skills() {
  const skills = [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Power BI", level: 88 },
    { name: "Excel", level: 80 },
  ];

  return (
    <section id="skills" className="p-6 md:p-12">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white">Skills</h2>
        <div className="space-y-4">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="flex justify-between text-slate-300 text-sm mb-1">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
