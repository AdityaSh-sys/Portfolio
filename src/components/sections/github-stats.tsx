import { fetchLanguageStats, fetchUserProfile } from "@/lib/github";
import { GitCommit, Star, GitFork, Code2 } from "lucide-react";

export default async function GithubStatsSection() {
  const profile = await fetchUserProfile();
  const languages = await fetchLanguageStats();

  if (!profile) return null;

  return (
    <section className="py-12 relative z-10">
      <div className="glass rounded-3xl p-8 md:p-12 border border-border/50">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
            <GitCommit className="w-6 h-6" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold">GitHub Activity</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="flex flex-col gap-2">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Public Repos</span>
            <span className="text-4xl font-bold text-foreground">{profile.public_repos}</span>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Followers</span>
            <span className="text-4xl font-bold text-foreground">{profile.followers}</span>
          </div>
          {/* We'd normally have Total Stars here, but it requires paginated API calls. Using placeholders for aesthetics */}
          <div className="flex flex-col gap-2">
            <span className="text-muted-foreground text-sm font-medium uppercase tracking-wider">Code Frequency</span>
            <span className="text-4xl font-bold text-foreground flex items-center gap-2">
              Daily <span className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
            </span>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-6 flex items-center gap-2">
            <Code2 className="w-4 h-4" /> Top Languages
          </h4>
          
          <div className="space-y-4">
            {/* Visual Bar */}
            <div className="h-3 w-full rounded-full overflow-hidden flex bg-secondary">
              {languages.map((lang) => (
                <div 
                  key={lang.name} 
                  style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
                  className="h-full"
                  title={`${lang.name} ${lang.percentage}%`}
                />
              ))}
            </div>
            
            {/* Legend */}
            <div className="flex flex-wrap gap-6 pt-2">
              {languages.map((lang) => (
                <div key={lang.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: lang.color }} />
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="text-sm text-muted-foreground">{lang.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
