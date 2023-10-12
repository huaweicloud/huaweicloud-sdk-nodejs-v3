

export class ListOneClickAlarmsRespOneClickAlarms {
    private 'one_click_alarm_id'?: string;
    public namespace?: string;
    public description?: string;
    public enabled?: boolean;
    public constructor(oneClickAlarmId?: string, namespace?: string, description?: string, enabled?: boolean) { 
        this['one_click_alarm_id'] = oneClickAlarmId;
        this['namespace'] = namespace;
        this['description'] = description;
        this['enabled'] = enabled;
    }
    public withOneClickAlarmId(oneClickAlarmId: string): ListOneClickAlarmsRespOneClickAlarms {
        this['one_click_alarm_id'] = oneClickAlarmId;
        return this;
    }
    public set oneClickAlarmId(oneClickAlarmId: string  | undefined) {
        this['one_click_alarm_id'] = oneClickAlarmId;
    }
    public get oneClickAlarmId(): string | undefined {
        return this['one_click_alarm_id'];
    }
    public withNamespace(namespace: string): ListOneClickAlarmsRespOneClickAlarms {
        this['namespace'] = namespace;
        return this;
    }
    public withDescription(description: string): ListOneClickAlarmsRespOneClickAlarms {
        this['description'] = description;
        return this;
    }
    public withEnabled(enabled: boolean): ListOneClickAlarmsRespOneClickAlarms {
        this['enabled'] = enabled;
        return this;
    }
}