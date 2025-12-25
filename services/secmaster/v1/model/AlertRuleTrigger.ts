

export class AlertRuleTrigger {
    private 'accumulated_times'?: number;
    public expression?: string;
    public mode?: AlertRuleTriggerModeEnum | string;
    public operator?: AlertRuleTriggerOperatorEnum | string;
    public severity?: AlertRuleTriggerSeverityEnum | string;
    public constructor(expression?: string) { 
        this['expression'] = expression;
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
    public withExpression(expression: string): AlertRuleTrigger {
        this['expression'] = expression;
        return this;
    }
    public withMode(mode: AlertRuleTriggerModeEnum | string): AlertRuleTrigger {
        this['mode'] = mode;
        return this;
    }
    public withOperator(operator: AlertRuleTriggerOperatorEnum | string): AlertRuleTrigger {
        this['operator'] = operator;
        return this;
    }
    public withSeverity(severity: AlertRuleTriggerSeverityEnum | string): AlertRuleTrigger {
        this['severity'] = severity;
        return this;
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
