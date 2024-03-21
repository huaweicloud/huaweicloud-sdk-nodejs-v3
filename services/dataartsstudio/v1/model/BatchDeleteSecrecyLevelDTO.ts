

export class BatchDeleteSecrecyLevelDTO {
    public ids?: Array<string>;
    public constructor() { 
    }
    public withIds(ids: Array<string>): BatchDeleteSecrecyLevelDTO {
        this['ids'] = ids;
        return this;
    }
}