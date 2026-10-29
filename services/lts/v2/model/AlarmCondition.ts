

export class AlarmCondition {
    private 'condition_expression'?: string;
    private 'alarm_level'?: string;
    public constructor(conditionExpression?: string, alarmLevel?: string) { 
        this['condition_expression'] = conditionExpression;
        this['alarm_level'] = alarmLevel;
    }
    public withConditionExpression(conditionExpression: string): AlarmCondition {
        this['condition_expression'] = conditionExpression;
        return this;
    }
    public set conditionExpression(conditionExpression: string  | undefined) {
        this['condition_expression'] = conditionExpression;
    }
    public get conditionExpression(): string | undefined {
        return this['condition_expression'];
    }
    public withAlarmLevel(alarmLevel: string): AlarmCondition {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: string  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): string | undefined {
        return this['alarm_level'];
    }
}