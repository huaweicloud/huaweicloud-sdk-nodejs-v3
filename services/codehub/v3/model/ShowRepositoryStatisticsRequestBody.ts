

export class ShowRepositoryStatisticsRequestBody {
    private 'branch_name'?: string;
    public constructor(branchName?: string) { 
        this['branch_name'] = branchName;
    }
    public withBranchName(branchName: string): ShowRepositoryStatisticsRequestBody {
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