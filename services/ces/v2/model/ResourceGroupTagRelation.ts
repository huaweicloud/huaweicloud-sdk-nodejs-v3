

export class ResourceGroupTagRelation {
    public key?: string;
    public operator?: ResourceGroupTagRelationOperatorEnum | string;
    public value?: string;
    public constructor(key?: string) { 
        this['key'] = key;
    }
    public withKey(key: string): ResourceGroupTagRelation {
        this['key'] = key;
        return this;
    }
    public withOperator(operator: ResourceGroupTagRelationOperatorEnum | string): ResourceGroupTagRelation {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: string): ResourceGroupTagRelation {
        this['value'] = value;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ResourceGroupTagRelationOperatorEnum {
    INCLUDE = 'include',
    PREFIX = 'prefix',
    SUFFIX = 'suffix',
    NOTINCLUDE = 'notInclude',
    EQUAL = 'equal',
    ALL = 'all'
}
