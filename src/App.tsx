import { useState } from "react";
import type { FormEvent } from "react";

const skills = [
  { name: "HTML", logo: "https://cdn.simpleicons.org/html5/E34F26" },
  { name: "CSS", logo: "https://cdn.simpleicons.org/css/1572B6" },
  { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E" },
  { name: "React", logo: "https://cdn.simpleicons.org/react/61DAFB" },
  { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
  { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933" },
  { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/FFFFFF" },
  { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032" },
  { name: "GitHub", logo: "https://cdn.simpleicons.org/github/FFFFFF" },
  { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248" },
  { name: "VS Code", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
  { name: "Socket.IO", logo: "https://cdn.simpleicons.org/socketdotio/FFFFFF" },
  { name: "Cloudinary", logo: "https://cdn.simpleicons.org/cloudinary/3448C5" },
  { name: "Redux Toolkit", logo: "https://cdn.simpleicons.org/redux/764ABC" }
];

const projects = [
  {
    title: "Spend Wise",
    image: "/ndwise.png.png",
    description:
      "Expense tracking app for managing spending, budgets, and financial insights.",
    stack: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/saurabhchauhan0001/Spend-Wise.git"
  },
  {
    title: "Weather App",
    image:
      "/weather.png",
    description:
      "Collaborative project board with role-based access, deadlines, and real-time status updates.",
    stack: ["React", "HTML", "CSS", "Vercel"],
    github: "https://github.com/saurabhchauhan0001/weather"
  },
  // Third project area
  // {
  //   title: "AI Support Dashboard",
  //   image:
  //     "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
  //   description:
  //     "Analytics dashboard for customer conversations with filters, insights, and export reports.",
  //   stack: ["TypeScript", "React", "Node.js", "Charting"],
  //   github: "https://github.com/saurabhchauhan0001"
  // }
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/saurabhchauhan0001" },
  { label: "LinkedIn", href: "https://www.linkedin.com/" },
  { label: "X", href: "https://x.com/" },
  { label: "Instagram", href: "https://www.instagram.com/" },
  { label: "Email", href: "mailto:saurabhchauhan1503@gmail.com" }
];

export default function App() {
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState("Type: github, repos, projects, contact, clear");

  const runCommand = (value: string) => {
    const cmd = value.trim().toLowerCase();
    if (!cmd) {
      return;
    }

    if (cmd === "github") {
      window.open("https://github.com/saurabhchauhan0001", "_blank", "noopener,noreferrer");
      setOutput("Opening GitHub profile...");
      return;
    }

    if (cmd === "repos") {
      window.open(
        "https://github.com/saurabhchauhan0001?tab=repositories",
        "_blank",
        "noopener,noreferrer"
      );
      setOutput("Opening repositories...");
      return;
    }

    if (cmd === "projects") {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
      setOutput("Navigating to projects...");
      return;
    }

    if (cmd === "contact") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
      setOutput("Navigating to contact...");
      return;
    }

    if (cmd === "clear") {
      setOutput("Type: github, repos, projects, contact, clear");
      return;
    }

    setOutput(`Command not found: ${cmd}`);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    runCommand(command);
    setCommand("");
  };

  return (
    <div className="min-h-screen bg-black text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-black" />

      <header className="sticky top-0 z-20 border-b border-blue-500/20 bg-black/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
          <a href="#home" className="flex items-center gap-3 text-blue-300 transition hover:text-blue-200">
            <img src="/logo-sc.svg" alt="Saurabh Chauhan logo" className="h-9 w-9 rounded-lg" />
            <span className="text-lg font-bold tracking-wide">SAURABH CHAUHAN</span>
          </a>
          <div className="hidden items-center gap-2 rounded-full border border-blue-400/20 bg-black p-1 text-sm text-slate-300 md:flex">
            <a href="#about" className="rounded-full px-4 py-2 transition hover:bg-blue-500/20 hover:text-blue-200">About</a>
            <a href="#skills" className="rounded-full px-4 py-2 transition hover:bg-blue-500/20 hover:text-blue-200">Skills</a>
            <a href="#projects" className="rounded-full px-4 py-2 transition hover:bg-blue-500/20 hover:text-blue-200">Projects</a>
            <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-blue-500/20 hover:text-blue-200">Contact</a>
          </div>
        </nav>
      </header>

      <main id="home" className="relative mx-auto max-w-6xl px-5 py-12 md:py-20">
        <section className="w-full">
          <div className="mx-auto grid w-full max-w-6xl items-start gap-8 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p id="about" className="text-lg leading-9 text-slate-300 md:text-xl">
                I am Saurabh Chauhan, a full stack developer focused on creating responsive and scalable applications with HTML, CSS, JavaScript, React, Tailwind CSS, Node.js, and MongoDB. I build clean interfaces, reliable backend services, and production-ready deployments using Git, GitHub, Vercel, Socket.IO, Cloudinary, and Redux Toolkit.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-blue-500 px-6 py-3 font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-blue-400">View Projects</a>
                <a href="#contact" className="rounded-xl border border-blue-400/40 px-6 py-3 font-semibold text-blue-200 transition duration-300 hover:-translate-y-0.5 hover:bg-blue-500/10">Let&apos;s Connect</a>
              </div>
            </div>

            <aside className="rounded-2xl border border-blue-400/30 bg-black p-4 shadow-[0_18px_50px_-26px_rgba(59,130,246,0.9)]">
              <div className="mb-4 flex items-center justify-between border-b border-blue-500/20 pb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
                <p className="text-xs tracking-widest text-slate-400">terminal</p>
              </div>

              <div className="space-y-3 text-sm font-medium">
                <p className="text-blue-300">
                  <span className="text-slate-500">saurabh@portfolio</span>:~$
                  <span className="ml-2 text-slate-200">ready</span>
                </p>
                <form onSubmit={handleSubmit} className="rounded-lg border border-blue-400/25 bg-black px-3 py-2">
                  <label htmlFor="terminal-command" className="sr-only">
                    Terminal command
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-300">$</span>
                    <input
                      id="terminal-command"
                      value={command}
                      onChange={(event) => setCommand(event.target.value)}
                      placeholder="type github"
                      className="w-full bg-transparent text-slate-100 outline-none placeholder:text-slate-500"
                    />
                  </div>
                </form>
                <div className="rounded-lg border border-blue-400/25 bg-black px-3 py-2 text-slate-300">
                  {output}
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="skills" className="mt-20">
          <h2 className="text-3xl font-semibold text-white">Skills</h2>
          <p className="mt-3 max-w-2xl text-slate-300">My daily toolkit for delivering full-stack products from concept to deployment.</p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {skills.map((skill) => (
              <article
                key={skill.name}
                className="group rounded-xl border border-blue-400/20 bg-black p-3 transition duration-300 hover:-translate-y-1 hover:border-blue-300/60 hover:shadow-[0_14px_40px_-22px_rgba(59,130,246,0.8)]"
              >
                <img src={skill.logo} alt={skill.name} className="h-7 w-7" loading="lazy" />
                <h3 className="mt-2 text-sm font-semibold text-white transition group-hover:text-blue-200">{skill.name}</h3>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <h2 className="text-3xl font-semibold text-white">Projects</h2>
          <p className="mt-3 max-w-2xl text-slate-300">A few selected builds that represent my frontend and backend strengths.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="group overflow-hidden rounded-2xl border border-blue-400/20 bg-black transition duration-300 hover:-translate-y-1.5 hover:border-blue-300/60 hover:shadow-[0_16px_45px_-24px_rgba(59,130,246,0.9)]"
              >
                <div className="relative h-52 w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/55 p-4">
                    <p className="text-sm leading-6 text-slate-100">{project.description}</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-blue-200 transition group-hover:text-blue-100">{project.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-md border border-blue-300/20 bg-blue-500/10 px-2 py-1 text-xs text-blue-100">
                      {item}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-flex rounded-md border border-blue-400/40 px-3 py-1.5 text-sm text-blue-200 transition hover:border-blue-300 hover:text-blue-100"
                >
                  GitHub
                </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20 pb-10">
          <div className="rounded-2xl border border-blue-400/20 bg-black p-7">
            <h2 className="text-3xl font-semibold text-white">Contact</h2>
            <p className="mt-3 text-slate-300">Have a project idea or role opportunity? Send a message and I&apos;ll get back to you.</p>
            <form className="mt-6 grid gap-4 md:grid-cols-2">
              <input className="rounded-lg border border-blue-400/25 bg-black px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-blue-300" placeholder="Your Name" />
              <input className="rounded-lg border border-blue-400/25 bg-black px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-blue-300" placeholder="Email Address" type="email" />
              <textarea className="rounded-lg border border-blue-400/25 bg-black px-4 py-3 text-slate-100 outline-none placeholder:text-slate-400 focus:border-blue-300 md:col-span-2" rows={5} placeholder="Your Message" />
              <button type="button" className="rounded-lg bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-400 md:col-span-2 md:w-max">
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-blue-500/20 bg-black">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 md:flex-row">
          <p className="text-sm text-slate-400">Copyright {new Date().getFullYear()} Saurabh Chauhan</p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                rel={link.href.startsWith("mailto:") ? undefined : "noreferrer"}
                className="rounded-full border border-blue-400/30 px-4 py-2 text-sm text-slate-200 transition hover:-translate-y-0.5 hover:border-blue-300/70 hover:text-blue-200"
              >
                {link.label === "Email" ? "saurabhchauhan1503@gmail.com" : link.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
