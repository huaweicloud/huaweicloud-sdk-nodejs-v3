import { HostRiskResponseInfo } from './HostRiskResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostsRiskResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostRiskResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostsRiskResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostRiskResponseInfo>): ListHostsRiskResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostRiskResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostRiskResponseInfo> | undefined {
        return this['data_list'];
    }
}