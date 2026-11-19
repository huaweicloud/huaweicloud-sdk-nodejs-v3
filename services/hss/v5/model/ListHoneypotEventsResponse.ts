import { HoneypotEventResponseInfo } from './HoneypotEventResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHoneypotEventsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HoneypotEventResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHoneypotEventsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HoneypotEventResponseInfo>): ListHoneypotEventsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HoneypotEventResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HoneypotEventResponseInfo> | undefined {
        return this['data_list'];
    }
}