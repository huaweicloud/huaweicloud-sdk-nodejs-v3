

export class BatchDeleteResourcePolicyDTO {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): BatchDeleteResourcePolicyDTO {
        this['ids'] = ids;
        return this;
    }
}