

export class BatchIdBody {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): BatchIdBody {
        this['ids'] = ids;
        return this;
    }
}