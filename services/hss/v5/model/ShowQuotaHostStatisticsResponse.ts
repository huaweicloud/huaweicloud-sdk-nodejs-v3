import { QuotaHostStatistics } from './QuotaHostStatistics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaHostStatisticsResponse extends SdkResponse {
    private 'host_total_num'?: number;
    private 'data_list'?: Array<QuotaHostStatistics>;
    public constructor() { 
        super();
    }
    public withHostTotalNum(hostTotalNum: number): ShowQuotaHostStatisticsResponse {
        this['host_total_num'] = hostTotalNum;
        return this;
    }
    public set hostTotalNum(hostTotalNum: number  | undefined) {
        this['host_total_num'] = hostTotalNum;
    }
    public get hostTotalNum(): number | undefined {
        return this['host_total_num'];
    }
    public withDataList(dataList: Array<QuotaHostStatistics>): ShowQuotaHostStatisticsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<QuotaHostStatistics>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<QuotaHostStatistics> | undefined {
        return this['data_list'];
    }
}