import { EventTypeDetailResponseInfo } from './EventTypeDetailResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEventTypeResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<EventTypeDetailResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListEventTypeResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<EventTypeDetailResponseInfo>): ListEventTypeResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<EventTypeDetailResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<EventTypeDetailResponseInfo> | undefined {
        return this['data_list'];
    }
}