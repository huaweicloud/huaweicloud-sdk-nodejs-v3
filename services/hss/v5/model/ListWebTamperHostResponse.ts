import { WebTamperHostResponseInfo } from './WebTamperHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperHostResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebTamperHostResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebTamperHostResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebTamperHostResponseInfo>): ListWebTamperHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebTamperHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebTamperHostResponseInfo> | undefined {
        return this['data_list'];
    }
}