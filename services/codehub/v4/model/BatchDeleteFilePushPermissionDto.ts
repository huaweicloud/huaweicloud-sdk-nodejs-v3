

export class BatchDeleteFilePushPermissionDto {
    public ids?: Array<number>;
    public constructor() { 
    }
    public withIds(ids: Array<number>): BatchDeleteFilePushPermissionDto {
        this['ids'] = ids;
        return this;
    }
}