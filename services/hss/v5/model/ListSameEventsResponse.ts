import { EventManagementResponseInfo } from './EventManagementResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSameEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<EventManagementResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSameEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<EventManagementResponseInfo>): ListSameEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<EventManagementResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<EventManagementResponseInfo> | undefined {
        return this['data_list'];
    }
}