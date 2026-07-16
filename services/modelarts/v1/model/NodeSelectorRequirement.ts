

export class NodeSelectorRequirement {
    public key?: string;
    public operator?: NodeSelectorRequirementOperatorEnum | string;
    public values?: Array<string>;
    public constructor(key?: string, operator?: string) { 
        this['key'] = key;
        this['operator'] = operator;
    }
    public withKey(key: string): NodeSelectorRequirement {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: NodeSelectorRequirementOperatorEnum | string): NodeSelectorRequirement {
        this['operator'] = operator;
        return this;
    }
    public withValues(values: Array<string>): NodeSelectorRequirement {
        this['values'] = values;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeSelectorRequirementOperatorEnum {
    IN = 'In',
    NOTIN = 'NotIn',
    EXISTS = 'Exists',
    DOESNOTEXIST = 'DoesNotExist',
    GT = 'Gt',
    LT = 'Lt'
}
