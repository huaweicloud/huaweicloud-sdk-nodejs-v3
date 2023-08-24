import { PwdPolicyInfoResponseInfo } from './PwdPolicyInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPasswordComplexityResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PwdPolicyInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPasswordComplexityResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PwdPolicyInfoResponseInfo>): ListPasswordComplexityResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PwdPolicyInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PwdPolicyInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}