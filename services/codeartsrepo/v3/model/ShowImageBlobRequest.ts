

export class ShowImageBlobRequest {
    private 'repository_uuid'?: string;
    private 'branch_name'?: string;
    public path?: string;
    public constructor(repositoryUuid?: string, branchName?: string, path?: string) { 
        this['repository_uuid'] = repositoryUuid;
        this['branch_name'] = branchName;
        this['path'] = path;
    }
    public withRepositoryUuid(repositoryUuid: string): ShowImageBlobRequest {
        this['repository_uuid'] = repositoryUuid;
        return this;
    }
    public set repositoryUuid(repositoryUuid: string  | undefined) {
        this['repository_uuid'] = repositoryUuid;
    }
    public get repositoryUuid(): string | undefined {
        return this['repository_uuid'];
    }
    public withBranchName(branchName: string): ShowImageBlobRequest {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withPath(path: string): ShowImageBlobRequest {
        this['path'] = path;
        return this;
    }
}