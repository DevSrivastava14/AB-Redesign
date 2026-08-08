import type { DayStatus, JourneyDay, Student } from "./types";

const TOTAL_DAYS = 60;

export function buildJourneyDays(student: Student): JourneyDay[] {
  const { currentDay, completedDays, missedDays } = student;
  const completedSet = new Set<number>();

  for (let day = 1; day <= completedDays; day++) {
    completedSet.add(day);
  }

  const missedSet = new Set(missedDays);

  const days: JourneyDay[] = [];

  for (let day = 1; day <= TOTAL_DAYS; day++) {
    let status: DayStatus;

    if (day === currentDay) {
      status = "today";
    } else if (missedSet.has(day)) {
      status = "missed";
    } else if (completedSet.has(day)) {
      status = "completed";
    } else {
      status = "upcoming";
    }

    days.push({ day, status });
  }

  return days;
}

export function getDaysRemaining(currentDay: number): number {
  return Math.max(TOTAL_DAYS - currentDay, 0);
}

export function getJourneyProgress(completedDays: number): number {
  return Math.round((completedDays / TOTAL_DAYS) * 100);
}

export const TOTAL_CHALLENGE_DAYS = TOTAL_DAYS;
