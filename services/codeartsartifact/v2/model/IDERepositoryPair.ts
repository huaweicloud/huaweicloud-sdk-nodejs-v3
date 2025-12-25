

export class IDERepositoryPair {
    private 'repo_name'?: string;
    private 'includes_pattern'?: string;
    private 'project_id'?: string;
    public description?: string;
    public snapshot?: string;
    public release?: string;
    public constructor(repoName?: string, includesPattern?: string) { 
        this['repo_name'] = repoName;
        this['includes_pattern'] = includesPattern;
    }
    public withRepoName(repoName: string): IDERepositoryPair {
        this['repo_name'] = repoName;
        return this;
    }
    public set repoName(repoName: string  | undefined) {
        this['repo_name'] = repoName;
    }
    public get repoName(): string | undefined {
        return this['repo_name'];
    }
    public withIncludesPattern(includesPattern: string): IDERepositoryPair {
        this['includes_pattern'] = includesPattern;
        return this;
    }
    public set includesPattern(includesPattern: string  | undefined) {
        this['includes_pattern'] = includesPattern;
    }
    public get includesPattern(): string | undefined {
        return this['includes_pattern'];
    }
    public withProjectId(projectId: string): IDERepositoryPair {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): IDERepositoryPair {
        this['description'] = description;
        return this;
    }
    public withSnapshot(snapshot: string): IDERepositoryPair {
        this['snapshot'] = snapshot;
        return this;
    }
    public withRelease(release: string): IDERepositoryPair {
        this['release'] = release;
        return this;
    }
}