

export class AutoEnlargeStrategyForConsoleApi {
    public option?: boolean;
    public limitSize?: number;
    public triggerAvailablePercent?: number;
    public stepPercent?: number;
    public constructor() { 
    }
    public withOption(option: boolean): AutoEnlargeStrategyForConsoleApi {
        this['option'] = option;
        return this;
    }
    public withLimitSize(limitSize: number): AutoEnlargeStrategyForConsoleApi {
        this['limitSize'] = limitSize;
        return this;
    }
    public withTriggerAvailablePercent(triggerAvailablePercent: number): AutoEnlargeStrategyForConsoleApi {
        this['triggerAvailablePercent'] = triggerAvailablePercent;
        return this;
    }
    public withStepPercent(stepPercent: number): AutoEnlargeStrategyForConsoleApi {
        this['stepPercent'] = stepPercent;
        return this;
    }
}