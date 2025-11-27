import { WebTamperProtectionDirectoryResponseInfo } from './WebTamperProtectionDirectoryResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebTamperProtectionDirectoryResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebTamperProtectionDirectoryResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebTamperProtectionDirectoryResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebTamperProtectionDirectoryResponseInfo>): ListWebTamperProtectionDirectoryResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebTamperProtectionDirectoryResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebTamperProtectionDirectoryResponseInfo> | undefined {
        return this['data_list'];
    }
}