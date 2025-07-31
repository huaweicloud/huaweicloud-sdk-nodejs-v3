import { TimingRangeConfigInfo } from './TimingRangeConfigInfo';


export class ListTimingOffConfigInfoResponseInfo {
    private 'week_off_list'?: Array<number>;
    private 'timing_range_list'?: Array<TimingRangeConfigInfo>;
    private 'total_num'?: number;
    public constructor() { 
    }
    public withWeekOffList(weekOffList: Array<number>): ListTimingOffConfigInfoResponseInfo {
        this['week_off_list'] = weekOffList;
        return this;
    }
    public set weekOffList(weekOffList: Array<number>  | undefined) {
        this['week_off_list'] = weekOffList;
    }
    public get weekOffList(): Array<number> | undefined {
        return this['week_off_list'];
    }
    public withTimingRangeList(timingRangeList: Array<TimingRangeConfigInfo>): ListTimingOffConfigInfoResponseInfo {
        this['timing_range_list'] = timingRangeList;
        return this;
    }
    public set timingRangeList(timingRangeList: Array<TimingRangeConfigInfo>  | undefined) {
        this['timing_range_list'] = timingRangeList;
    }
    public get timingRangeList(): Array<TimingRangeConfigInfo> | undefined {
        return this['timing_range_list'];
    }
    public withTotalNum(totalNum: number): ListTimingOffConfigInfoResponseInfo {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}