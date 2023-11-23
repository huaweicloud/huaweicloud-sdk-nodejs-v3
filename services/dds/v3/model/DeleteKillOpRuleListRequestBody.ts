

export class DeleteKillOpRuleListRequestBody {
    public ids?: Array<string>;
    public constructor(ids?: Array<string>) { 
        this['ids'] = ids;
    }
    public withIds(ids: Array<string>): DeleteKillOpRuleListRequestBody {
        this['ids'] = ids;
        return this;
    }
}