import { GitHubRepo, GitHubUser, LanguageStat } from "@/types/github";
import { curatedProjects, projectDisplayOrder } from "@/data/projects";
import { Project } from "@/types/project";

const GITHUB_USERNAME = process.env.NEXT_PUBLIC_GITHUB_USERNAME || "AdityaSh-sys";
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

const headers: Record<string, string> = {
  Accept: "application/vnd.github.v3+json",
};

if (GITHUB_TOKEN) {
  headers.Authorization = `token ${GITHUB_TOKEN}`;
}

export async function fetchUserRepos(): Promise<GitHubRepo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      { headers, next: { revalidate: 3600 } } // Revalidate every hour
    );

    if (!res.ok) throw new Error("Failed to fetch repos");
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export async function fetchUserProfile(): Promise<GitHubUser | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
      headers,
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("Failed to fetch profile");
    return res.json();
  } catch (error) {
    console.error("Error fetching GitHub profile:", error);
    return null;
  }
}

export async function getCuratedProjects(): Promise<Project[]> {
  const repos = await fetchUserRepos();
  
  // Create a map of github repos for easy lookup
  const repoMap = new Map(repos.map((r) => [r.name, r]));

  // Combine curated data with live github data
  const projects: Project[] = projectDisplayOrder.map((repoName) => {
    const curated = curatedProjects[repoName];
    const live = repoMap.get(repoName);

    return {
      slug: repoName,
      title: curated.title || live?.name || repoName,
      tagline: curated.tagline || live?.description || "",
      problem: curated.problem || "",
      solution: curated.solution || "",
      techStack: curated.techStack || (live?.language ? [live.language] : []),
      category: curated.category || "fullstack",
      githubUrl: live?.html_url || `https://github.com/${GITHUB_USERNAME}/${repoName}`,
      liveUrl: curated.liveUrl || live?.homepage || undefined,
      featured: curated.featured || false,
      updatedAt: live?.updated_at,
    };
  });

  return projects;
}

export async function fetchLanguageStats(): Promise<LanguageStat[]> {
  const repos = await fetchUserRepos();
  const languages: Record<string, number> = {};
  let totalSize = 0;

  repos.forEach((repo) => {
    if (repo.language && repo.language !== "Jupyter Notebook") {
      languages[repo.language] = (languages[repo.language] || 0) + repo.size;
      totalSize += repo.size;
    }
  });

  const languageStats: LanguageStat[] = Object.entries(languages)
    .map(([name, size]) => ({
      name,
      percentage: Math.round((size / totalSize) * 100),
      color: getLanguageColor(name),
    }))
    .sort((a, b) => b.percentage - a.percentage)
    .slice(0, 5); // Top 5

  return languageStats;
}

function getLanguageColor(lang: string): string {
  const colors: Record<string, string> = {
    TypeScript: "#3178c6",
    JavaScript: "#f1e05a",
    Python: "#3572A5",
    CSS: "#563d7c",
    HTML: "#e34c26",
    "C++": "#f34b7d",
    C: "#555555",
    Shell: "#89e051",
    Go: "#00ADD8",
    Rust: "#dea584",
  };
  return colors[lang] || "#8b949e";
}
