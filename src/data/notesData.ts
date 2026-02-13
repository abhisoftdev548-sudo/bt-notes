export interface Unit {
  unitNumber: number;
  title: string;
  topics: string[];
  notesLink: string;
  pyqLink: string;
  references: string[];
}

export interface Subject {
  id: string;
  name: string;
  code: string;
  units: Unit[];
}

export interface Semester {
  number: number;
  subjects: Subject[];
}

export interface SkillChapter {
  chapterNumber: number;
  title: string;
  topics: string[];
  notesLink: string;
  downloadLink: string;
  references: string[];
}

export interface SkillNote {
  id: string;
  title: string;
  description: string;
  icon: string;
  chapters: SkillChapter[];
}

export const semesters: Semester[] = [
  {
    number: 1,
    subjects: [
      {
        id: "math1",
        name: "Engineering Mathematics-I",
        code: "BAS-101",
        units: [
          { unitNumber: 1, title: "Matrices", topics: ["Types of Matrices", "Rank", "Eigen Values"], notesLink: "https://drive.google.com/file/d/1--bsCIZY1Yim1iW1zDy59tvCUwnVfYgn/view?usp=sharing", pyqLink: "placeholder.svg", references: ["Higher Engineering Mathematics - B.S. Grewal"] },
          { unitNumber: 2, title: "Differential Calculus", topics: ["Successive Differentiation", "Leibnitz Theorem"], notesLink: "#", pyqLink: "#", references: ["Advanced Engineering Mathematics - Erwin Kreyszig"] },
          { unitNumber: 3, title: "Integral Calculus", topics: ["Beta & Gamma Functions", "Double Integrals"], notesLink: "#", pyqLink: "#", references: ["Higher Engineering Mathematics - B.S. Grewal"] },
          { unitNumber: 4, title: "Vector Calculus", topics: ["Gradient", "Divergence", "Curl"], notesLink: "#", pyqLink: "#", references: ["Engineering Mathematics - H.K. Dass"] },
          { unitNumber: 5, title: "Linear Algebra", topics: ["Linear Independence", "Basis", "Dimension"], notesLink: "#", pyqLink: "#", references: ["Linear Algebra - Gilbert Strang"] },
        ],
      },
      {
        id: "physics1",
        name: "Engineering Physics",
        code: "BAS-102",
        units: [
          { unitNumber: 1, title: "Optics", topics: ["Interference", "Diffraction", "Polarization"], notesLink: "#", pyqLink: "#", references: ["Engineering Physics - Gaur & Gupta"] },
          { unitNumber: 2, title: "Quantum Mechanics", topics: ["Wave-Particle Duality", "Schrödinger Equation"], notesLink: "#", pyqLink: "#", references: ["Concepts of Modern Physics - Arthur Beiser"] },
          { unitNumber: 3, title: "Electromagnetic Theory", topics: ["Maxwell's Equations", "EM Waves"], notesLink: "#", pyqLink: "#", references: ["Introduction to Electrodynamics - David Griffiths"] },
          { unitNumber: 4, title: "Laser & Fiber Optics", topics: ["Laser Principles", "Optical Fiber Types"], notesLink: "#", pyqLink: "#", references: ["Optics - Ajoy Ghatak"] },
          { unitNumber: 5, title: "Solid State Physics", topics: ["Crystal Structure", "Band Theory"], notesLink: "#", pyqLink: "#", references: ["Solid State Physics - S.O. Pillai"] },
        ],
      },
      {
        id: "chem1",
        name: "Engineering Chemistry",
        code: "BAS-103",
        units: [
          { unitNumber: 1, title: "Atomic & Molecular Structure", topics: ["Quantum Numbers", "Molecular Orbital Theory"], notesLink: "#", pyqLink: "#", references: ["Engineering Chemistry - Jain & Jain"] },
          { unitNumber: 2, title: "Spectroscopy", topics: ["UV-Visible", "IR Spectroscopy"], notesLink: "#", pyqLink: "#", references: ["Organic Chemistry - Morrison & Boyd"] },
          { unitNumber: 3, title: "Electrochemistry", topics: ["Galvanic Cells", "Nernst Equation"], notesLink: "#", pyqLink: "#", references: ["Physical Chemistry - P.W. Atkins"] },
          { unitNumber: 4, title: "Polymer Chemistry", topics: ["Polymerization", "Biodegradable Polymers"], notesLink: "#", pyqLink: "#", references: ["Polymer Science - V.R. Gowariker"] },
          { unitNumber: 5, title: "Water Chemistry", topics: ["Hardness", "Treatment Methods"], notesLink: "#", pyqLink: "#", references: ["Environmental Chemistry - A.K. De"] },
        ],
      },
    ],
  },
  {
    number: 2,
    subjects: [
      {
        id: "math2",
        name: "Engineering Mathematics-II",
        code: "BAS-201",
        units: [
          { unitNumber: 1, title: "Ordinary Differential Equations", topics: ["First Order ODE", "Higher Order ODE"], notesLink: "#", pyqLink: "#", references: ["Higher Engineering Mathematics - B.S. Grewal"] },
          { unitNumber: 2, title: "Partial Differential Equations", topics: ["Formation", "Solution Methods"], notesLink: "#", pyqLink: "#", references: ["Advanced Engineering Mathematics - Erwin Kreyszig"] },
          { unitNumber: 3, title: "Laplace Transform", topics: ["Properties", "Inverse Laplace"], notesLink: "#", pyqLink: "#", references: ["Engineering Mathematics - H.K. Dass"] },
          { unitNumber: 4, title: "Fourier Series", topics: ["Euler Formulae", "Half Range Series"], notesLink: "#", pyqLink: "#", references: ["Higher Engineering Mathematics - B.S. Grewal"] },
          { unitNumber: 5, title: "Complex Variables", topics: ["Analytic Functions", "Cauchy Theorem"], notesLink: "#", pyqLink: "#", references: ["Complex Variables - Churchill & Brown"] },
        ],
      },
      {
        id: "cp",
        name: "Computer Programming (C)",
        code: "BCS-201",
        units: [
          { unitNumber: 1, title: "Introduction to C", topics: ["Data Types", "Operators", "Control Flow"], notesLink: "#", pyqLink: "#", references: ["Let Us C - Yashavant Kanetkar"] },
          { unitNumber: 2, title: "Arrays & Strings", topics: ["1D/2D Arrays", "String Functions"], notesLink: "#", pyqLink: "#", references: ["Programming in ANSI C - Balagurusamy"] },
          { unitNumber: 3, title: "Functions & Recursion", topics: ["Function Types", "Recursion"], notesLink: "#", pyqLink: "#", references: ["The C Programming Language - K&R"] },
          { unitNumber: 4, title: "Pointers & Structures", topics: ["Pointer Arithmetic", "Struct & Union"], notesLink: "#", pyqLink: "#", references: ["Let Us C - Yashavant Kanetkar"] },
          { unitNumber: 5, title: "File Handling", topics: ["File I/O", "Random Access"], notesLink: "#", pyqLink: "#", references: ["C Programming - Dennis Ritchie"] },
        ],
      },
    ],
  },
  {
    number: 3,
    subjects: [
      {
        id: "ds",
        name: "Data Structures",
        code: "BCS-301",
        units: [
          { unitNumber: 1, title: "Arrays & Linked Lists", topics: ["Array Operations", "Singly & Doubly Linked Lists"], notesLink: "#", pyqLink: "#", references: ["Data Structures Using C - Reema Thareja"] },
          { unitNumber: 2, title: "Stacks & Queues", topics: ["Stack Operations", "Circular Queue", "Priority Queue"], notesLink: "#", pyqLink: "#", references: ["Data Structures - Lipschutz"] },
          { unitNumber: 3, title: "Trees", topics: ["Binary Tree", "BST", "AVL Tree"], notesLink: "#", pyqLink: "#", references: ["Introduction to Algorithms - Cormen"] },
          { unitNumber: 4, title: "Graphs", topics: ["BFS", "DFS", "Shortest Path"], notesLink: "#", pyqLink: "#", references: ["Data Structures & Algorithms - Narasimha Karumanchi"] },
          { unitNumber: 5, title: "Sorting & Searching", topics: ["Quick Sort", "Merge Sort", "Binary Search"], notesLink: "#", pyqLink: "#", references: ["Algorithms - Robert Sedgewick"] },
        ],
      },
    ],
  },
  {
    number: 4,
    subjects: [
      {
        id: "os",
        name: "Operating Systems",
        code: "BCS-401",
        units: [
          { unitNumber: 1, title: "Introduction to OS", topics: ["OS Types", "System Calls"], notesLink: "#", pyqLink: "#", references: ["Operating System Concepts - Silberschatz"] },
          { unitNumber: 2, title: "Process Management", topics: ["Scheduling", "Threads", "Synchronization"], notesLink: "#", pyqLink: "#", references: ["Modern Operating Systems - Tanenbaum"] },
          { unitNumber: 3, title: "Memory Management", topics: ["Paging", "Segmentation", "Virtual Memory"], notesLink: "#", pyqLink: "#", references: ["Operating System Concepts - Silberschatz"] },
          { unitNumber: 4, title: "File Systems", topics: ["File Organization", "Directory Structure"], notesLink: "#", pyqLink: "#", references: ["Operating Systems - William Stallings"] },
          { unitNumber: 5, title: "Deadlocks", topics: ["Detection", "Prevention", "Avoidance"], notesLink: "#", pyqLink: "#", references: ["Operating System Concepts - Silberschatz"] },
        ],
      },
    ],
  },
  { number: 5, subjects: [] },
  { number: 6, subjects: [] },
  { number: 7, subjects: [] },
  { number: 8, subjects: [] },
];

