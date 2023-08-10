

export class ListAssociationAlarmsResponseAlarms {
    private 'alarm_id'?: string;
    public name?: string;
    public description?: string;
    public constructor(alarmId?: string, name?: string, description?: string) { 
        this['alarm_id'] = alarmId;
        this['name'] = name;
        this['description'] = description;
    }
    public withAlarmId(alarmId: string): ListAssociationAlarmsResponseAlarms {
        this['alarm_id'] = alarmId;
        return this;
    }
    public set alarmId(alarmId: string  | undefined) {
        this['alarm_id'] = alarmId;
    }
    public get alarmId(): string | undefined {
        return this['alarm_id'];
    }
    public withName(name: string): ListAssociationAlarmsResponseAlarms {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ListAssociationAlarmsResponseAlarms {
        this['description'] = description;
        return this;
    }
}