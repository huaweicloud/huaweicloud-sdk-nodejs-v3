import { MetricExtraInfo } from './MetricExtraInfo';
import { Period } from './Period';
import { SuppressDuration } from './SuppressDuration';


export class PoliciesInListResp {
    private 'alarm_policy_id'?: string;
    private 'metric_name'?: string;
    private 'extra_info'?: MetricExtraInfo;
    public period?: Period;
    public filter?: string;
    private 'comparison_operator'?: string;
    public value?: number;
    public unit?: string;
    public count?: number;
    public type?: string;
    private 'suppress_duration'?: SuppressDuration;
    private 'alarm_level'?: number;
    public constructor(alarmPolicyId?: string, metricName?: string, period?: Period, filter?: string, comparisonOperator?: string, value?: number, count?: number) { 
        this['alarm_policy_id'] = alarmPolicyId;
        this['metric_name'] = metricName;
        this['period'] = period;
        this['filter'] = filter;
        this['comparison_operator'] = comparisonOperator;
        this['value'] = value;
        this['count'] = count;
    }
    public withAlarmPolicyId(alarmPolicyId: string): PoliciesInListResp {
        this['alarm_policy_id'] = alarmPolicyId;
        return this;
    }
    public set alarmPolicyId(alarmPolicyId: string  | undefined) {
        this['alarm_policy_id'] = alarmPolicyId;
    }
    public get alarmPolicyId(): string | undefined {
        return this['alarm_policy_id'];
    }
    public withMetricName(metricName: string): PoliciesInListResp {
        this['metric_name'] = metricName;
        return this;
    }
    public set metricName(metricName: string  | undefined) {
        this['metric_name'] = metricName;
    }
    public get metricName(): string | undefined {
        return this['metric_name'];
    }
    public withExtraInfo(extraInfo: MetricExtraInfo): PoliciesInListResp {
        this['extra_info'] = extraInfo;
        return this;
    }
    public set extraInfo(extraInfo: MetricExtraInfo  | undefined) {
        this['extra_info'] = extraInfo;
    }
    public get extraInfo(): MetricExtraInfo | undefined {
        return this['extra_info'];
    }
    public withPeriod(period: Period): PoliciesInListResp {
        this['period'] = period;
        return this;
    }
    public withFilter(filter: string): PoliciesInListResp {
        this['filter'] = filter;
        return this;
    }
    public withComparisonOperator(comparisonOperator: string): PoliciesInListResp {
        this['comparison_operator'] = comparisonOperator;
        return this;
    }
    public set comparisonOperator(comparisonOperator: string  | undefined) {
        this['comparison_operator'] = comparisonOperator;
    }
    public get comparisonOperator(): string | undefined {
        return this['comparison_operator'];
    }
    public withValue(value: number): PoliciesInListResp {
        this['value'] = value;
        return this;
    }
    public withUnit(unit: string): PoliciesInListResp {
        this['unit'] = unit;
        return this;
    }
    public withCount(count: number): PoliciesInListResp {
        this['count'] = count;
        return this;
    }
    public withType(type: string): PoliciesInListResp {
        this['type'] = type;
        return this;
    }
    public withSuppressDuration(suppressDuration: SuppressDuration): PoliciesInListResp {
        this['suppress_duration'] = suppressDuration;
        return this;
    }
    public set suppressDuration(suppressDuration: SuppressDuration  | undefined) {
        this['suppress_duration'] = suppressDuration;
    }
    public get suppressDuration(): SuppressDuration | undefined {
        return this['suppress_duration'];
    }
    public withAlarmLevel(alarmLevel: number): PoliciesInListResp {
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