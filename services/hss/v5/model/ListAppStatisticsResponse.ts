import { AppStatisticResponseInfo } from './AppStatisticResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppStatisticsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AppStatisticResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAppStatisticsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AppStatisticResponseInfo>): ListAppStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppStatisticResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppStatisticResponseInfo> | undefined {
        return this['data_list'];
    }
}