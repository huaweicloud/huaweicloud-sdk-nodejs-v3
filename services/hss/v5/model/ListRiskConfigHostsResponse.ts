import { SecurityCheckHostInfoResponseInfo } from './SecurityCheckHostInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRiskConfigHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityCheckHostInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRiskConfigHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityCheckHostInfoResponseInfo>): ListRiskConfigHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityCheckHostInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityCheckHostInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}