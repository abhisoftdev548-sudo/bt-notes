import { Link } from "react-router-dom";
import { BookOpen, GraduationCap, Code, Send, ArrowRight, FileText, Download } from "lucide-react";
import { skillNotes } from "@/data/notesData";
import heroImage from "@/assets/hero-study.png";
import { useState } from "react";

const Index = () => {
  const [contactForm, setContactForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setContactForm({ name: "", email: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden hero-bg text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={heroImage} alt="Study materials" className="h-full w-full object-cover" />
        </div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="max-w-2xl animate-fade-in-up">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 bg-primary-foreground/10 px-4 py-1.5 text-sm">
              <FileText className="h-4 w-4" />
              Handwritten Notes Collection
            </div>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Your Study Companion,{" "}
              <span className="text-gradient">BT-Notes</span>
            </h1>
            <p className="mb-8 text-lg text-primary-foreground/80">
              Access semester-wise college notes, skill-based learning resources, previous year questions, and more — all in one place.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/college-notes"
                className="inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 font-heading text-sm font-semibold text-secondary-foreground transition-all hover:opacity-90 amber-glow"
              >
                <GraduationCap className="h-5 w-5" />
                College Notes
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/skill-notes"
                className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/30 px-6 py-3 font-heading text-sm font-semibold text-primary-foreground transition-all hover:bg-primary-foreground/10"
              >
                <Code className="h-5 w-5" />
                Skill Notes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Notes Category Cards */}
      <section id="notes" className="container mx-auto px-4 py-20">
        <div className="mb-12 text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold">Explore Notes</h2>
          <p className="text-muted-foreground">Choose your learning path</p>
        </div>

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* College Notes Card */}
          <Link to="/college-notes" className="group rounded-xl border border-border bg-card p-8 card-elevated">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold">College Notes</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Semester-wise handwritten notes, unit-wise content, previous year questions, and reference materials.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-all group-hover:gap-2">
              Browse Semesters <ArrowRight className="h-4 w-4" />
            </span>
          </Link>

          {/* Skill Notes Card */}
          <Link to="/skill-notes" className="group rounded-xl border border-border bg-card p-8 card-elevated">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
              <Code className="h-7 w-7" />
            </div>
            <h3 className="mb-2 font-heading text-xl font-bold">Skill Notes</h3>
            <p className="mb-4 text-sm text-muted-foreground">
              Learn in-demand tech skills — HTML, CSS, JavaScript, React, Python, Git, and more.
            </p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary transition-all group-hover:gap-2">
              Explore Skills <ArrowRight className="h-4 w-4" />
            </span>
          </Link>
        </div>
      </section>

      {/* Skill Notes Grid
      <section id="skill-notes" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-heading text-3xl font-bold">Skill Notes</h2>
            <p className="text-muted-foreground">Level up your tech skills with curated notes</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {skillNotes.map((skill) => (
              <Link
                key={skill.id}
                to="/skill-notes"
                className="group rounded-xl border border-border bg-card p-6 card-elevated"
              >
                <span className="mb-3 block text-3xl">{skill.icon}</span>
                <h3 className="mb-1 font-heading text-lg font-bold">{skill.title}</h3>
                <p className="mb-3 text-sm text-muted-foreground">{skill.description}</p>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary">
                  <Download className="h-4 w-4" /> View Notes
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section> */}

      {/* About Section */}
      <section id="about" className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-3 font-heading text-3xl font-bold">About BT-Notes</h2>
          <p className="mb-6 text-muted-foreground">
            BT-Notes is a free, open-source platform created to help students access quality handwritten notes easily. Whether you're preparing for semester exams or learning new tech skills, we've got you covered.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            {[
              { icon: <BookOpen className="h-6 w-6" />, title: "Handwritten Notes", desc: "Carefully curated and easy to understand" },
              { icon: <FileText className="h-6 w-6" />, title: "PYQs Included", desc: "Previous year questions for exam prep" },
              { icon: <GraduationCap className="h-6 w-6" />, title: "Semester Wise", desc: "Organized by semester, subject & unit" },
            ].map((item, i) => (
              <div key={i} className="rounded-xl border border-border bg-card p-6 card-elevated">
                <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-foreground">
                  {item.icon}
                </div>
                <h4 className="mb-1 font-heading text-sm font-bold">{item.title}</h4>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-lg">
            <div className="mb-8 text-center">
              <h2 className="mb-3 font-heading text-3xl font-bold">Contact Us</h2>
              <p className="text-muted-foreground">Have questions or suggestions? Send a message to the developer.</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-8 card-elevated">
              <div>
                <label className="mb-1.5 block text-sm font-medium">Name</label>
                <input
                  type="text"
                  required
                  value={contactForm.name}
                  onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Email</label>
                <input
                  type="email"
                  required
                  value={contactForm.email}
                  onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-sm font-medium">Message</label>
                <textarea
                  required
                  rows={4}
                  value={contactForm.message}
                  onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/20"
                  placeholder="Write your message here..."
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:opacity-90"
              >
                <Send className="h-4 w-4" />
                Send Message
              </button>
              {submitted && (
                <p className="text-center text-sm font-medium text-secondary">✓ Message sent successfully!</p>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
