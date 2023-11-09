

export class AlertRuleTrigger {
    public mode?: AlertRuleTriggerModeEnum | string;
    public operator?: AlertRuleTriggerOperatorEnum | string;
    public expression?: string;
    public severity?: AlertRuleTriggerSeverityEnum | string;
    private 'accumulated_times'?: number;
    public constructor(expression?: string) { 
        this['expression'] = expression;
    }
    public withMode(mode: AlertRuleTriggerModeEnum | string): AlertRuleTrigger {
        this['mode'] = mode;
        return this;
    }
    public withOperator(operator: AlertRuleTriggerOperatorEnum | string): AlertRuleTrigger {
        this['operator'] = operator;
        return this;
    }
    public withExpression(expression: string): AlertRuleTrigger {
        this['expression'] = expression;
        return this;
    }
    public withSeverity(severity: AlertRuleTriggerSeverityEnum | string): AlertRuleTrigger {
        this['severity'] = severity;
        return this;
    }
    public withAccumulatedTimes(accumulatedTimes: number): AlertRuleTrigger {
        this['accumulated_times'] = accumulatedTimes;
        return this;
    }
    public set accumulatedTimes(accumulatedTimes: number  | undefined) {
        this['accumulated_times'] = accumulatedTimes;
    }
    public get accumulatedTimes(): number | undefined {
        return this['accumulated_times'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTriggerModeEnum {
    COUNT = 'COUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTriggerOperatorEnum {
    EQ = 'EQ',
    NE = 'NE',
    GT = 'GT',
    LT = 'LT'
}
/**
    * @export
    * @enum {string}
    */
export enum AlertRuleTriggerSeverityEnum {
    TIPS = 'TIPS',
    LOW = 'LOW',
    MEDIUM = 'MEDIUM',
    HIGH = 'HIGH',
    FATAL = 'FATAL'
}
