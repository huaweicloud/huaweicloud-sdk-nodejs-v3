

export class StatisticsParamsDto {
    private 'branch_name'?: string;
    public constructor() { 
    }
    public withBranchName(branchName: string): StatisticsParamsDto {
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