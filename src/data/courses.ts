type Course = {
  id: number;
  title: string;
  description: string;
  completedPercent: number;
};

export const mockCourses: Course[] = [
  {
    id: 1,
    title: "Saving & Budgeting 101",
    description: "Learn how to manage money better and build savings habits.",
    completedPercent: 60,
  },
  {
    id: 2,
    title: "Understanding Credit",
    description: "All about credit cards, scores, and how to use them wisely.",
    completedPercent: 30,
  },
  {
    id: 3,
    title: "Investing Basics",
    description: "A beginner-friendly guide to start investing confidently.",
    completedPercent: 10,
  },
  {
    id: 4,
    title: "Loans & EMIs",
    description: "Understand loans, interest rates, and how to borrow smartly.",
    completedPercent: 0,
  },
  {
    id: 5,
    title: "Emergency Funds & Safety Nets",
    description:
      "Why and how to build an emergency fund to handle life’s surprises.",
    completedPercent: 0,
  },
  {
    id: 6,
    title: "Understanding Insurance",
    description:
      "Life, health, car & more — protect yourself with the right coverage.",
    completedPercent: 0,
  },
  {
    id: 7,
    title: "Decoding Bank Statements",
    description:
      "Master your bank passbook, statements, and understand charges.",
    completedPercent: 0,
  },
  {
    id: 8,
    title: "Understanding Income Tax (India)",
    description:
      "A simplified guide to how income tax works and how to file returns.",
    completedPercent: 0,
  },
  {
    id: 9,
    title: "UPI, Wallets & Online Payments",
    description:
      "A guide to using UPI, Paytm, PhonePe, and digital payments safely.",
    completedPercent: 0,
  },
  {
    id: 10,
    title: "Mutual Funds Explained",
    description:
      "Learn about SIPs, types of mutual funds, and how to get started.",
    completedPercent: 0,
  },
  {
    id: 11,
    title: "How to Avoid Financial Scams",
    description:
      "Spot and avoid frauds like phishing, fake apps, and investment traps.",
    completedPercent: 0,
  },
  {
    id: 12,
    title: "Smart Spending Habits",
    description:
      "Differentiate needs vs wants, and how to spend wisely without guilt.",
    completedPercent: 0,
  },
];
