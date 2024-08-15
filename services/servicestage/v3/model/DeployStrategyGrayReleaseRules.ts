

export class DeployStrategyGrayReleaseRules {
    public type?: DeployStrategyGrayReleaseRulesTypeEnum | string;
    public key?: string;
    public value?: string;
    public condition?: DeployStrategyGrayReleaseRulesConditionEnum | string;
    public constructor(type?: string, key?: string, value?: string, condition?: string) { 
        this['type'] = type;
        this['key'] = key;
        this['value'] = value;
        this['condition'] = condition;
    }
    public withType(type: DeployStrategyGrayReleaseRulesTypeEnum | string): DeployStrategyGrayReleaseRules {
        this['type'] = type;
        return this;
    }
    public withKey(key: string): DeployStrategyGrayReleaseRules {
        this['key'] = key;
        return this;
    }
    public withValue(value: string): DeployStrategyGrayReleaseRules {
        this['value'] = value;
        return this;
    }
    public withCondition(condition: DeployStrategyGrayReleaseRulesConditionEnum | string): DeployStrategyGrayReleaseRules {
        this['condition'] = condition;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseRulesTypeEnum {
    HEADER = 'header'
}
/**
    * @export
    * @enum {string}
    */
export enum DeployStrategyGrayReleaseRulesConditionEnum {
    EQUAL = 'equal',
    MATCH = 'match',
    IN = 'in'
}
