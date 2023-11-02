import { ConditionInfo } from './ConditionInfo';


export class DataMapFilterCriteria {
    public attribute?: string;
    public operator?: string;
    public value?: object;
    public condition?: ConditionInfo;
    public criterion?: Array<DataMapFilterCriteria>;
    public constructor() { 
    }
    public withAttribute(attribute: string): DataMapFilterCriteria {
        this['attribute'] = attribute;
        return this;
    }
    public withOperator(operator: string): DataMapFilterCriteria {
        this['operator'] = operator;
        return this;
    }
    public withValue(value: object): DataMapFilterCriteria {
        this['value'] = value;
        return this;
    }
    public withCondition(condition: ConditionInfo): DataMapFilterCriteria {
        this['condition'] = condition;
        return this;
    }
    public withCriterion(criterion: Array<DataMapFilterCriteria>): DataMapFilterCriteria {
        this['criterion'] = criterion;
        return this;
    }
}