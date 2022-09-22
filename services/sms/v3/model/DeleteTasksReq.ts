

export class DeleteTasksReq {
    public ids: Array<string>;
    public constructor(ids?: any) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteTasksReq {
        this['ids'] = ids;
        return this;
    }
}