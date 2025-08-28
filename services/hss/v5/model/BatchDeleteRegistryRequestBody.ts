

export class BatchDeleteRegistryRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): BatchDeleteRegistryRequestBody {
        this['ids'] = ids;
        return this;
    }
}