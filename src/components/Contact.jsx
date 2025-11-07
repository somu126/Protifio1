export default function Contact() {
  return (
    <section id="contact" className="p-6 md:p-12 text-center">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg">
        <h2 className="text-3xl font-bold mb-4 text-white">Contact Me</h2>
        <p className="text-slate-300 mb-6">
          Have a project or want to collaborate? Feel free to reach out!
        </p>
        <div className="space-y-2">
          <p>📧 somuharshavardhan2962@gmail.com</p>
          <p>📞 +91 8978100703</p>
          <a
            href="https://linkedin.com/in/somu-sri-harshavardhan-reddy-687960231/"
            target="_blank"
            className="text-sky-400 underline hover:text-sky-300"
          >
            LinkedIn Profile
          </a>
        </div>
      </div>
    </section>
  );
}
