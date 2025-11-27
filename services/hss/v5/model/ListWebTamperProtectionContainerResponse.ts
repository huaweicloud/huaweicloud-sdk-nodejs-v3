import { WebTamperProtectionContainerResponseInfo } from './WebTamperProtectionContainerResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperProtectionContainerResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebTamperProtectionContainerResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebTamperProtectionContainerResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebTamperProtectionContainerResponseInfo>): ListWebTamperProtectionContainerResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebTamperProtectionContainerResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebTamperProtectionContainerResponseInfo> | undefined {
        return this['data_list'];
    }
}