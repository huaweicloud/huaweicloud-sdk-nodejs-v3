

export class ListCommitStatisticsRequest {
    private 'branch_name'?: string;
    private 'repository_id'?: string;
    public constructor(branchName?: string, repositoryId?: string) { 
        this['branch_name'] = branchName;
        this['repository_id'] = repositoryId;
    }
    public withBranchName(branchName: string): ListCommitStatisticsRequest {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withRepositoryId(repositoryId: string): ListCommitStatisticsRequest {
        this['repository_id'] = repositoryId;
        return this;
    }
    public set repositoryId(repositoryId: string  | undefined) {
        this['repository_id'] = repositoryId;
    }
    public get repositoryId(): string | undefined {
        return this['repository_id'];
    }
}