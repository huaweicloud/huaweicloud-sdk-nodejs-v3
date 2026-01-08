

export class CompareConditionOption {
    public name?: string;
    private 'enable_equal'?: boolean;
    public min?: number;
    public max?: number;
    public value?: number;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): CompareConditionOption {
        this['name'] = name;
        return this;
    }
    public withEnableEqual(enableEqual: boolean): CompareConditionOption {
        this['enable_equal'] = enableEqual;
        return this;
    }
    public set enableEqual(enableEqual: boolean  | undefined) {
        this['enable_equal'] = enableEqual;
    }
    public get enableEqual(): boolean | undefined {
        return this['enable_equal'];
    }
    public withMin(min: number): CompareConditionOption {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): CompareConditionOption {
        this['max'] = max;
        return this;
    }
    public withValue(value: number): CompareConditionOption {
        this['value'] = value;
        return this;
    }
}