export const skillNotes: SkillNote[] = [
  {
    id: "html-css", title: "HTML & CSS", description: "Learn the fundamentals of web development with HTML5 and CSS3", icon: "🌐",
    chapters: [
      { chapterNumber: 1, title: "HTML Basics", topics: ["Elements & Tags", "Forms & Inputs", "Semantic HTML"], notesLink: "#", downloadLink: "#", references: ["MDN Web Docs"] },
      { chapterNumber: 2, title: "CSS Fundamentals", topics: ["Selectors", "Box Model", "Flexbox & Grid"], notesLink: "#", downloadLink: "#", references: ["CSS Tricks"] },
      { chapterNumber: 3, title: "Responsive Design", topics: ["Media Queries", "Mobile First", "CSS Variables"], notesLink: "#", downloadLink: "#", references: ["MDN Web Docs"] },
    ],
  },
  {
    id: "javascript", title: "JavaScript", description: "Master JavaScript from basics to advanced concepts", icon: "⚡",
    chapters: [
      { chapterNumber: 1, title: "JS Fundamentals", topics: ["Variables", "Data Types", "Control Flow"], notesLink: "#", downloadLink: "#", references: ["Eloquent JavaScript"] },
      { chapterNumber: 2, title: "Functions & Scope", topics: ["Closures", "Arrow Functions", "Hoisting"], notesLink: "#", downloadLink: "#", references: ["You Don't Know JS"] },
      { chapterNumber: 3, title: "DOM Manipulation", topics: ["Selectors", "Events", "DOM API"], notesLink: "#", downloadLink: "#", references: ["MDN Web Docs"] },
      { chapterNumber: 4, title: "Async JavaScript", topics: ["Promises", "Async/Await", "Fetch API"], notesLink: "#", downloadLink: "#", references: ["JavaScript.info"] },
    ],
  },
  {
    id: "react", title: "React.js", description: "Build modern UIs with React components and hooks", icon: "⚛️",
    chapters: [
      { chapterNumber: 1, title: "React Basics", topics: ["JSX", "Components", "Props"], notesLink: "#", downloadLink: "#", references: ["React Official Docs"] },
      { chapterNumber: 2, title: "State & Hooks", topics: ["useState", "useEffect", "Custom Hooks"], notesLink: "#", downloadLink: "#", references: ["React Official Docs"] },
      { chapterNumber: 3, title: "Routing & Context", topics: ["React Router", "Context API", "useReducer"], notesLink: "#", downloadLink: "#", references: ["React Router Docs"] },
    ],
  },
  {
    id: "python", title: "Python", description: "Learn Python programming for data science and automation", icon: "🐍",
    chapters: [
      { chapterNumber: 1, title: "Python Basics", topics: ["Variables", "Data Types", "Loops"], notesLink: "#", downloadLink: "#", references: ["Automate the Boring Stuff"] },
      { chapterNumber: 2, title: "Functions & Modules", topics: ["Defining Functions", "Modules", "Packages"], notesLink: "#", downloadLink: "#", references: ["Python Docs"] },
      { chapterNumber: 3, title: "OOP in Python", topics: ["Classes", "Inheritance", "Polymorphism"], notesLink: "#", downloadLink: "#", references: ["Python Crash Course"] },
    ],
  },
  {
    id: "git", title: "Git & GitHub", description: "Version control and collaboration with Git", icon: "📦",
    chapters: [
      { chapterNumber: 1, title: "Git Basics", topics: ["Init", "Add & Commit", "Branching"], notesLink: "#", downloadLink: "#", references: ["Pro Git Book"] },
      { chapterNumber: 2, title: "GitHub Workflow", topics: ["Pull Requests", "Issues", "Actions"], notesLink: "#", downloadLink: "#", references: ["GitHub Docs"] },
    ],
  },
  {
    id: "dsa", title: "DSA (Problem Solving)", description: "Data Structures & Algorithms for coding interviews", icon: "🧩",
    chapters: [
      { chapterNumber: 1, title: "Arrays & Strings", topics: ["Two Pointers", "Sliding Window", "Hashing"], notesLink: "#", downloadLink: "#", references: ["Striver's A2Z DSA Sheet"] },
      { chapterNumber: 2, title: "Linked Lists & Stacks", topics: ["Singly LL", "Stack Problems", "Queue"], notesLink: "#", downloadLink: "#", references: ["GeeksforGeeks"] },
      { chapterNumber: 3, title: "Trees & Graphs", topics: ["Binary Tree", "BFS/DFS", "Shortest Path"], notesLink: "#", downloadLink: "#", references: ["Introduction to Algorithms - Cormen"] },
      { chapterNumber: 4, title: "Dynamic Programming", topics: ["Memoization", "Tabulation", "Classic DP Problems"], notesLink: "#", downloadLink: "#", references: ["Striver's A2Z DSA Sheet"] },
    ],
  },
];

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Notes", href: "/#notes" },
  { label: "Contact", href: "/#contact" },
];
