import { DataMapFilterCriteria } from './DataMapFilterCriteria';


export class ConditionInfo {
    public attribute?: string;
    public operator?: string;
    public value?: object;
    public condition?: string;
    public criterion?: Array<DataMapFilterCriteria>;
    public constructor() { 
    }
    public withAttribute(attribute: string): ConditionInfo {
        this['attribute'] = attribute;
        return this;
    }
    public withOperator(operator: string): ConditionInfo {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: object): ConditionInfo {
        this['value'] = value;
        return this;
    }
    public withCondition(condition: string): ConditionInfo {
        this['condition'] = condition;
        return this;
    }
    public withCriterion(criterion: Array<DataMapFilterCriteria>): ConditionInfo {
        this['criterion'] = criterion;
        return this;
    }
}