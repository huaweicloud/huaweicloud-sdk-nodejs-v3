

export class BatchUpdateAppReq {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): BatchUpdateAppReq {
        this['ids'] = ids;
        return this;
    }
}