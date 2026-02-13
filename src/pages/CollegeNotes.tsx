import { useState } from "react";
import { Link } from "react-router-dom";
import { semesters } from "@/data/notesData";
import { ArrowLeft, BookOpen, ChevronRight, Download, FileText, GraduationCap } from "lucide-react";
import type { Subject } from "@/data/notesData";

const CollegeNotes = () => {
  const [selectedSemester, setSelectedSemester] = useState<number | null>(null);
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);

  const currentSemester = semesters.find((s) => s.number === selectedSemester);
  const isDownloadableLink = (link: string) => link && link !== "#";
  const isLikelyUrl = (value: string) => /^https?:\/\//i.test(value);
  const buildReferenceLink = (reference: string) => {
    if (isLikelyUrl(reference)) {
      return reference;
    }
    return `https://www.google.com/search?q=${encodeURIComponent(reference)}`;
  };

  const handleBack = () => {
    if (selectedSubject) {
      setSelectedSubject(null);
    } else if (selectedSemester) {
      setSelectedSemester(null);
    }
  };

  return (
    <div className="container mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-2 text-sm text-muted-foreground">
        <Link to="/" className="transition-colors hover:text-foreground">Home</Link>
        <ChevronRight className="h-4 w-4" />
        <span className={!selectedSemester ? "text-foreground font-medium" : "cursor-pointer transition-colors hover:text-foreground"} onClick={() => { setSelectedSemester(null); setSelectedSubject(null); }}>
          College Notes
        </span>
        {selectedSemester && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className={!selectedSubject ? "text-foreground font-medium" : "cursor-pointer transition-colors hover:text-foreground"} onClick={() => setSelectedSubject(null)}>
              Semester {selectedSemester}
            </span>
          </>
        )}
        {selectedSubject && (
          <>
            <ChevronRight className="h-4 w-4" />
            <span className="font-medium text-foreground">{selectedSubject.name}</span>
          </>
        )}
      </div>

      {(selectedSemester || selectedSubject) && (
        <button onClick={handleBack} className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>
      )}

      {/* Semester Selection */}
      {!selectedSemester && (
        <div>
          <div className="mb-8">
            <h1 className="mb-2 font-heading text-3xl font-bold">College Notes</h1>
            <p className="text-muted-foreground">Select your semester to view subject-wise notes</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4">
            {semesters.map((sem) => (
              <button
                key={sem.number}
                onClick={() => setSelectedSemester(sem.number)}
                className="group rounded-xl border border-border bg-card p-6 text-left card-elevated"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground font-heading text-lg font-bold">
                  {sem.number}
                </div>
                <h3 className="font-heading text-lg font-bold">Semester {sem.number}</h3>
                <p className="text-xs text-muted-foreground">
                  {sem.subjects.length > 0 ? `${sem.subjects.length} subject${sem.subjects.length > 1 ? "s" : ""}` : "Coming soon"}
                </p>
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Subject Selection */}
      {selectedSemester && !selectedSubject && currentSemester && (
        <div>
          <div className="mb-8">
            <h1 className="mb-2 font-heading text-3xl font-bold">Semester {selectedSemester}</h1>
            <p className="text-muted-foreground">Choose a subject to view unit-wise notes</p>
          </div>
          {currentSemester.subjects.length === 0 ? (
            <div className="rounded-xl border border-border bg-card p-12 text-center card-elevated">
              <GraduationCap className="mx-auto mb-4 h-12 w-12 text-muted-foreground/40" />
              <h3 className="mb-1 font-heading text-lg font-bold">Coming Soon</h3>
              <p className="text-sm text-muted-foreground">Notes for this semester are being prepared.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {currentSemester.subjects.map((subject) => (
                <button
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className="group rounded-xl border border-border bg-card p-6 text-left card-elevated"
                >
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary/20 text-secondary">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h3 className="mb-1 font-heading text-base font-bold">{subject.name}</h3>
                  <p className="mb-2 text-xs text-muted-foreground">Code: {subject.code}</p>
                  <p className="text-xs text-muted-foreground">{subject.units.length} Units</p>
                </button>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Unit-wise Notes */}
      {selectedSubject && (
        <div>
          <div className="mb-8">
            <h1 className="mb-1 font-heading text-3xl font-bold">{selectedSubject.name}</h1>
            <p className="text-sm text-muted-foreground">Code: {selectedSubject.code} • {selectedSubject.units.length} Units</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedSubject.units.map((unit) => (
              <div key={unit.unitNumber} className="rounded-xl border border-border bg-card p-6 card-elevated">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Unit {unit.unitNumber}
                </div>
                <h3 className="mb-2 font-heading text-lg font-bold">{unit.title}</h3>
                <div className="mb-3">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">Topics</p>
                  <ul className="space-y-0.5">
                    {unit.topics.map((topic, i) => (
                      <li key={i} className="text-sm text-foreground/80">• {topic}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-4">
                  <p className="mb-1 text-xs font-semibold text-muted-foreground uppercase tracking-wide">References</p>
                  <ul className="space-y-1">
                    {unit.references.map((ref, i) => (
                      <li key={i}>
                        <a
                          href={buildReferenceLink(ref)}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs italic text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
                        >
                          {ref}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex gap-2">
                  <a
                    href={unit.notesLink}
                    download={isDownloadableLink(unit.notesLink) ? "" : undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition-colors hover:opacity-90"
                  >
                    <FileText className="h-3.5 w-3.5" /> Notes
                  </a>
                  <a
                    href={unit.pyqLink}
                    download={isDownloadableLink(unit.pyqLink) ? "" : undefined}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-xs font-semibold text-secondary-foreground transition-colors hover:opacity-90"
                  >
                    <Download className="h-3.5 w-3.5" /> PYQs
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

export default CollegeNotes;
