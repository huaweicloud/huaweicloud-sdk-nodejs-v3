import { WebTamperEventResponseInfo } from './WebTamperEventResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperEventResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebTamperEventResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebTamperEventResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebTamperEventResponseInfo>): ListWebTamperEventResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebTamperEventResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebTamperEventResponseInfo> | undefined {
        return this['data_list'];
    }
}