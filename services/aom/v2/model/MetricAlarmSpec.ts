import { AlarmTags } from './AlarmTags';
import { NoDataCondition } from './NoDataCondition';
import { RecoveryCondition } from './RecoveryCondition';
import { TriggerCondition } from './TriggerCondition';


export class MetricAlarmSpec {
    private 'monitor_type'?: MetricAlarmSpecMonitorTypeEnum | string;
    private 'no_data_conditions'?: Array<NoDataCondition>;
    private 'alarm_tags'?: Array<AlarmTags>;
    private 'monitor_objects'?: Array<{ [key: string]: string; }>;
    private 'recovery_conditions'?: RecoveryCondition;
    private 'trigger_conditions'?: Array<TriggerCondition>;
    private 'alarm_rule_template_bind_enable'?: boolean;
    private 'alarm_rule_template_id'?: string;
    public constructor(monitorType?: string, alarmTags?: Array<AlarmTags>, recoveryConditions?: RecoveryCondition, triggerConditions?: Array<TriggerCondition>) { 
        this['monitor_type'] = monitorType;
        this['alarm_tags'] = alarmTags;
        this['recovery_conditions'] = recoveryConditions;
        this['trigger_conditions'] = triggerConditions;
    }
    public withMonitorType(monitorType: MetricAlarmSpecMonitorTypeEnum | string): MetricAlarmSpec {
        this['monitor_type'] = monitorType;
        return this;
    }
    public set monitorType(monitorType: MetricAlarmSpecMonitorTypeEnum | string  | undefined) {
        this['monitor_type'] = monitorType;
    }
    public get monitorType(): MetricAlarmSpecMonitorTypeEnum | string | undefined {
        return this['monitor_type'];
    }
    public withNoDataConditions(noDataConditions: Array<NoDataCondition>): MetricAlarmSpec {
        this['no_data_conditions'] = noDataConditions;
        return this;
    }
    public set noDataConditions(noDataConditions: Array<NoDataCondition>  | undefined) {
        this['no_data_conditions'] = noDataConditions;
    }
    public get noDataConditions(): Array<NoDataCondition> | undefined {
        return this['no_data_conditions'];
    }
    public withAlarmTags(alarmTags: Array<AlarmTags>): MetricAlarmSpec {
        this['alarm_tags'] = alarmTags;
        return this;
    }
    public set alarmTags(alarmTags: Array<AlarmTags>  | undefined) {
        this['alarm_tags'] = alarmTags;
    }
    public get alarmTags(): Array<AlarmTags> | undefined {
        return this['alarm_tags'];
    }
    public withMonitorObjects(monitorObjects: Array<{ [key: string]: string; }>): MetricAlarmSpec {
        this['monitor_objects'] = monitorObjects;
        return this;
    }
    public set monitorObjects(monitorObjects: Array<{ [key: string]: string; }>  | undefined) {
        this['monitor_objects'] = monitorObjects;
    }
    public get monitorObjects(): Array<{ [key: string]: string; }> | undefined {
        return this['monitor_objects'];
    }
    public withRecoveryConditions(recoveryConditions: RecoveryCondition): MetricAlarmSpec {
        this['recovery_conditions'] = recoveryConditions;
        return this;
    }
    public set recoveryConditions(recoveryConditions: RecoveryCondition  | undefined) {
        this['recovery_conditions'] = recoveryConditions;
    }
    public get recoveryConditions(): RecoveryCondition | undefined {
        return this['recovery_conditions'];
    }
    public withTriggerConditions(triggerConditions: Array<TriggerCondition>): MetricAlarmSpec {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<TriggerCondition>  | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions(): Array<TriggerCondition> | undefined {
        return this['trigger_conditions'];
    }
    public withAlarmRuleTemplateBindEnable(alarmRuleTemplateBindEnable: boolean): MetricAlarmSpec {
        this['alarm_rule_template_bind_enable'] = alarmRuleTemplateBindEnable;
        return this;
    }
    public set alarmRuleTemplateBindEnable(alarmRuleTemplateBindEnable: boolean  | undefined) {
        this['alarm_rule_template_bind_enable'] = alarmRuleTemplateBindEnable;
    }
    public get alarmRuleTemplateBindEnable(): boolean | undefined {
        return this['alarm_rule_template_bind_enable'];
    }
    public withAlarmRuleTemplateId(alarmRuleTemplateId: string): MetricAlarmSpec {
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
export enum MetricAlarmSpecMonitorTypeEnum {
    ALL_METRIC = 'all_metric',
    PROMQL = 'promql',
    RESOURCE = 'resource'
}
