

export class DeleteAppGroupReq {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteAppGroupReq {
        this['ids'] = ids;
        return this;
    }
}