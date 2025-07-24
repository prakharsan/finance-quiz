export type Question = {
  id: number;
  date: string; // YYYY-MM-DD format
  text: string;
  options: Record<"a" | "b" | "c" | "d", string>;
  correct: "a" | "b" | "c" | "d";
  explanation: string;
};

export const dailyQuestions: Question[] = [
  {
    id: 1,
    date: "2025-06-24",
    text: "What is compound interest?",
    options: {
      a: "Interest on the principal only",
      b: "Interest on interest and principal",
      c: "Simple interest",
      d: "Annual fees",
    },
    correct: "b",
    explanation:
      "Compound interest is calculated on the principal and also on the accumulated interest.",
  },
  {
    id: 2,
    date: "2025-06-25",
    text: "What does a credit score represent?",
    options: {
      a: "Your monthly income",
      b: "Your loan amount",
      c: "Your creditworthiness",
      d: "Your age",
    },
    correct: "c",
    explanation: "A credit score indicates how likely you are to repay debts.",
  },
  {
    id: 3,
    date: "2025-06-26",
    text: "Which of the following is a fixed expense?",
    options: {
      a: "Dining out",
      b: "Monthly rent",
      c: "Clothing",
      d: "Entertainment",
    },
    correct: "b",
    explanation: "Fixed expenses like rent remain the same every month.",
  },
  {
    id: 4,
    date: "2025-06-27",
    text: "What is a mutual fund?",
    options: {
      a: "A type of loan",
      b: "An individual stock",
      c: "A pool of money invested in various assets",
      d: "Government bond",
    },
    correct: "c",
    explanation:
      "A mutual fund pools money to invest in stocks, bonds, or other securities.",
  },
  {
    id: 5,
    date: "2025-06-28",
    text: "Which of the following is NOT a benefit of budgeting?",
    options: {
      a: "Helps track spending",
      b: "Encourages overspending",
      c: "Promotes saving",
      d: "Reduces debt",
    },
    correct: "b",
    explanation: "Budgeting helps control spending, not increase it.",
  },
  {
    id: 6,
    date: "2025-06-29",
    text: "Which document summarizes your assets, liabilities, and net worth?",
    options: {
      a: "Income statement",
      b: "Balance sheet",
      c: "Tax return",
      d: "Pay stub",
    },
    correct: "b",
    explanation:
      "A personal balance sheet lists assets, liabilities, and net worth.",
  },
  {
    id: 7,
    date: "2025-06-30",
    text: "What is the benefit of an emergency fund?",
    options: {
      a: "Higher credit score",
      b: "Tax deduction",
      c: "Covers unexpected expenses",
      d: "Investment return",
    },
    correct: "c",
    explanation: "An emergency fund helps cover unplanned financial needs.",
  },
  {
    id: 8,
    date: "2025-07-01",
    text: "Which of the following is a variable expense?",
    options: {
      a: "Rent",
      b: "Electricity bill",
      c: "Car loan",
      d: "Insurance premium",
    },
    correct: "b",
    explanation: "Utility bills like electricity vary each month.",
  },
  {
    id: 9,
    date: "2025-07-02",
    text: "Why should you diversify your investments?",
    options: {
      a: "To increase debt",
      b: "To reduce risk",
      c: "To avoid taxes",
      d: "To earn less",
    },
    correct: "b",
    explanation: "Diversification spreads risk across various assets.",
  },
  {
    id: 10,
    date: "2025-07-03",
    text: "What is an example of passive income?",
    options: {
      a: "Salary",
      b: "Wages",
      c: "Rental income",
      d: "Freelance work",
    },
    correct: "c",
    explanation: "Rental income is a form of passive income.",
  },
  {
    id: 11,
    date: "2025-07-04",
    text: "What does ROI stand for?",
    options: {
      a: "Rate of Income",
      b: "Return on Investment",
      c: "Receipt of Interest",
      d: "Revenue over Inflation",
    },
    correct: "b",
    explanation: "ROI measures how much profit you earn on an investment.",
  },
  {
    id: 12,
    date: "2025-07-05",
    text: "What is inflation?",
    options: {
      a: "Increase in salary",
      b: "Decrease in taxes",
      c: "Rise in prices over time",
      d: "Lower interest rates",
    },
    correct: "c",
    explanation: "Inflation is the general increase in prices over time.",
  },
  {
    id: 13,
    date: "2025-07-06",
    text: "Which investment is typically considered the least risky?",
    options: {
      a: "Stocks",
      b: "Real estate",
      c: "Government bonds",
      d: "Cryptocurrency",
    },
    correct: "c",
    explanation: "Government bonds are low-risk investments.",
  },
  {
    id: 14,
    date: "2025-07-07",
    text: "Which account earns interest and is best for emergency savings?",
    options: {
      a: "Checking account",
      b: "Savings account",
      c: "Credit card",
      d: "Loan account",
    },
    correct: "b",
    explanation: "A savings account is ideal for storing emergency funds.",
  },
  {
    id: 15,
    date: "2025-07-08",
    text: "What is the main purpose of insurance?",
    options: {
      a: "To increase income",
      b: "To cover unexpected losses",
      c: "To pay taxes",
      d: "To earn interest",
    },
    correct: "b",
    explanation:
      "Insurance provides financial protection against unexpected events.",
  },
  {
    id: 16,
    date: "2025-07-09",
    text: "Which of the following is a good debt?",
    options: {
      a: "High-interest credit card",
      b: "Loan for luxury car",
      c: "Student loan for education",
      d: "Vacation loan",
    },
    correct: "c",
    explanation: "Investing in education is considered good debt.",
  },
  {
    id: 17,
    date: "2025-07-10",
    text: "What is net income?",
    options: {
      a: "Gross income before taxes",
      b: "Income after taxes and deductions",
      c: "Annual bonus",
      d: "Cash in hand",
    },
    correct: "b",
    explanation: "Net income is what you take home after deductions.",
  },
  {
    id: 18,
    date: "2025-07-11",
    text: "What is the benefit of using a credit card responsibly?",
    options: {
      a: "Increase expenses",
      b: "Improve credit score",
      c: "Earn less interest",
      d: "Lose track of spending",
    },
    correct: "b",
    explanation:
      "Responsible credit card use builds credit history and improves score.",
  },
  {
    id: 19,
    date: "2025-07-12",
    text: "Which is better for long-term investing?",
    options: {
      a: "Savings account",
      b: "Fixed deposit",
      c: "Stock market",
      d: "Piggy bank",
    },
    correct: "c",
    explanation: "Stocks typically provide higher returns over the long term.",
  },
  {
    id: 20,
    date: "2025-07-13",
    text: "What does diversification in investment mean?",
    options: {
      a: "Putting all money in one stock",
      b: "Investing only in gold",
      c: "Spreading money across different assets",
      d: "Keeping money in cash",
    },
    correct: "c",
    explanation: "Diversification reduces risk by spreading investments.",
  },
  {
    id: 21,
    date: "2025-07-14",
    text: "Which of these is a liability?",
    options: {
      a: "Your salary",
      b: "Your house",
      c: "Your savings",
      d: "Your credit card debt",
    },
    correct: "d",
    explanation: "Liabilities are what you owe — like credit card debt.",
  },
  {
    id: 22,
    date: "2025-07-15",
    text: "Which app helps track expenses?",
    options: {
      a: "Instagram",
      b: "YouTube",
      c: "Mint",
      d: "Netflix",
    },
    correct: "c",
    explanation:
      "Mint is a personal finance app used to track expenses and budgets.",
  },
  {
    id: 23,
    date: "2025-07-16",
    text: "What is the benefit of retirement planning?",
    options: {
      a: "Higher taxes",
      b: "Financial independence in old age",
      c: "Early loan approval",
      d: "More working years",
    },
    correct: "b",
    explanation:
      "Planning for retirement ensures financial freedom in later years.",
  },
  {
    id: 24,
    date: "2025-07-17",
    text: "What is a budget surplus?",
    options: {
      a: "Expenses exceed income",
      b: "Income equals expenses",
      c: "Income exceeds expenses",
      d: "No income at all",
    },
    correct: "c",
    explanation: "A surplus occurs when you earn more than you spend.",
  },
  {
    id: 25,
    date: "2025-07-18",
    text: "Why should you check your credit report?",
    options: {
      a: "To see your salary",
      b: "To track bank interest",
      c: "To catch errors and fraud",
      d: "To change your name",
    },
    correct: "c",
    explanation:
      "Credit reports help identify fraud and incorrect information.",
  },
  {
    id: 26,
    date: "2025-07-19",
    text: "Which investment offers partial ownership in a company?",
    options: {
      a: "Bond",
      b: "Mutual Fund",
      c: "Stock",
      d: "Savings account",
    },
    correct: "c",
    explanation: "Stocks represent ownership in a company.",
  },
  {
    id: 27,
    date: "2025-07-20",
    text: "What is the purpose of a will?",
    options: {
      a: "To donate money",
      b: "To plan retirement",
      c: "To declare how assets will be distributed",
      d: "To open a bank account",
    },
    correct: "c",
    explanation: "A will legally outlines asset distribution after death.",
  },
  {
    id: 28,
    date: "2025-07-21",
    text: "Which of the following helps build wealth?",
    options: {
      a: "Spending all income",
      b: "Investing regularly",
      c: "Ignoring savings",
      d: "Taking on debt",
    },
    correct: "b",
    explanation: "Consistent investing is a key to building wealth.",
  },
  {
    id: 29,
    date: "2025-07-22",
    text: "What is the meaning of 'pay yourself first'?",
    options: {
      a: "Pay bills before saving",
      b: "Invest after all expenses",
      c: "Save a portion of income before spending",
      d: "Avoid budgeting",
    },
    correct: "c",
    explanation:
      "‘Paying yourself first’ means prioritizing saving before spending.",
  },
  {
    id: 30,
    date: "2025-07-23",
    text: "What is financial literacy?",
    options: {
      a: "Knowing how to cook",
      b: "Understanding and managing personal finances",
      c: "Memorizing prices",
      d: "Reading stock names",
    },
    correct: "b",
    explanation:
      "Financial literacy is the knowledge to make informed financial decisions.",
  },
  {
    id: 31,
    date: "2025-07-24",
    text: "What percentage of your income should you ideally save?",
    options: {
      a: "10%",
      b: "20%",
      c: "50%",
      d: "80%",
    },
    correct: "b",
    explanation: "The 50/30/20 rule recommends saving 20% of your income.",
  },
  {
    id: 32,
    date: "2025-07-25",
    text: "You get a yearly bonus of ₹50,000. What is the smartest use of this bonus?",
    options: {
      a: "Spend it all on shopping",
      b: "Invest it in a low-cost index fund",
      c: "Keep it idle in your savings account",
      d: "Buy a new phone immediately",
    },
    correct: "b",
    explanation:
      "Investing your bonus helps it grow over time, especially through compounding. Index funds are a low-cost, diversified way to do this.",
  },
  {
    id: 33,
    date: "2025-07-26",
    text: 'Which of the following expenses would be considered a "fixed cost" in a monthly budget?',
    options: {
      a: "Groceries",
      b: "Electricity bill",
      c: "Rent",
      d: "Eating out",
    },
    correct: "c",
    explanation:
      "Fixed costs are regular, predictable expenses that do not change month-to-month. Rent is typically a fixed expense.",
  },
  {
    id: 34,
    date: "2025-07-27",
    text: "What is the main benefit of having an emergency fund?",
    options: {
      a: "You can use it to buy expensive gifts",
      b: "You can take more loans",
      c: "It protects you from financial shocks",
      d: "It increases your credit score",
    },
    correct: "c",
    explanation:
      "An emergency fund gives you a financial cushion in case of job loss, medical emergencies, or unexpected expenses.",
  },
  {
    id: 35,
    date: "2025-07-28",
    text: "What does a high credit utilization ratio typically indicate?",
    options: {
      a: "You're managing your credit well",
      b: "You're not using your credit",
      c: "You're using a lot of your available credit",
      d: "You have a high credit score",
    },
    correct: "c",
    explanation:
      "A high credit utilization ratio (usually above 30%) can hurt your credit score. It shows lenders you might be over-reliant on credit.",
  },
  {
    id: 36,
    date: "2025-07-29",
    text: "Which of the following is not typically covered by health insurance?",
    options: {
      a: "Hospitalization",
      b: "Doctor consultation fees",
      c: "Cosmetic surgery",
      d: "Diagnostic tests",
    },
    correct: "c",
    explanation:
      "Most health insurance policies do not cover cosmetic procedures unless medically necessary.",
  },
  {
    id: 37,
    date: "2025-07-30",
    text: 'Why is "buy now, pay later" (BNPL) a risky habit?',
    options: {
      a: "It always increases your credit score",
      b: "It forces you to save more",
      c: "It can lead to overspending and debt",
      d: "It's cheaper than cash purchases",
    },
    correct: "c",
    explanation:
      "BNPL can encourage impulsive spending without considering affordability, which may lead to debt accumulation.",
  },
];
