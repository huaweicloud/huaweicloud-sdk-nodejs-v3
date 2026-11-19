import { HistoryPeriodInfo } from './HistoryPeriodInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryPeriodResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HistoryPeriodInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHistoryPeriodResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HistoryPeriodInfo>): ListHistoryPeriodResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HistoryPeriodInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HistoryPeriodInfo> | undefined {
        return this['data_list'];
    }
}