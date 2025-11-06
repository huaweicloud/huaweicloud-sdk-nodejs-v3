import { EventAlarmTemplateSpec } from './EventAlarmTemplateSpec';
import { MetricAlarmTemplateSpec } from './MetricAlarmTemplateSpec';


export class AlarmTemplateSpecItem {
    private 'alarm_template_name'?: string;
    private 'alarm_template_name_en'?: string;
    public desc?: string;
    private 'desc_en'?: string;
    private 'alarm_template_spec_type'?: string;
    private 'metric_alarm_template_spec'?: MetricAlarmTemplateSpec;
    private 'event_alarm_template_spec'?: EventAlarmTemplateSpec;
    public constructor(alarmTemplateName?: string, alarmTemplateSpecType?: string) { 
        this['alarm_template_name'] = alarmTemplateName;
        this['alarm_template_spec_type'] = alarmTemplateSpecType;
    }
    public withAlarmTemplateName(alarmTemplateName: string): AlarmTemplateSpecItem {
        this['alarm_template_name'] = alarmTemplateName;
        return this;
    }
    public set alarmTemplateName(alarmTemplateName: string  | undefined) {
        this['alarm_template_name'] = alarmTemplateName;
    }
    public get alarmTemplateName(): string | undefined {
        return this['alarm_template_name'];
    }
    public withAlarmTemplateNameEn(alarmTemplateNameEn: string): AlarmTemplateSpecItem {
        this['alarm_template_name_en'] = alarmTemplateNameEn;
        return this;
    }
    public set alarmTemplateNameEn(alarmTemplateNameEn: string  | undefined) {
        this['alarm_template_name_en'] = alarmTemplateNameEn;
    }
    public get alarmTemplateNameEn(): string | undefined {
        return this['alarm_template_name_en'];
    }
    public withDesc(desc: string): AlarmTemplateSpecItem {
        this['desc'] = desc;
        return this;
    }
    public withDescEn(descEn: string): AlarmTemplateSpecItem {
        this['desc_en'] = descEn;
        return this;
    }
    public set descEn(descEn: string  | undefined) {
        this['desc_en'] = descEn;
    }
    public get descEn(): string | undefined {
        return this['desc_en'];
    }
    public withAlarmTemplateSpecType(alarmTemplateSpecType: string): AlarmTemplateSpecItem {
        this['alarm_template_spec_type'] = alarmTemplateSpecType;
        return this;
    }
    public set alarmTemplateSpecType(alarmTemplateSpecType: string  | undefined) {
        this['alarm_template_spec_type'] = alarmTemplateSpecType;
    }
    public get alarmTemplateSpecType(): string | undefined {
        return this['alarm_template_spec_type'];
    }
    public withMetricAlarmTemplateSpec(metricAlarmTemplateSpec: MetricAlarmTemplateSpec): AlarmTemplateSpecItem {
        this['metric_alarm_template_spec'] = metricAlarmTemplateSpec;
        return this;
    }
    public set metricAlarmTemplateSpec(metricAlarmTemplateSpec: MetricAlarmTemplateSpec  | undefined) {
        this['metric_alarm_template_spec'] = metricAlarmTemplateSpec;
    }
    public get metricAlarmTemplateSpec(): MetricAlarmTemplateSpec | undefined {
        return this['metric_alarm_template_spec'];
    }
    public withEventAlarmTemplateSpec(eventAlarmTemplateSpec: EventAlarmTemplateSpec): AlarmTemplateSpecItem {
        this['event_alarm_template_spec'] = eventAlarmTemplateSpec;
        return this;
    }
    public set eventAlarmTemplateSpec(eventAlarmTemplateSpec: EventAlarmTemplateSpec  | undefined) {
        this['event_alarm_template_spec'] = eventAlarmTemplateSpec;
    }
    public get eventAlarmTemplateSpec(): EventAlarmTemplateSpec | undefined {
        return this['event_alarm_template_spec'];
    }
}