

export class BatchOperateInfo {
    public id?: string;
    private 'modified_by'?: string;
    public constructor() { 
    }
    public withId(id: string): BatchOperateInfo {
        this['id'] = id;
        return this;
    }
    public withModifiedBy(modifiedBy: string): BatchOperateInfo {
        this['modified_by'] = modifiedBy;
        return this;
    }
    public set modifiedBy(modifiedBy: string  | undefined) {
        this['modified_by'] = modifiedBy;
    }
    public get modifiedBy(): string | undefined {
        return this['modified_by'];
    }
}