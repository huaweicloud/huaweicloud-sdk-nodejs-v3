

export class DeletetemplatesReq {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): DeletetemplatesReq {
        this['ids'] = ids;
        return this;
    }
}