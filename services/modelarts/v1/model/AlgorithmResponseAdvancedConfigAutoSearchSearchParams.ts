

export class AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
    public name?: string;
    private 'param_type'?: string;
    private 'lower_bound'?: string;
    private 'upper_bound'?: string;
    private 'discrete_points_num'?: string;
    private 'discrete_values'?: string;
    public constructor() { 
    }
    public withName(name: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['name'] = name;
        return this;
    }
    public withParamType(paramType: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withLowerBound(lowerBound: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['lower_bound'] = lowerBound;
        return this;
    }
    public set lowerBound(lowerBound: string  | undefined) {
        this['lower_bound'] = lowerBound;
    }
    public get lowerBound(): string | undefined {
        return this['lower_bound'];
    }
    public withUpperBound(upperBound: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['upper_bound'] = upperBound;
        return this;
    }
    public set upperBound(upperBound: string  | undefined) {
        this['upper_bound'] = upperBound;
    }
    public get upperBound(): string | undefined {
        return this['upper_bound'];
    }
    public withDiscretePointsNum(discretePointsNum: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['discrete_points_num'] = discretePointsNum;
        return this;
    }
    public set discretePointsNum(discretePointsNum: string  | undefined) {
        this['discrete_points_num'] = discretePointsNum;
    }
    public get discretePointsNum(): string | undefined {
        return this['discrete_points_num'];
    }
    public withDiscreteValues(discreteValues: string): AlgorithmResponseAdvancedConfigAutoSearchSearchParams {
        this['discrete_values'] = discreteValues;
        return this;
    }
    public set discreteValues(discreteValues: string  | undefined) {
        this['discrete_values'] = discreteValues;
    }
    public get discreteValues(): string | undefined {
        return this['discrete_values'];
    }
}