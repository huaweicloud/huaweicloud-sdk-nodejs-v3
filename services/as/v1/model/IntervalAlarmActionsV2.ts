

export class IntervalAlarmActionsV2 {
    public operation?: string;
    public limits?: number;
    public size?: number;
    private 'lower_bound'?: number;
    private 'upper_bound'?: number;
    public constructor() { 
    }
    public withOperation(operation: string): IntervalAlarmActionsV2 {
        this['operation'] = operation;
        return this;
    }
    public withLimits(limits: number): IntervalAlarmActionsV2 {
        this['limits'] = limits;
        return this;
    }
    public withSize(size: number): IntervalAlarmActionsV2 {
        this['size'] = size;
        return this;
    }
    public withLowerBound(lowerBound: number): IntervalAlarmActionsV2 {
        this['lower_bound'] = lowerBound;
        return this;
    }
    public set lowerBound(lowerBound: number  | undefined) {
        this['lower_bound'] = lowerBound;
    }
    public get lowerBound(): number | undefined {
        return this['lower_bound'];
    }
    public withUpperBound(upperBound: number): IntervalAlarmActionsV2 {
        this['upper_bound'] = upperBound;
        return this;
    }
    public set upperBound(upperBound: number  | undefined) {
        this['upper_bound'] = upperBound;
    }
    public get upperBound(): number | undefined {
        return this['upper_bound'];
    }
}