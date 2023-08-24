import { PortStatisticResponseInfo } from './PortStatisticResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPortStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PortStatisticResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPortStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PortStatisticResponseInfo>): ListPortStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PortStatisticResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PortStatisticResponseInfo> | undefined {
        return this['data_list'];
    }
}