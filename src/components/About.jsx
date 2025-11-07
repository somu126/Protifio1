export default function About() {
  return (
    <section id="about" className="p-6 md:p-12">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-center md:text-left">
          About Me
        </h2>

        <div className="space-y-6 text-slate-300 leading-relaxed">
          <p>
            I’m <span className="text-sky-400 font-semibold">Somu Sri Harshavardhan Reddy</span>, 
            a passionate and detail-oriented <strong>Data Analyst</strong> with a strong foundation 
            in data analytics, business intelligence, and visualization. I love transforming raw data 
            into meaningful insights that help businesses make smarter decisions.
          </p>

          <p>
            I specialize in tools such as <strong>Power BI, SQL, Excel, and Python</strong>. 
            My projects often involve data cleaning, building dynamic dashboards, and designing 
            interactive reports that tell a visual story of performance metrics and KPIs.
          </p>

          <p>
            I have a Bachelor’s degree in <strong>Computer Science and Engineering</strong> 
            from Audisankara College of Engineering and Technology. During my academic journey, 
            I built analytical projects that combined both technical and storytelling skills.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold text-sky-400 mb-3">
                🚀 Career Objective
              </h3>
              <p>
                To grow as a Data Analyst by continuously learning new technologies, 
                solving challenging business problems, and delivering actionable insights 
                that support data-driven decision-making.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-sky-400 mb-3">
                🧠 Technical Strengths
              </h3>
              <ul className="list-disc list-inside space-y-1">
                <li>Data Visualization (Power BI, Excel)</li>
                <li>Data Cleaning & Transformation (Python, Pandas)</li>
                <li>SQL Querying and Database Design</li>
                <li>ETL & Data Integration</li>
                <li>Problem Solving & Critical Thinking</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-sky-400 mb-3 mt-6">
              🌟 Personal Interests
            </h3>
            <p>
              Beyond analytics, I’m interested in technology innovations, 
              AI-driven automation, and storytelling through data. 
              In my free time, I enjoy reading tech blogs, exploring dashboards, 
              and continuously upskilling in data science.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
