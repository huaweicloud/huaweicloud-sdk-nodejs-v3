

export class DataClassificationRuleEnableDTO {
    public enable?: boolean;
    public constructor() { 
    }
    public withEnable(enable: boolean): DataClassificationRuleEnableDTO {
        this['enable'] = enable;
        return this;
    }
}