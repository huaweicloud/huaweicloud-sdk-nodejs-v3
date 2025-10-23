

export class ExportTenantRepositoryBody {
    private 'repository_ids'?: Array<number>;
    public constructor() { 
    }
    public withRepositoryIds(repositoryIds: Array<number>): ExportTenantRepositoryBody {
        this['repository_ids'] = repositoryIds;
        return this;
    }
    public set repositoryIds(repositoryIds: Array<number>  | undefined) {
        this['repository_ids'] = repositoryIds;
    }
    public get repositoryIds(): Array<number> | undefined {
        return this['repository_ids'];
    }
}