

export class StatusMetric {
    public enabled?: number;
    public disabled?: number;
    public error?: number;
    private 'is_percentage'?: boolean;
    public constructor() { 
    }
    public withEnabled(enabled: number): StatusMetric {
        this['enabled'] = enabled;
        return this;
    }
    public withDisabled(disabled: number): StatusMetric {
        this['disabled'] = disabled;
        return this;
    }
    public withError(error: number): StatusMetric {
        this['error'] = error;
        return this;
    }
    public withIsPercentage(isPercentage: boolean): StatusMetric {
        this['is_percentage'] = isPercentage;
        return this;
    }
    public set isPercentage(isPercentage: boolean  | undefined) {
        this['is_percentage'] = isPercentage;
    }
    public get isPercentage(): boolean | undefined {
        return this['is_percentage'];
    }
}