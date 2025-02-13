import { CronTriggerScheduler } from './CronTriggerScheduler';


export class ScalingTriggerMeta {
    public type?: string;
    public value?: string;
    private 'period_type'?: ScalingTriggerMetaPeriodTypeEnum | string;
    public schedulers?: Array<CronTriggerScheduler>;
    public constructor() { 
    }
    public withType(type: string): ScalingTriggerMeta {
        this['type'] = type;
        return this;
    }
    public withValue(value: string): ScalingTriggerMeta {
        this['value'] = value;
        return this;
    }
    public withPeriodType(periodType: ScalingTriggerMetaPeriodTypeEnum | string): ScalingTriggerMeta {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: ScalingTriggerMetaPeriodTypeEnum | string  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): ScalingTriggerMetaPeriodTypeEnum | string | undefined {
        return this['period_type'];
    }
    public withSchedulers(schedulers: Array<CronTriggerScheduler>): ScalingTriggerMeta {
        this['schedulers'] = schedulers;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ScalingTriggerMetaPeriodTypeEnum {
    DAY = 'day',
    WEEK = 'week',
    MONTH = 'month'
}
