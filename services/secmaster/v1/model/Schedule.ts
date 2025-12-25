

export class Schedule {
    private 'delay_interval'?: number;
    private 'frequency_interval'?: number;
    private 'frequency_unit'?: ScheduleFrequencyUnitEnum | string;
    private 'overtime_interval'?: number;
    private 'period_interval'?: number;
    private 'period_unit'?: SchedulePeriodUnitEnum | string;
    public constructor(frequencyInterval?: number, frequencyUnit?: string, periodInterval?: number, periodUnit?: string) { 
        this['frequency_interval'] = frequencyInterval;
        this['frequency_unit'] = frequencyUnit;
        this['period_interval'] = periodInterval;
        this['period_unit'] = periodUnit;
    }
    public withDelayInterval(delayInterval: number): Schedule {
        this['delay_interval'] = delayInterval;
        return this;
    }
    public set delayInterval(delayInterval: number  | undefined) {
        this['delay_interval'] = delayInterval;
    }
    public get delayInterval(): number | undefined {
        return this['delay_interval'];
    }
    public withFrequencyInterval(frequencyInterval: number): Schedule {
        this['frequency_interval'] = frequencyInterval;
        return this;
    }
    public set frequencyInterval(frequencyInterval: number  | undefined) {
        this['frequency_interval'] = frequencyInterval;
    }
    public get frequencyInterval(): number | undefined {
        return this['frequency_interval'];
    }
    public withFrequencyUnit(frequencyUnit: ScheduleFrequencyUnitEnum | string): Schedule {
        this['frequency_unit'] = frequencyUnit;
        return this;
    }
    public set frequencyUnit(frequencyUnit: ScheduleFrequencyUnitEnum | string  | undefined) {
        this['frequency_unit'] = frequencyUnit;
    }
    public get frequencyUnit(): ScheduleFrequencyUnitEnum | string | undefined {
        return this['frequency_unit'];
    }
    public withOvertimeInterval(overtimeInterval: number): Schedule {
        this['overtime_interval'] = overtimeInterval;
        return this;
    }
    public set overtimeInterval(overtimeInterval: number  | undefined) {
        this['overtime_interval'] = overtimeInterval;
    }
    public get overtimeInterval(): number | undefined {
        return this['overtime_interval'];
    }
    public withPeriodInterval(periodInterval: number): Schedule {
        this['period_interval'] = periodInterval;
        return this;
    }
    public set periodInterval(periodInterval: number  | undefined) {
        this['period_interval'] = periodInterval;
    }
    public get periodInterval(): number | undefined {
        return this['period_interval'];
    }
    public withPeriodUnit(periodUnit: SchedulePeriodUnitEnum | string): Schedule {
        this['period_unit'] = periodUnit;
        return this;
    }
    public set periodUnit(periodUnit: SchedulePeriodUnitEnum | string  | undefined) {
        this['period_unit'] = periodUnit;
    }
    public get periodUnit(): SchedulePeriodUnitEnum | string | undefined {
        return this['period_unit'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScheduleFrequencyUnitEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
/**
    * @export
    * @enum {string}
    */
export enum SchedulePeriodUnitEnum {
    MINUTE = 'MINUTE',
    HOUR = 'HOUR',
    DAY = 'DAY'
}
