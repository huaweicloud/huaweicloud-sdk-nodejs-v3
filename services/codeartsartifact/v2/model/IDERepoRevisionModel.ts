

export class IDERepoRevisionModel {
    private 'repository_ids'?: string;
    public format?: string;
    public constructor() { 
    }
    public withRepositoryIds(repositoryIds: string): IDERepoRevisionModel {
        this['repository_ids'] = repositoryIds;
        return this;
    }
    public set repositoryIds(repositoryIds: string  | undefined) {
        this['repository_ids'] = repositoryIds;
    }
    public get repositoryIds(): string | undefined {
        return this['repository_ids'];
    }
    public withFormat(format: string): IDERepoRevisionModel {
        this['format'] = format;
        return this;
    }
}