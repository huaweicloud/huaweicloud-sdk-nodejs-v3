import { TimingRangeConfigRequestInfo } from './TimingRangeConfigRequestInfo';


export class WebTamperTimingOffConfigInfoRequestInfo {
    private 'week_off_list'?: Array<number>;
    private 'timing_range_list'?: Array<TimingRangeConfigRequestInfo>;
    public constructor() { 
    }
    public withWeekOffList(weekOffList: Array<number>): WebTamperTimingOffConfigInfoRequestInfo {
        this['week_off_list'] = weekOffList;
        return this;
    }
    public set weekOffList(weekOffList: Array<number>  | undefined) {
        this['week_off_list'] = weekOffList;
    }
    public get weekOffList(): Array<number> | undefined {
        return this['week_off_list'];
    }
    public withTimingRangeList(timingRangeList: Array<TimingRangeConfigRequestInfo>): WebTamperTimingOffConfigInfoRequestInfo {
        this['timing_range_list'] = timingRangeList;
        return this;
    }
    public set timingRangeList(timingRangeList: Array<TimingRangeConfigRequestInfo>  | undefined) {
        this['timing_range_list'] = timingRangeList;
    }
    public get timingRangeList(): Array<TimingRangeConfigRequestInfo> | undefined {
        return this['timing_range_list'];
    }
}