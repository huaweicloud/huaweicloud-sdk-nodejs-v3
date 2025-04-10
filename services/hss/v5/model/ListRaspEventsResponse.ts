import { RaspProtectHistoryResponseInfo } from './RaspProtectHistoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRaspEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<RaspProtectHistoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRaspEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<RaspProtectHistoryResponseInfo>): ListRaspEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<RaspProtectHistoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<RaspProtectHistoryResponseInfo> | undefined {
        return this['data_list'];
    }
}