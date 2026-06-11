

export class BatchDeleteShardsRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): BatchDeleteShardsRequestBody {
        this['ids'] = ids;
        return this;
    }
}