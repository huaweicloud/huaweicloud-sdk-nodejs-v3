

export class UpdateAiGuardRuleStatusRequestBody {
    public status?: UpdateAiGuardRuleStatusRequestBodyStatusEnum | string;
    public constructor(status?: string) { 
        this['status'] = status;
    }
    public withStatus(status: UpdateAiGuardRuleStatusRequestBodyStatusEnum | string): UpdateAiGuardRuleStatusRequestBody {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum UpdateAiGuardRuleStatusRequestBodyStatusEnum {
    ENABLE = 'enable',
    DISABLE = 'disable'
}
