"use client";

import { useState } from "react";
import { Brain, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import type { AIHints } from "@/lib/types";

interface AICoachProps {
  hints: AIHints;
}

export function AICoach({ hints }: AICoachProps) {
  const options = Object.entries(hints);
  const [selectedKey, setSelectedKey] = useState<string | null>(null);
  const [revealedCount, setRevealedCount] = useState(0);

  const selected = selectedKey ? hints[selectedKey] : null;
  const visibleHints = selected ? selected.hints.slice(0, revealedCount) : [];
  const hasMoreHints =
    selected !== null && revealedCount < selected.hints.length;

  function handleSelect(key: string) {
    setSelectedKey(key);
    setRevealedCount(1);
  }

  function handleRevealNext() {
    if (selected) {
      setRevealedCount((count) => Math.min(count + 1, selected.hints.length));
    }
  }

  return (
    <section
      aria-labelledby="ai-coach-heading"
      className="rounded-lg border border-border bg-bg-surface px-5 py-5"
    >
      <div className="flex items-start gap-3">
        <Brain
          className="mt-0.5 h-5 w-5 shrink-0 text-accent"
          aria-hidden="true"
        />
        <div className="min-w-0 flex-1">
          <h2
            id="ai-coach-heading"
            className="text-sm font-semibold text-text-primary"
          >
            Stuck? Ask your AI Coach.
          </h2>
          <p className="mt-1 text-xs text-text-secondary">
            Get a hint without getting the answer.
          </p>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {options.map(([key, option]) => (
          <button
            key={key}
            type="button"
            onClick={() => handleSelect(key)}
            className={`min-h-10 rounded-md border px-3 py-2 text-left text-xs font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
              selectedKey === key
                ? "border-accent/50 bg-accent-muted text-accent"
                : "border-border bg-bg-elevated text-text-secondary hover:border-accent/30 hover:text-text-primary"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {selected && visibleHints.length > 0 && (
        <div className="mt-4 space-y-3 animate-fade-in">
          {visibleHints.map((hint, index) => (
            <div
              key={`${selectedKey}-${index}`}
              className="rounded-md border border-border-subtle bg-bg-elevated px-4 py-3"
            >
              <p className="text-xs font-semibold uppercase tracking-widest text-text-muted">
                Hint {index + 1}
              </p>
              <p className="mt-1.5 text-sm leading-relaxed text-text-secondary">
                {hint}
              </p>
            </div>
          ))}

          {hasMoreHints && (
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={handleRevealNext}
            >
              Need another hint?
              <ChevronRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          )}
        </div>
      )}
    </section>
  );
}
