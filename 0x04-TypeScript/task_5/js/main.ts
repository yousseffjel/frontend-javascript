// task_5/js/main.ts

// Define branding technique using 'nominal typing' with unique symbols
interface MajorCredits {
  credits: number;
  __brand: "major";
}

interface MinorCredits {
  credits: number;
  __brand: "minor";
}

// Function to sum major credits
function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "major" };
}

// Function to sum minor credits
function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return { credits: subject1.credits + subject2.credits, __brand: "minor" };
}

// Example usage (optional for test)
const major1: MajorCredits = { credits: 3, __brand: "major" };
const major2: MajorCredits = { credits: 4, __brand: "major" };
console.log(sumMajorCredits(major1, major2)); // { credits: 7, __brand: 'major' }

const minor1: MinorCredits = { credits: 1, __brand: "minor" };
const minor2: MinorCredits = { credits: 2, __brand: "minor" };
console.log(sumMinorCredits(minor1, minor2)); // { credits: 3, __brand: 'minor' }
