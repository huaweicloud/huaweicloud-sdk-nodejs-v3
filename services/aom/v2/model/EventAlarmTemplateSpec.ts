import { EventTriggerCondition } from './EventTriggerCondition';


export class EventAlarmTemplateSpec {
    private 'alarm_subtype'?: string;
    private 'alarm_source'?: string;
    private 'event_source'?: string;
    private 'monitor_object_templates'?: Array<string>;
    private 'monitor_objects'?: Array<{ [key: string]: string; }>;
    private 'trigger_conditions'?: Array<EventTriggerCondition>;
    public constructor() { 
    }
    public withAlarmSubtype(alarmSubtype: string): EventAlarmTemplateSpec {
        this['alarm_subtype'] = alarmSubtype;
        return this;
    }
    public set alarmSubtype(alarmSubtype: string  | undefined) {
        this['alarm_subtype'] = alarmSubtype;
    }
    public get alarmSubtype(): string | undefined {
        return this['alarm_subtype'];
    }
    public withAlarmSource(alarmSource: string): EventAlarmTemplateSpec {
        this['alarm_source'] = alarmSource;
        return this;
    }
    public set alarmSource(alarmSource: string  | undefined) {
        this['alarm_source'] = alarmSource;
    }
    public get alarmSource(): string | undefined {
        return this['alarm_source'];
    }
    public withEventSource(eventSource: string): EventAlarmTemplateSpec {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withMonitorObjectTemplates(monitorObjectTemplates: Array<string>): EventAlarmTemplateSpec {
        this['monitor_object_templates'] = monitorObjectTemplates;
        return this;
    }
    public set monitorObjectTemplates(monitorObjectTemplates: Array<string>  | undefined) {
        this['monitor_object_templates'] = monitorObjectTemplates;
    }
    public get monitorObjectTemplates(): Array<string> | undefined {
        return this['monitor_object_templates'];
    }
    public withMonitorObjects(monitorObjects: Array<{ [key: string]: string; }>): EventAlarmTemplateSpec {
        this['monitor_objects'] = monitorObjects;
        return this;
    }
    public set monitorObjects(monitorObjects: Array<{ [key: string]: string; }>  | undefined) {
        this['monitor_objects'] = monitorObjects;
    }
    public get monitorObjects(): Array<{ [key: string]: string; }> | undefined {
        return this['monitor_objects'];
    }
    public withTriggerConditions(triggerConditions: Array<EventTriggerCondition>): EventAlarmTemplateSpec {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<EventTriggerCondition>  | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions(): Array<EventTriggerCondition> | undefined {
        return this['trigger_conditions'];
    }
}