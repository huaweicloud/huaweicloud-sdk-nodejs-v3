

export class ListSubfilesRequest {
    private 'repository_uuid'?: string;
    private 'branch_name'?: string;
    public path?: string;
    public offset?: number;
    public limit?: number;
    public constructor(repositoryUuid?: string, branchName?: string) { 
        this['repository_uuid'] = repositoryUuid;
        this['branch_name'] = branchName;
    }
    public withRepositoryUuid(repositoryUuid: string): ListSubfilesRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withBranchName(branchName: string): ListSubfilesRequest {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withPath(path: string): ListSubfilesRequest {
        this['path'] = path;
        return this;
    }
    public withOffset(offset: number): ListSubfilesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListSubfilesRequest {
        this['limit'] = limit;
        return this;
    }
}