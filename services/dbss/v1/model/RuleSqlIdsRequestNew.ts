

export class RuleSqlIdsRequestNew {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): RuleSqlIdsRequestNew {
        this['ids'] = ids;
        return this;
    }
}