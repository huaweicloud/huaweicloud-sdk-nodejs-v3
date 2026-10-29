

export class KeywordsAlarmConditions {
    public condition?: string;
    private 'number'?: number;
    private 'alarm_level'?: string;
    public constructor(condition?: string, modelNumber?: number, alarmLevel?: string) { 
        this['condition'] = condition;
        this['number'] = modelNumber;
        this['alarm_level'] = alarmLevel;
    }
    public withCondition(condition: string): KeywordsAlarmConditions {
        this['condition'] = condition;
        return this;
    }
    public withModelNumber(modelNumber: number): KeywordsAlarmConditions {
        this['number'] = modelNumber;
        return this;
    }
    public set modelNumber(modelNumber: number  | undefined) {
        this['number'] = modelNumber;
    }
    public get modelNumber(): number | undefined {
        return this['number'];
    }
    public withAlarmLevel(alarmLevel: string): KeywordsAlarmConditions {
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