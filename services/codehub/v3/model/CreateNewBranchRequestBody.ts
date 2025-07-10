

export class CreateNewBranchRequestBody {
    private 'branch_name'?: string;
    public ref?: string;
    public constructor(branchName?: string, ref?: string) { 
        this['branch_name'] = branchName;
        this['ref'] = ref;
    }
    public withBranchName(branchName: string): CreateNewBranchRequestBody {
        this['branch_name'] = branchName;
        return this;
    }
    public set branchName(branchName: string  | undefined) {
        this['branch_name'] = branchName;
    }
    public get branchName(): string | undefined {
        return this['branch_name'];
    }
    public withRef(ref: string): CreateNewBranchRequestBody {
        this['ref'] = ref;
        return this;
    }
}