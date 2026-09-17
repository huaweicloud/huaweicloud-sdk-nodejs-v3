

export class AlertRuleDTO {
    public ruleType?: string;
    public thresholdValue?: number;
    public severity?: string;
    public isEnabled?: boolean;
    public constructor() { 
    }
    public withRuleType(ruleType: string): AlertRuleDTO {
        this['ruleType'] = ruleType;
        return this;
    }
    public withThresholdValue(thresholdValue: number): AlertRuleDTO {
        this['thresholdValue'] = thresholdValue;
        return this;
    }
    public withSeverity(severity: string): AlertRuleDTO {
        this['severity'] = severity;
        return this;
    }
    public withIsEnabled(isEnabled: boolean): AlertRuleDTO {
        this['isEnabled'] = isEnabled;
        return this;
    }
}