import { WebAppAndServiceStatisticResponseInfo } from './WebAppAndServiceStatisticResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWebAppAndServiceStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<WebAppAndServiceStatisticResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListWebAppAndServiceStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<WebAppAndServiceStatisticResponseInfo>): ListWebAppAndServiceStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<WebAppAndServiceStatisticResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<WebAppAndServiceStatisticResponseInfo> | undefined {
        return this['data_list'];
    }
}