

export class IdArray {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): IdArray {
        this['ids'] = ids;
        return this;
    }
}