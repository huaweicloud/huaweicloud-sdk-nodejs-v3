

export class DeleteIds {
    public ids: Array<string>;
    public constructor(ids?: any) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteIds {
        this['ids'] = ids;
        return this;
    }
}