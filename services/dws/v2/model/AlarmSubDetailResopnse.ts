

export class AlarmSubDetailResopnse {
    public id?: string;
    private 'alarm_id'?: string;
    private 'alarm_name'?: string;
    private 'name_space'?: string;
    private 'alarm_level'?: string;
    public constructor(id?: string, alarmId?: string, alarmName?: string, nameSpace?: string, alarmLevel?: string) { 
        this['id'] = id;
        this['alarm_id'] = alarmId;
        this['alarm_name'] = alarmName;
        this['name_space'] = nameSpace;
        this['alarm_level'] = alarmLevel;
    }
    public withId(id: string): AlarmSubDetailResopnse {
        this['id'] = id;
        return this;
    }
    public withAlarmId(alarmId: string): AlarmSubDetailResopnse {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withAlarmName(alarmName: string): AlarmSubDetailResopnse {
        this['alarm_name'] = alarmName;
        return this;
    }
    public set alarmName(alarmName: string  | undefined) {
        this['alarm_name'] = alarmName;
    }
    public get alarmName(): string | undefined {
        return this['alarm_name'];
    }
    public withNameSpace(nameSpace: string): AlarmSubDetailResopnse {
        this['name_space'] = nameSpace;
        return this;
    }
    public set nameSpace(nameSpace: string  | undefined) {
        this['name_space'] = nameSpace;
    }
    public get nameSpace(): string | undefined {
        return this['name_space'];
    }
    public withAlarmLevel(alarmLevel: string): AlarmSubDetailResopnse {
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