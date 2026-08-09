import { AICoach } from "@/components/day/AICoach";
import { DayHeader } from "@/components/day/DayHeader";
import { DaySubmission } from "@/components/day/DaySubmission";
import { MissionSection } from "@/components/day/MissionSection";
import { ResourcesSection } from "@/components/day/ResourcesSection";
import { AppShell } from "@/components/layout/AppShell";
import {
  getAIHints,
  getChallenge,
  getStudent,
  parseScenario,
} from "@/lib/data";
import { notFound } from "next/navigation";

interface Day12PageProps {
  searchParams: Promise<{ scenario?: string | string[] }>;
}

function getScenarioParam(
  value: string | string[] | undefined,
): string | undefined {
  if (Array.isArray(value)) return value[0];
  return value;
}

export default async function Day12Page({ searchParams }: Day12PageProps) {
  const params = await searchParams;
  const scenario = parseScenario(getScenarioParam(params.scenario));
  const student = getStudent(scenario);
  const challenge = getChallenge(12);
  const hints = getAIHints();

  if (!challenge) {
    notFound();
  }

  const scenarioQuery = scenario !== "default" ? scenario : null;

  return (
    <AppShell scenario={scenarioQuery}>
      <div className="space-y-5">
        <DayHeader
          day={challenge.day}
          streak={student.streak}
          scenario={scenarioQuery}
        />
        <MissionSection challenge={challenge} />
        <AICoach hints={hints} />
        <ResourcesSection />
        <DaySubmission
          day={challenge.day}
          streak={student.streak}
          scenario={scenarioQuery}
        />
      </div>
    </AppShell>
  );
}
