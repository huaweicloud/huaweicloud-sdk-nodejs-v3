import { CicdConfigurationsResponseInfo } from './CicdConfigurationsResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCicdConfigurationsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<CicdConfigurationsResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCicdConfigurationsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<CicdConfigurationsResponseInfo>): ListCicdConfigurationsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CicdConfigurationsResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CicdConfigurationsResponseInfo> | undefined {
        return this['data_list'];
    }
}