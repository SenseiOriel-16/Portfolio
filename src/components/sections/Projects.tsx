import { projects } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
// import { GitHubProjectGrid } from "./GitHubProjectGrid";
import { ProjectCard } from "./ProjectCard";

/** Featured project cards (GitHub grid disabled) */
export function Projects() {
  return (
    <section id="projects" className="scroll-mt-28 px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Projects"
          subtitle="Highlights from research, mobile product work, and reporting."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        {/* <GitHubProjectGrid username={site.githubUsername} /> */}
      </div>
    </section>
  );
}
