

export class DeletetemplatesReq {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeletetemplatesReq {
        this['ids'] = ids;
        return this;
    }
}