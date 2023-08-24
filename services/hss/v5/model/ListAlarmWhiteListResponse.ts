import { AlarmWhiteListResponseInfo } from './AlarmWhiteListResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAlarmWhiteListResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'event_type_list'?: Array<number>;
    private 'data_list'?: Array<AlarmWhiteListResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAlarmWhiteListResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withEventTypeList(eventTypeList: Array<number>): ListAlarmWhiteListResponse {
        this['event_type_list'] = eventTypeList;
        return this;
    }
    public set eventTypeList(eventTypeList: Array<number>  | undefined) {
        this['event_type_list'] = eventTypeList;
    }
    public get eventTypeList(): Array<number> | undefined {
        return this['event_type_list'];
    }
    public withDataList(dataList: Array<AlarmWhiteListResponseInfo>): ListAlarmWhiteListResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AlarmWhiteListResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AlarmWhiteListResponseInfo> | undefined {
        return this['data_list'];
    }
}