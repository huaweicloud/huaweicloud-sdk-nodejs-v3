

export class BatchOperateReqVO {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): BatchOperateReqVO {
        this['ids'] = ids;
        return this;
    }
}