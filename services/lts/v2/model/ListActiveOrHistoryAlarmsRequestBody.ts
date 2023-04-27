import { Sort } from './Sort';


export class ListActiveOrHistoryAlarmsRequestBody {
    public step?: number;
    private 'whether_custom_field': boolean | undefined;
    private 'start_time'?: number | undefined;
    private 'end_time'?: number | undefined;
    private 'time_range'?: string | undefined;
    public search?: string;
    private 'alarm_level_ids'?: Array<string> | undefined;
    public sort?: Sort;
    public constructor(whetherCustomField?: any) { 
        this['whether_custom_field'] = whetherCustomField;
    }
    public withStep(step: number): ListActiveOrHistoryAlarmsRequestBody {
        this['step'] = step;
        return this;
    }
    public withWhetherCustomField(whetherCustomField: boolean): ListActiveOrHistoryAlarmsRequestBody {
        this['whether_custom_field'] = whetherCustomField;
        return this;
    }
    public set whetherCustomField(whetherCustomField: boolean | undefined) {
        this['whether_custom_field'] = whetherCustomField;
    }
    public get whetherCustomField() {
        return this['whether_custom_field'];
    }
    public withStartTime(startTime: number): ListActiveOrHistoryAlarmsRequestBody {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime() {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListActiveOrHistoryAlarmsRequestBody {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime() {
        return this['end_time'];
    }
    public withTimeRange(timeRange: string): ListActiveOrHistoryAlarmsRequestBody {
        this['time_range'] = timeRange;
        return this;
    }
    public set timeRange(timeRange: string | undefined) {
        this['time_range'] = timeRange;
    }
    public get timeRange() {
        return this['time_range'];
    }
    public withSearch(search: string): ListActiveOrHistoryAlarmsRequestBody {
        this['search'] = search;
        return this;
    }
    public withAlarmLevelIds(alarmLevelIds: Array<string>): ListActiveOrHistoryAlarmsRequestBody {
        this['alarm_level_ids'] = alarmLevelIds;
        return this;
    }
    public set alarmLevelIds(alarmLevelIds: Array<string> | undefined) {
        this['alarm_level_ids'] = alarmLevelIds;
    }
    public get alarmLevelIds() {
        return this['alarm_level_ids'];
    }
    public withSort(sort: Sort): ListActiveOrHistoryAlarmsRequestBody {
        this['sort'] = sort;
        return this;
    }
}