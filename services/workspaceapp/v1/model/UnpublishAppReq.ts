

export class UnpublishAppReq {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): UnpublishAppReq {
        this['ids'] = ids;
        return this;
    }
}