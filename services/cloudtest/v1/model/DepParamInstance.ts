

export class DepParamInstance {
    public compareValue?: string;
    public comparison?: string;
    public condition?: boolean;
    public inValidValues?: Array<string>;
    public name?: string;
    public nullInfo?: string;
    public relationMap?: { [key: string]: string; };
    public relationNum?: number;
    public values?: Array<string>;
    public constructor() { 
    }
    public withCompareValue(compareValue: string): DepParamInstance {
        this['compareValue'] = compareValue;
        return this;
    }
    public withComparison(comparison: string): DepParamInstance {
        this['comparison'] = comparison;
        return this;
    }
    public withCondition(condition: boolean): DepParamInstance {
        this['condition'] = condition;
        return this;
    }
    public withInValidValues(inValidValues: Array<string>): DepParamInstance {
        this['inValidValues'] = inValidValues;
        return this;
    }
    public withName(name: string): DepParamInstance {
        this['name'] = name;
        return this;
    }
    public withNullInfo(nullInfo: string): DepParamInstance {
        this['nullInfo'] = nullInfo;
        return this;
    }
    public withRelationMap(relationMap: { [key: string]: string; }): DepParamInstance {
        this['relationMap'] = relationMap;
        return this;
    }
    public withRelationNum(relationNum: number): DepParamInstance {
        this['relationNum'] = relationNum;
        return this;
    }
    public withValues(values: Array<string>): DepParamInstance {
        this['values'] = values;
        return this;
    }
}