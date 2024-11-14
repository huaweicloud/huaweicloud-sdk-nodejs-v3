

export class SwitchSecondLevelMonitoringRequestBody {
    public enabled?: boolean;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): SwitchSecondLevelMonitoringRequestBody {
        this['enabled'] = enabled;
        return this;
    }
}