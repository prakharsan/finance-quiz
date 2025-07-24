export type TermOfTheDay = {
  id: number;
  date: string; // format: YYYY-MM-DD
  text: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
  };
  correct: keyof TermOfTheDay["options"];
  explanation: string;
};

export const termOfTheDayList: {
  id: number;
  date: string;
  term: string;
  explanation: string;
}[] = [
  {
    id: 1,
    date: "2025-07-21",
    term: "Collateral",
    explanation:
      "Collateral is an asset a borrower offers a lender to secure a loan.",
  },
  {
    id: 2,
    date: "2025-07-22",
    term: "EMI (Equated Monthly Installment)",
    explanation:
      "EMI is the fixed payment made by a borrower to a lender at a specified date each calendar month.",
  },
  {
    id: 3,
    date: "2025-07-23",
    term: "Credit Score",
    explanation:
      "A credit score reflects your creditworthiness to lenders based on your credit history and repayment behavior.",
  },
  {
    id: 4,
    date: "2025-07-24",
    term: "Inflation",
    explanation:
      "Inflation is the rate at which the general price level of goods and services rises over time.",
  },
  {
    id: 5,
    date: "2025-07-25",
    term: "Net Worth",
    explanation:
      "Net worth is the total value of an individual’s assets minus their liabilities.",
  },
  {
    id: 6,
    date: "2025-07-26",
    term: "Budgeting",
    explanation:
      "Budgeting is the process of creating a plan to spend your money wisely and meet financial goals.",
  },
  {
    id: 7,
    date: "2025-07-27",
    term: "Savings Account",
    explanation:
      "A savings account is a bank account that earns interest and is used to store money for future needs.",
  },
  {
    id: 8,
    date: "2025-07-28",
    term: "Interest Rate",
    explanation:
      "The interest rate is the proportion of a loan charged as interest to the borrower, typically expressed as an annual percentage.",
  },
  {
    id: 9,
    date: "2025-07-29",
    term: "Financial Literacy",
    explanation:
      "Financial literacy is the ability to understand and use financial skills like budgeting, investing, and managing debt.",
  },
  {
    id: 10,
    date: "2025-07-30",
    term: "Diversification",
    explanation:
      "Diversification is a risk management strategy that mixes a wide variety of investments within a portfolio.",
  },
];
