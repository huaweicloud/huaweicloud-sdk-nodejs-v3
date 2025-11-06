import { AlarmTags } from './AlarmTags';
import { NoDataCondition } from './NoDataCondition';
import { RecoveryCondition } from './RecoveryCondition';
import { TemplateTriggerCondition } from './TemplateTriggerCondition';


export class MetricAlarmTemplateSpec {
    private 'alarm_subtype'?: string;
    private 'alarm_source'?: string;
    private 'monitor_type'?: string;
    private 'trigger_conditions'?: Array<TemplateTriggerCondition>;
    private 'no_data_conditions'?: Array<NoDataCondition>;
    private 'alarm_tags'?: Array<AlarmTags>;
    private 'recovery_conditions'?: RecoveryCondition;
    public constructor() { 
    }
    public withAlarmSubtype(alarmSubtype: string): MetricAlarmTemplateSpec {
        this['alarm_subtype'] = alarmSubtype;
        return this;
    }
    public set alarmSubtype(alarmSubtype: string  | undefined) {
        this['alarm_subtype'] = alarmSubtype;
    }
    public get alarmSubtype(): string | undefined {
        return this['alarm_subtype'];
    }
    public withAlarmSource(alarmSource: string): MetricAlarmTemplateSpec {
        this['alarm_source'] = alarmSource;
        return this;
    }
    public set alarmSource(alarmSource: string  | undefined) {
        this['alarm_source'] = alarmSource;
    }
    public get alarmSource(): string | undefined {
        return this['alarm_source'];
    }
    public withMonitorType(monitorType: string): MetricAlarmTemplateSpec {
        this['monitor_type'] = monitorType;
        return this;
    }
    public set monitorType(monitorType: string  | undefined) {
        this['monitor_type'] = monitorType;
    }
    public get monitorType(): string | undefined {
        return this['monitor_type'];
    }
    public withTriggerConditions(triggerConditions: Array<TemplateTriggerCondition>): MetricAlarmTemplateSpec {
        this['trigger_conditions'] = triggerConditions;
        return this;
    }
    public set triggerConditions(triggerConditions: Array<TemplateTriggerCondition>  | undefined) {
        this['trigger_conditions'] = triggerConditions;
    }
    public get triggerConditions(): Array<TemplateTriggerCondition> | undefined {
        return this['trigger_conditions'];
    }
    public withNoDataConditions(noDataConditions: Array<NoDataCondition>): MetricAlarmTemplateSpec {
        this['no_data_conditions'] = noDataConditions;
        return this;
    }
    public set noDataConditions(noDataConditions: Array<NoDataCondition>  | undefined) {
        this['no_data_conditions'] = noDataConditions;
    }
    public get noDataConditions(): Array<NoDataCondition> | undefined {
        return this['no_data_conditions'];
    }
    public withAlarmTags(alarmTags: Array<AlarmTags>): MetricAlarmTemplateSpec {
        this['alarm_tags'] = alarmTags;
        return this;
    }
    public set alarmTags(alarmTags: Array<AlarmTags>  | undefined) {
        this['alarm_tags'] = alarmTags;
    }
    public get alarmTags(): Array<AlarmTags> | undefined {
        return this['alarm_tags'];
    }
    public withRecoveryConditions(recoveryConditions: RecoveryCondition): MetricAlarmTemplateSpec {
        this['recovery_conditions'] = recoveryConditions;
        return this;
    }
    public set recoveryConditions(recoveryConditions: RecoveryCondition  | undefined) {
        this['recovery_conditions'] = recoveryConditions;
    }
    public get recoveryConditions(): RecoveryCondition | undefined {
        return this['recovery_conditions'];
    }
}