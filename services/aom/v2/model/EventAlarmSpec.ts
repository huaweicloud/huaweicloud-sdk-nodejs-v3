import { EventTriggerCondition } from './EventTriggerCondition';


export class EventAlarmSpec {
    private 'alarm_source'?: EventAlarmSpecAlarmSourceEnum | string;
    private 'event_source'?: string;
    private 'monitor_objects'?: Array<{ [key: string]: string; }>;
    private 'trigger_conditions'?: Array<EventTriggerCondition>;
    private 'alarm_rule_template_bind_enable'?: boolean;
    private 'alarm_rule_template_id'?: string;
    public constructor() { 
    }
    public withAlarmSource(alarmSource: EventAlarmSpecAlarmSourceEnum | string): EventAlarmSpec {
        this['alarm_source'] = alarmSource;
        return this;
    }
    public set alarmSource(alarmSource: EventAlarmSpecAlarmSourceEnum | string  | undefined) {
        this['alarm_source'] = alarmSource;
    }
    public get alarmSource(): EventAlarmSpecAlarmSourceEnum | string | undefined {
        return this['alarm_source'];
    }
    public withEventSource(eventSource: string): EventAlarmSpec {
        this['event_source'] = eventSource;
        return this;
    }
    public set eventSource(eventSource: string  | undefined) {
        this['event_source'] = eventSource;
    }
    public get eventSource(): string | undefined {
        return this['event_source'];
    }
    public withMonitorObjects(monitorObjects: Array<{ [key: string]: string; }>): EventAlarmSpec {
        this['monitor_objects'] = monitorObjects;
        return this;
    }
    public set monitorObjects(monitorObjects: Array<{ [key: string]: string; }>  | undefined) {
        this['monitor_objects'] = monitorObjects;
    }
    public get monitorObjects(): Array<{ [key: string]: string; }> | undefined {
        return this['monitor_objects'];
    }
    public withTriggerConditions(triggerConditions: Array<EventTriggerCondition>): EventAlarmSpec {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<EventTriggerCondition>  | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions(): Array<EventTriggerCondition> | undefined {
        return this['trigger_conditions'];
    }
    public withAlarmRuleTemplateBindEnable(alarmRuleTemplateBindEnable: boolean): EventAlarmSpec {
        this['alarm_rule_template_bind_enable'] = alarmRuleTemplateBindEnable;
        return this;
    }
    public set alarmRuleTemplateBindEnable(alarmRuleTemplateBindEnable: boolean  | undefined) {
        this['alarm_rule_template_bind_enable'] = alarmRuleTemplateBindEnable;
    }
    public get alarmRuleTemplateBindEnable(): boolean | undefined {
        return this['alarm_rule_template_bind_enable'];
    }
    public withAlarmRuleTemplateId(alarmRuleTemplateId: string): EventAlarmSpec {
        this['alarm_rule_template_id'] = alarmRuleTemplateId;
        return this;
    }
    public set alarmRuleTemplateId(alarmRuleTemplateId: string  | undefined) {
        this['alarm_rule_template_id'] = alarmRuleTemplateId;
    }
    public get alarmRuleTemplateId(): string | undefined {
        return this['alarm_rule_template_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EventAlarmSpecAlarmSourceEnum {
    SYSTEMEVENT = 'systemEvent',
    CUSTOMEVENT = 'customEvent'
}
