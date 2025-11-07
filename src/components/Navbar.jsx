import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/10 border-b border-white/20 text-slate-100 shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-lg md:text-xl font-bold text-white tracking-wide">
          Somu Sri Harshavardhan Reddy
        </h1>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              className="hover:text-sky-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="https://linkedin.com/in/somu-sri-harshavardhan-reddy-687960231/"
            target="_blank"
            className="px-3 py-1 border border-sky-400 text-sky-300 rounded-lg hover:bg-sky-500/20 hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="/resume/fresher da.pdf"
            download
            className="px-3 py-1 bg-sky-500 text-white rounded-lg hover:bg-sky-400 transition"
          >
            Resume
          </a>

          <a href="tel:+919876543210" className="text-sky-300 hover:text-sky-400">
            📞 +91 8978100703
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white hover:text-sky-400 transition"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-white/10 backdrop-blur-md border-t border-white/20 px-6 py-4 space-y-3">
          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => setOpen(false)}
              className="block hover:text-sky-400"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          ))}

          <a
            href="https://linkedin.com/in/somu-sri-harshavardhan-reddy-687960231/"
            target="_blank"
            className="block hover:text-sky-400"
          >
            LinkedIn
          </a>
          <a
            href="/resume/fresher da.pdf"
            download
            className="block hover:text-sky-400"
          >
            📄 Resume
          </a>
          <a href="tel:+919876543210" className="block hover:text-sky-400">
            📞 +91 8978100703
          </a>
        </div>
      )}
    </nav>
  );
}
