

export class CreateBranchDto {
    public branch?: string;
    public ref?: string;
    public description?: string;
    private 'related_ids'?: Array<string>;
    public constructor(branch?: string, ref?: string) { 
        this['branch'] = branch;
        this['ref'] = ref;
    }
    public withBranch(branch: string): CreateBranchDto {
        this['branch'] = branch;
        return this;
    }
    public withRef(ref: string): CreateBranchDto {
        this['ref'] = ref;
        return this;
    }
    public withDescription(description: string): CreateBranchDto {
        this['description'] = description;
        return this;
    }
    public withRelatedIds(relatedIds: Array<string>): CreateBranchDto {
        this['related_ids'] = relatedIds;
        return this;
    }
    public set relatedIds(relatedIds: Array<string>  | undefined) {
        this['related_ids'] = relatedIds;
    }
    public get relatedIds(): Array<string> | undefined {
        return this['related_ids'];
    }
}