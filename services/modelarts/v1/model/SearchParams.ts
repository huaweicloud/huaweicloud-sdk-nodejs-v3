

export class SearchParams {
    public name?: string;
    private 'param_type'?: string;
    private 'lower_bound'?: string;
    private 'upper_bound'?: string;
    private 'discrete_points_num'?: string;
    private 'discrete_values'?: Array<string>;
    public constructor() { 
    }
    public withName(name: string): SearchParams {
        this['name'] = name;
        return this;
    }
    public withParamType(paramType: string): SearchParams {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withLowerBound(lowerBound: string): SearchParams {
        this['lower_bound'] = lowerBound;
        return this;
    }
    public set lowerBound(lowerBound: string  | undefined) {
        this['lower_bound'] = lowerBound;
    }
    public get lowerBound(): string | undefined {
        return this['lower_bound'];
    }
    public withUpperBound(upperBound: string): SearchParams {
        this['upper_bound'] = upperBound;
        return this;
    }
    public set upperBound(upperBound: string  | undefined) {
        this['upper_bound'] = upperBound;
    }
    public get upperBound(): string | undefined {
        return this['upper_bound'];
    }
    public withDiscretePointsNum(discretePointsNum: string): SearchParams {
        this['discrete_points_num'] = discretePointsNum;
        return this;
    }
    public set discretePointsNum(discretePointsNum: string  | undefined) {
        this['discrete_points_num'] = discretePointsNum;
    }
    public get discretePointsNum(): string | undefined {
        return this['discrete_points_num'];
    }
    public withDiscreteValues(discreteValues: Array<string>): SearchParams {
        this['discrete_values'] = discreteValues;
        return this;
    }
    public set discreteValues(discreteValues: Array<string>  | undefined) {
        this['discrete_values'] = discreteValues;
    }
    public get discreteValues(): Array<string> | undefined {
        return this['discrete_values'];
    }
}