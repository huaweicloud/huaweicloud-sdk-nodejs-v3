

export class CreateNotMavenRepoDO {
    public format?: string;
    public type?: string;
    private 'repository_name'?: string;
    public description?: string;
    private 'includes_pattern'?: string;
    private 'project_id'?: string;
    private 'share_right'?: string;
    public constructor(format?: string, type?: string, repositoryName?: string, includesPattern?: string) { 
        this['format'] = format;
        this['type'] = type;
        this['repository_name'] = repositoryName;
        this['includes_pattern'] = includesPattern;
    }
    public withFormat(format: string): CreateNotMavenRepoDO {
        this['format'] = format;
        return this;
    }
    public withType(type: string): CreateNotMavenRepoDO {
        this['type'] = type;
        return this;
    }
    public withRepositoryName(repositoryName: string): CreateNotMavenRepoDO {
        this['repository_name'] = repositoryName;
        return this;
    }
    public set repositoryName(repositoryName: string  | undefined) {
        this['repository_name'] = repositoryName;
    }
    public get repositoryName(): string | undefined {
        return this['repository_name'];
    }
    public withDescription(description: string): CreateNotMavenRepoDO {
        this['description'] = description;
        return this;
    }
    public withIncludesPattern(includesPattern: string): CreateNotMavenRepoDO {
        this['includes_pattern'] = includesPattern;
        return this;
    }
    public set includesPattern(includesPattern: string  | undefined) {
        this['includes_pattern'] = includesPattern;
    }
    public get includesPattern(): string | undefined {
        return this['includes_pattern'];
    }
    public withProjectId(projectId: string): CreateNotMavenRepoDO {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withShareRight(shareRight: string): CreateNotMavenRepoDO {
        this['share_right'] = shareRight;
        return this;
    }
    public set shareRight(shareRight: string  | undefined) {
        this['share_right'] = shareRight;
    }
    public get shareRight(): string | undefined {
        return this['share_right'];
    }
}