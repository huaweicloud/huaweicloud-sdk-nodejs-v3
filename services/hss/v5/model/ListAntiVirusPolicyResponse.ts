import { AntiVirusPolicyResponseInfo } from './AntiVirusPolicyResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAntiVirusPolicyResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AntiVirusPolicyResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAntiVirusPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AntiVirusPolicyResponseInfo>): ListAntiVirusPolicyResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AntiVirusPolicyResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AntiVirusPolicyResponseInfo> | undefined {
        return this['data_list'];
    }
}