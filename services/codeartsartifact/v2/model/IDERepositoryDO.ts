

export class IDERepositoryDO {
    private 'repository_name'?: string;
    public format?: string;
    public description?: string;
    public release?: string;
    public snapshot?: string;
    private 'includes_pattern'?: string;
    private 'share_right'?: string;
    private 'project_id'?: string;
    public type?: string;
    public constructor(repositoryName?: string, format?: string, type?: string) { 
        this['repository_name'] = repositoryName;
        this['format'] = format;
        this['type'] = type;
    }
    public withRepositoryName(repositoryName: string): IDERepositoryDO {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withFormat(format: string): IDERepositoryDO {
        this['format'] = format;
        return this;
    }
    public withDescription(description: string): IDERepositoryDO {
        this['description'] = description;
        return this;
    }
    public withRelease(release: string): IDERepositoryDO {
        this['release'] = release;
        return this;
    }
    public withSnapshot(snapshot: string): IDERepositoryDO {
        this['snapshot'] = snapshot;
        return this;
    }
    public withIncludesPattern(includesPattern: string): IDERepositoryDO {
        this['includes_pattern'] = includesPattern;
        return this;
    }
    public set includesPattern(includesPattern: string  | undefined) {
        this['includes_pattern'] = includesPattern;
    }
    public get includesPattern(): string | undefined {
        return this['includes_pattern'];
    }
    public withShareRight(shareRight: string): IDERepositoryDO {
        this['share_right'] = shareRight;
        return this;
    }
    public set shareRight(shareRight: string  | undefined) {
        this['share_right'] = shareRight;
    }
    public get shareRight(): string | undefined {
        return this['share_right'];
    }
    public withProjectId(projectId: string): IDERepositoryDO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withType(type: string): IDERepositoryDO {
        this['type'] = type;
        return this;
    }
}