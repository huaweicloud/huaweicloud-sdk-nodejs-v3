

export class DeleteIds {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteIds {
        this['ids'] = ids;
        return this;
    }
}