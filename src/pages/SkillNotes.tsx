import { useState } from "react";
import { Link } from "react-router-dom";
import { skillNotes } from "@/data/notesData";
import { ArrowLeft, ChevronRight, Download, FileText } from "lucide-react";
import type { SkillNote } from "@/data/notesData";

const SkillNotesPage = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillNote | null>(null);

  const handleBack = () => {
    setSelectedSkill(null);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span
          className={!selectedSkill ? "text-foreground font-medium" : "cursor-pointer transition-colors hover:text-foreground"}
          onClick={() => setSelectedSkill(null)}
        >
          Skill Notes
        </span>
        {selectedSkill && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{selectedSkill.title}</span>
          </>
        )}
      </div>

      {selectedSkill && (
        <button onClick={handleBack} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      )}

      {/* Skill Selection */}
      {!selectedSkill && (
        <div>
          <div className="mb-8">
            <h1 className="mb-2 font-heading text-3xl font-bold">Skill Notes</h1>
            <p className="text-muted-foreground">Select a skill to view chapter-wise notes</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skillNotes.map((skill) => (
              <button
                key={skill.id}
                onClick={() => setSelectedSkill(skill)}
                className="group rounded-xl border border-border bg-card p-6 text-left card-elevated"
              >
                <span className="mb-3 block text-3xl">{skill.icon}</span>
                <h3 className="mb-1 font-heading text-lg font-bold">{skill.title}</h3>
                <p className="mb-2 text-sm text-muted-foreground">{skill.description}</p>
                <p className="text-xs text-muted-foreground">{skill.chapters.length} Chapters</p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Chapter-wise Notes */}
      {selectedSkill && (
        <div>
          <div className="mb-8">
            <div className="mb-2 text-3xl">{selectedSkill.icon}</div>
            <h1 className="mb-1 font-heading text-3xl font-bold">{selectedSkill.title}</h1>
            <p className="text-sm text-muted-foreground">{selectedSkill.description} • {selectedSkill.chapters.length} Chapters</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedSkill.chapters.map((chapter) => (
              <div key={chapter.chapterNumber} className="rounded-xl border border-border bg-card p-6 card-elevated">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-secondary-foreground">
                  Chapter {chapter.chapterNumber}
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">{chapter.title}</h3>
                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Topics</p>
                  <ul className="space-y-0.5">
                    {chapter.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-foreground/80">• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">References</p>
                  {chapter.references.map((ref, i) => (
                    <p key={i} className="text-xs italic text-muted-foreground">{ref}</p>
                  ))}
                </div>
                <div className="flex gap-2">
                  <a
                    href={chapter.notesLink}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    <FileText className="h-3.5 w-3.5" /> Notes
                  </a>
                  <a
                    href={chapter.downloadLink}
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:opacity-90"
                  >
                    <Download className="h-3.5 w-3.5" /> Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillNotesPage;
