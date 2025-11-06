

export class ListBranchRelatedWorkItemsRequest {
    private 'repository_id'?: number;
    private 'branch_name'?: string;
    public constructor(repositoryId?: number, branchName?: string) { 
        this['repository_id'] = repositoryId;
        this['branch_name'] = branchName;
    }
    public withRepositoryId(repositoryId: number): ListBranchRelatedWorkItemsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: number  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): number | undefined {
        return this['repository_id'];
    }
    public withBranchName(branchName: string): ListBranchRelatedWorkItemsRequest {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
}