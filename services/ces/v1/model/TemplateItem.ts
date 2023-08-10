import { AlarmTemplateCondition } from './AlarmTemplateCondition';


export class TemplateItem {
    private 'metric_name'?: string;
    public condition?: AlarmTemplateCondition;
    private 'alarm_level'?: number;
    public constructor(metricName?: string, condition?: AlarmTemplateCondition) { 
        this['metric_name'] = metricName;
        this['condition'] = condition;
    }
    public withMetricName(metricName: string): TemplateItem {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withCondition(condition: AlarmTemplateCondition): TemplateItem {
        this['condition'] = condition;
        return this;
    }
    public withAlarmLevel(alarmLevel: number): TemplateItem {
        this['alarm_level'] = alarmLevel;
        return this;
    }
    public set alarmLevel(alarmLevel: number  | undefined) {
        this['alarm_level'] = alarmLevel;
    }
    public get alarmLevel(): number | undefined {
        return this['alarm_level'];
    }
}