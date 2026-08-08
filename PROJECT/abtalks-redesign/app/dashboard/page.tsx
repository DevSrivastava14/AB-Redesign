import { AchievementsSection } from "@/components/dashboard/AchievementsSection";
import { FirstDayBanner } from "@/components/dashboard/FirstDayBanner";
import { Greeting } from "@/components/dashboard/Greeting";
import { JourneySection } from "@/components/dashboard/JourneySection";
import { MissedDayBanner } from "@/components/dashboard/MissedDayBanner";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StreakCard } from "@/components/dashboard/StreakCard";
import { TodayBuildCard } from "@/components/dashboard/TodayBuildCard";
import { AppShell } from "@/components/layout/AppShell";
import { getChallenge, getStudent, parseScenario } from "@/lib/data";
import type { Challenge } from "@/lib/types";

function getChallengeForDay(currentDay: number): Challenge {
  const specific = getChallenge(currentDay);
  if (specific) return specific;

  const fallback = getChallenge(12)!;
  return { ...fallback, day: currentDay };
}

interface DashboardPageProps {
  searchParams: Promise<{ scenario?: string | string[] }>;
}

function getScenarioParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function DashboardPage({
  searchParams,
}: DashboardPageProps) {
  const params = await searchParams;
  const scenario = parseScenario(getScenarioParam(params.scenario));
  const student = getStudent(scenario);
  const challenge = getChallengeForDay(student.currentDay);
  const scenarioQuery = scenario !== "default" ? scenario : null;

  return (
    <AppShell scenario={scenarioQuery}>
      <div className="space-y-6">
        <Greeting student={student} />

        {scenario === "first-day" && <FirstDayBanner student={student} />}
        {scenario === "missed" && <MissedDayBanner />}

        <StreakCard student={student} scenario={scenario} />
        <TodayBuildCard challenge={challenge} />
        <JourneySection student={student} />
        <AchievementsSection achievements={student.achievements} />
        <ProfileSection student={student} scenario={scenario} />
      </div>
    </AppShell>
  );
}
