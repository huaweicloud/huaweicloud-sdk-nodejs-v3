

export class UpdateKillOpRuleRequestBody {
    public ids?: Array<string>;
    public action?: string;
    public constructor(ids?: Array<string>, action?: string) { 
        this['ids'] = ids;
        this['action'] = action;
    }
    public withIds(ids: Array<string>): UpdateKillOpRuleRequestBody {
        this['ids'] = ids;
        return this;
    }
    public withAction(action: string): UpdateKillOpRuleRequestBody {
        this['action'] = action;
        return this;
    }
}