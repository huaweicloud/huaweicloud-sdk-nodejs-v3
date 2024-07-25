

export class BatchDeletePolicySetsDTO {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): BatchDeletePolicySetsDTO {
        this['ids'] = ids;
        return this;
    }
}