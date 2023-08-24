import { ProcessStatisticResponseInfo } from './ProcessStatisticResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProcessStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ProcessStatisticResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListProcessStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ProcessStatisticResponseInfo>): ListProcessStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProcessStatisticResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProcessStatisticResponseInfo> | undefined {
        return this['data_list'];
    }
}