import { AlarmDataVO } from './AlarmDataVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmDataResponse extends SdkResponse {
    private 'alarm_data_list'?: Array<AlarmDataVO>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withAlarmDataList(alarmDataList: Array<AlarmDataVO>): ListAlarmDataResponse {
        this['alarm_data_list'] = alarmDataList;
        return this;
    }
    public set alarmDataList(alarmDataList: Array<AlarmDataVO>  | undefined) {
        this['alarm_data_list'] = alarmDataList;
    }
    public get alarmDataList(): Array<AlarmDataVO> | undefined {
        return this['alarm_data_list'];
    }
    public withTotalCount(totalCount: number): ListAlarmDataResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}