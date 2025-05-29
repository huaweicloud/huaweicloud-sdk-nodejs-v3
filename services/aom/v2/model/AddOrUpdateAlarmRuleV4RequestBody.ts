import { AlarmNotification } from './AlarmNotification';
import { EventAlarmSpec } from './EventAlarmSpec';
import { MetricAlarmSpec } from './MetricAlarmSpec';


export class AddOrUpdateAlarmRuleV4RequestBody {
    private 'alarm_notifications'?: AlarmNotification;
    private 'alarm_rule_description'?: string;
    private 'alarm_rule_enable'?: boolean;
    private 'alarm_rule_name'?: string;
    private 'alarm_rule_type'?: AddOrUpdateAlarmRuleV4RequestBodyAlarmRuleTypeEnum | string;
    private 'event_alarm_spec'?: EventAlarmSpec;
    private 'metric_alarm_spec'?: MetricAlarmSpec;
    private 'prom_instance_id'?: string;
    public alias?: string;
    public constructor(alarmRuleName?: string, alarmRuleType?: string) { 
        this['alarm_rule_name'] = alarmRuleName;
        this['alarm_rule_type'] = alarmRuleType;
    }
    public withAlarmNotifications(alarmNotifications: AlarmNotification): AddOrUpdateAlarmRuleV4RequestBody {
        this['alarm_notifications'] = alarmNotifications;
        return this;
    }
    public set alarmNotifications(alarmNotifications: AlarmNotification  | undefined) {
        this['alarm_notifications'] = alarmNotifications;
    }
    public get alarmNotifications(): AlarmNotification | undefined {
        return this['alarm_notifications'];
    }
    public withAlarmRuleDescription(alarmRuleDescription: string): AddOrUpdateAlarmRuleV4RequestBody {
        this['alarm_rule_description'] = alarmRuleDescription;
        return this;
    }
    public set alarmRuleDescription(alarmRuleDescription: string  | undefined) {
        this['alarm_rule_description'] = alarmRuleDescription;
    }
    public get alarmRuleDescription(): string | undefined {
        return this['alarm_rule_description'];
    }
    public withAlarmRuleEnable(alarmRuleEnable: boolean): AddOrUpdateAlarmRuleV4RequestBody {
        this['alarm_rule_enable'] = alarmRuleEnable;
        return this;
    }
    public set alarmRuleEnable(alarmRuleEnable: boolean  | undefined) {
        this['alarm_rule_enable'] = alarmRuleEnable;
    }
    public get alarmRuleEnable(): boolean | undefined {
        return this['alarm_rule_enable'];
    }
    public withAlarmRuleName(alarmRuleName: string): AddOrUpdateAlarmRuleV4RequestBody {
        this['alarm_rule_name'] = alarmRuleName;
        return this;
    }
    public set alarmRuleName(alarmRuleName: string  | undefined) {
        this['alarm_rule_name'] = alarmRuleName;
    }
    public get alarmRuleName(): string | undefined {
        return this['alarm_rule_name'];
    }
    public withAlarmRuleType(alarmRuleType: AddOrUpdateAlarmRuleV4RequestBodyAlarmRuleTypeEnum | string): AddOrUpdateAlarmRuleV4RequestBody {
        this['alarm_rule_type'] = alarmRuleType;
        return this;
    }
    public set alarmRuleType(alarmRuleType: AddOrUpdateAlarmRuleV4RequestBodyAlarmRuleTypeEnum | string  | undefined) {
        this['alarm_rule_type'] = alarmRuleType;
    }
    public get alarmRuleType(): AddOrUpdateAlarmRuleV4RequestBodyAlarmRuleTypeEnum | string | undefined {
        return this['alarm_rule_type'];
    }
    public withEventAlarmSpec(eventAlarmSpec: EventAlarmSpec): AddOrUpdateAlarmRuleV4RequestBody {
        this['event_alarm_spec'] = eventAlarmSpec;
        return this;
    }
    public set eventAlarmSpec(eventAlarmSpec: EventAlarmSpec  | undefined) {
        this['event_alarm_spec'] = eventAlarmSpec;
    }
    public get eventAlarmSpec(): EventAlarmSpec | undefined {
        return this['event_alarm_spec'];
    }
    public withMetricAlarmSpec(metricAlarmSpec: MetricAlarmSpec): AddOrUpdateAlarmRuleV4RequestBody {
        this['metric_alarm_spec'] = metricAlarmSpec;
        return this;
    }
    public set metricAlarmSpec(metricAlarmSpec: MetricAlarmSpec  | undefined) {
        this['metric_alarm_spec'] = metricAlarmSpec;
    }
    public get metricAlarmSpec(): MetricAlarmSpec | undefined {
        return this['metric_alarm_spec'];
    }
    public withPromInstanceId(promInstanceId: string): AddOrUpdateAlarmRuleV4RequestBody {
        this['prom_instance_id'] = promInstanceId;
        return this;
    }
    public set promInstanceId(promInstanceId: string  | undefined) {
        this['prom_instance_id'] = promInstanceId;
    }
    public get promInstanceId(): string | undefined {
        return this['prom_instance_id'];
    }
    public withAlias(alias: string): AddOrUpdateAlarmRuleV4RequestBody {
        this['alias'] = alias;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum AddOrUpdateAlarmRuleV4RequestBodyAlarmRuleTypeEnum {
    METRIC = 'metric',
    EVENT = 'event'
}
