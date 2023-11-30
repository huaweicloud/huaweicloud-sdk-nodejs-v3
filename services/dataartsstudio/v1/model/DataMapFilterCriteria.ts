

export class DataMapFilterCriteria {
    public attribute?: DataMapFilterCriteriaAttributeEnum | string;
    public operator?: DataMapFilterCriteriaOperatorEnum | string;
    public value?: Array<string>;
    public condition?: DataMapFilterCriteriaConditionEnum | string;
    public criterion?: Array<DataMapFilterCriteria>;
    public constructor() { 
    }
    public withAttribute(attribute: DataMapFilterCriteriaAttributeEnum | string): DataMapFilterCriteria {
        this['attribute'] = attribute;
        return this;
    }
    public withOperator(operator: DataMapFilterCriteriaOperatorEnum | string): DataMapFilterCriteria {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: Array<string>): DataMapFilterCriteria {
        this['value'] = value;
        return this;
    }
    public withCondition(condition: DataMapFilterCriteriaConditionEnum | string): DataMapFilterCriteria {
        this['condition'] = condition;
        return this;
    }
    public withCriterion(criterion: Array<DataMapFilterCriteria>): DataMapFilterCriteria {
        this['criterion'] = criterion;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DataMapFilterCriteriaAttributeEnum {
    BASE_DATAASSET_SOURCETYPE = 'base.DataAsset.sourceType',
    TYPENAME = 'typeName',
    CLASSIFICATIONS_NAME = 'classifications.name',
    TAGS_NAME = 'tags.name',
    SECURITYLEVEL_NAME = 'securityLevel.name',
    WORKSPACEID = 'workspaceId'
}
/**
    * @export
    * @enum {string}
    */
export enum DataMapFilterCriteriaOperatorEnum {
    IN = 'IN',
    EQ = 'EQ'
}
/**
    * @export
    * @enum {string}
    */
export enum DataMapFilterCriteriaConditionEnum {
    OR = 'OR'
}
