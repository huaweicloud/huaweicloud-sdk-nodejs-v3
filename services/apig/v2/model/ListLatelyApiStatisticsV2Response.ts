import { StatisticsAPI } from './StatisticsAPI';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListLatelyApiStatisticsV2Response extends SdkResponse {
    public code?: string;
    public msg?: string;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public list?: Array<StatisticsAPI>;
    public constructor() { 
        super();
    }
    public withCode(code: string): ListLatelyApiStatisticsV2Response {
        this['code'] = code;
        return this;
    }
    public withMsg(msg: string): ListLatelyApiStatisticsV2Response {
        this['msg'] = msg;
        return this;
    }
    public withStartTime(startTime: number): ListLatelyApiStatisticsV2Response {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListLatelyApiStatisticsV2Response {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
    public withList(list: Array<StatisticsAPI>): ListLatelyApiStatisticsV2Response {
        this['list'] = list;
        return this;
    }
}