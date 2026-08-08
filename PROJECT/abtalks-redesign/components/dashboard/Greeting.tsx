import { getGreeting } from "@/lib/data";
import type { Student } from "@/lib/types";

interface GreetingProps {
  student: Student;
}

function getFirstName(fullName: string): string {
  if (!fullName.trim()) return "Builder";
  return fullName.split(" ")[0];
}

export function Greeting({ student }: GreetingProps) {
  const greeting = getGreeting();
  const firstName = getFirstName(student.name);

  return (
    <section aria-labelledby="greeting-heading">
      <h1
        id="greeting-heading"
        className="text-xl font-semibold tracking-tight text-text-primary"
      >
        {greeting}, {firstName} 👋
      </h1>
      <p className="mt-1 text-sm text-text-secondary">
        Ready for today&apos;s build?
      </p>
    </section>
  );
}
