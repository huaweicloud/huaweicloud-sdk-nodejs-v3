import { WebTamperProtectionConfigResponseInfo } from './WebTamperProtectionConfigResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperProtectionConfigsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebTamperProtectionConfigResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebTamperProtectionConfigsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebTamperProtectionConfigResponseInfo>): ListWebTamperProtectionConfigsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebTamperProtectionConfigResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebTamperProtectionConfigResponseInfo> | undefined {
        return this['data_list'];
    }
}