import studentData from "@/data/student.json";
import challengeData from "@/data/challenge.json";
import submissionsData from "@/data/submissions.json";
import tracksData from "@/data/tracks.json";
import testimonialsData from "@/data/testimonials.json";
import aiHintsData from "@/data/ai-hints.json";
import type {
  AIHints,
  Challenge,
  Scenario,
  Student,
  Submission,
  Testimonial,
  Track,
} from "./types";

const baseStudent = studentData as Student;

const scenarioOverrides: Record<
  Exclude<Scenario, "default">,
  Partial<Student>
> = {
  "first-day": {
    name: "Arjun Sharma",
    college: "",
    track: "",
    currentDay: 1,
    streak: 0,
    completedDays: 0,
    completionPercentage: 0,
    profileComplete: true,
    profileCompletionPercentage: 40,
    missedDays: [],
    achievements: [],
  },
  missed: {
    currentDay: 12,
    streak: 10,
    completedDays: 10,
    completionPercentage: 16.7,
    missedDays: [11],
    achievements: ["7 Day Streak", "First Project Shipped"],
  },
  "empty-profile": {
    name: "",
    college: "",
    track: "",
    profileComplete: false,
    profileCompletionPercentage: 20,
  },
};

export function parseScenario(value: string | null | undefined): Scenario {
  if (
    value === "first-day" ||
    value === "missed" ||
    value === "empty-profile"
  ) {
    return value;
  }
  return "default";
}

export function getStudent(scenario: Scenario = "default"): Student {
  if (scenario === "default") {
    return { ...baseStudent };
  }

  return { ...baseStudent, ...scenarioOverrides[scenario] };
}

export function getChallenge(day: number = 12): Challenge | null {
  const challenge = challengeData as Challenge;
  return challenge.day === day ? challenge : null;
}

export function getSubmission(day: number = 12): Submission {
  const submission = submissionsData as Submission;
  return submission.day === day ? { ...submission } : { ...submission, day };
}

export function getTracks(): Track[] {
  return tracksData as Track[];
}

export function getTestimonials(): Testimonial[] {
  return testimonialsData as Testimonial[];
}

export function getAIHints(): AIHints {
  return aiHintsData as AIHints;
}

export function getGreeting(): string {
  const hour = new Date().getHours();

  if (hour < 12) return "Good morning";
  if (hour < 17) return "Good afternoon";
  return "Good evening";
}
