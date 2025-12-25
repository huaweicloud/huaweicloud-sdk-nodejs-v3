import { FrequencyUnit } from './FrequencyUnit';


export class AlertRuleSchedule {
    private 'delay_interval'?: number;
    private 'frequency_interval'?: number;
    private 'frequency_unit'?: FrequencyUnit;
    private 'overtime_interval'?: number;
    private 'period_interval'?: number;
    private 'period_unit'?: FrequencyUnit;
    public constructor() { 
    }
    public withDelayInterval(delayInterval: number): AlertRuleSchedule {
        this['delay_interval'] = delayInterval;
        return this;
    }
    public set delayInterval(delayInterval: number  | undefined) {
        this['delay_interval'] = delayInterval;
    }
    public get delayInterval(): number | undefined {
        return this['delay_interval'];
    }
    public withFrequencyInterval(frequencyInterval: number): AlertRuleSchedule {
        this['frequency_interval'] = frequencyInterval;
        return this;
    }
    public set frequencyInterval(frequencyInterval: number  | undefined) {
        this['frequency_interval'] = frequencyInterval;
    }
    public get frequencyInterval(): number | undefined {
        return this['frequency_interval'];
    }
    public withFrequencyUnit(frequencyUnit: FrequencyUnit): AlertRuleSchedule {
        this['frequency_unit'] = frequencyUnit;
        return this;
    }
    public set frequencyUnit(frequencyUnit: FrequencyUnit  | undefined) {
        this['frequency_unit'] = frequencyUnit;
    }
    public get frequencyUnit(): FrequencyUnit | undefined {
        return this['frequency_unit'];
    }
    public withOvertimeInterval(overtimeInterval: number): AlertRuleSchedule {
        this['overtime_interval'] = overtimeInterval;
        return this;
    }
    public set overtimeInterval(overtimeInterval: number  | undefined) {
        this['overtime_interval'] = overtimeInterval;
    }
    public get overtimeInterval(): number | undefined {
        return this['overtime_interval'];
    }
    public withPeriodInterval(periodInterval: number): AlertRuleSchedule {
        this['period_interval'] = periodInterval;
        return this;
    }
    public set periodInterval(periodInterval: number  | undefined) {
        this['period_interval'] = periodInterval;
    }
    public get periodInterval(): number | undefined {
        return this['period_interval'];
    }
    public withPeriodUnit(periodUnit: FrequencyUnit): AlertRuleSchedule {
        this['period_unit'] = periodUnit;
        return this;
    }
    public set periodUnit(periodUnit: FrequencyUnit  | undefined) {
        this['period_unit'] = periodUnit;
    }
    public get periodUnit(): FrequencyUnit | undefined {
        return this['period_unit'];
    }
}