import { QuotaStatisticsInfo } from './QuotaStatisticsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaStatisticsInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<QuotaStatisticsInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ShowQuotaStatisticsInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<QuotaStatisticsInfo>): ShowQuotaStatisticsInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<QuotaStatisticsInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<QuotaStatisticsInfo> | undefined {
        return this['data_list'];
    }
}