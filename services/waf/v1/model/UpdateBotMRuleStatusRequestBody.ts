

export class UpdateBotMRuleStatusRequestBody {
    public enable?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): UpdateBotMRuleStatusRequestBody {
        this['enable'] = enable;
        return this;
    }
}