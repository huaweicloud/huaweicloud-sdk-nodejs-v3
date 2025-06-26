

export class BatchDeleteWarehouseAppReq {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): BatchDeleteWarehouseAppReq {
        this['ids'] = ids;
        return this;
    }
}