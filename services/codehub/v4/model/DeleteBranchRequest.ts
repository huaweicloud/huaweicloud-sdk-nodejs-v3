

export class DeleteBranchRequest {
    private 'branch_name'?: string;
    private 'repository_id'?: number;
    public constructor(branchName?: string, repositoryId?: number) { 
        this['branch_name'] = branchName;
        this['repository_id'] = repositoryId;
    }
    public withBranchName(branchName: string): DeleteBranchRequest {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withRepositoryId(repositoryId: number): DeleteBranchRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
}