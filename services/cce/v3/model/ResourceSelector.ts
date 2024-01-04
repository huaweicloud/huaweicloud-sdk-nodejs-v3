

export class ResourceSelector {
    public key?: ResourceSelectorKeyEnum | string;
    public values?: Array<string>;
    public operator?: ResourceSelectorOperatorEnum | string;
    public constructor(key?: string, operator?: string) { 
        this['key'] = key;
        this['operator'] = operator;
    }
    public withKey(key: ResourceSelectorKeyEnum | string): ResourceSelector {
        this['key'] = key;
        return this;
    }
    public withValues(values: Array<string>): ResourceSelector {
        this['values'] = values;
        return this;
    }
    public withOperator(operator: ResourceSelectorOperatorEnum | string): ResourceSelector {
        this['operator'] = operator;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceSelectorKeyEnum {
    NODE_UID = 'node.uid'
}
/**
    * @export
    * @enum {string}
    */
export enum ResourceSelectorOperatorEnum {
    IN = 'In'
}
