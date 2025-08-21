

export class UpdateBranchDto {
    private 'new_branch'?: string;
    private 'old_branch'?: string;
    public constructor(newBranch?: string, oldBranch?: string) { 
        this['new_branch'] = newBranch;
        this['old_branch'] = oldBranch;
    }
    public withNewBranch(newBranch: string): UpdateBranchDto {
        this['new_branch'] = newBranch;
        return this;
    }
    public set newBranch(newBranch: string  | undefined) {
        this['new_branch'] = newBranch;
    }
    public get newBranch(): string | undefined {
        return this['new_branch'];
    }
    public withOldBranch(oldBranch: string): UpdateBranchDto {
        this['old_branch'] = oldBranch;
        return this;
    }
    public set oldBranch(oldBranch: string  | undefined) {
        this['old_branch'] = oldBranch;
    }
    public get oldBranch(): string | undefined {
        return this['old_branch'];
    }
}