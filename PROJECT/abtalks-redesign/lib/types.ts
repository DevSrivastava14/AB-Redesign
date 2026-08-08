export type Scenario = "default" | "first-day" | "missed" | "empty-profile";

export interface Student {
  name: string;
  college: string;
  track: string;
  currentDay: number;
  streak: number;
  completedDays: number;
  completionPercentage: number;
  profileComplete: boolean;
  profileCompletionPercentage: number;
  missedDays: number[];
  achievements: string[];
}

export interface Challenge {
  day: number;
  title: string;
  difficulty: string;
  estimatedTime: string;
  description: string;
  requirements: string[];
}

export interface Submission {
  day: number;
  githubRepository: string;
  githubCommit: string;
  linkedinPost: string;
  submitted: boolean;
}

export interface Track {
  id: string;
  name: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export interface AIHintOption {
  label: string;
  hints: string[];
}

export type AIHints = Record<string, AIHintOption>;

export type DayStatus = "completed" | "today" | "upcoming" | "missed";

export interface JourneyDay {
  day: number;
  status: DayStatus;
}

export type ButtonVariant = "primary" | "secondary" | "ghost";
export type ButtonSize = "default" | "sm";
export type BadgeVariant = "default" | "accent" | "success" | "warning" | "error";
