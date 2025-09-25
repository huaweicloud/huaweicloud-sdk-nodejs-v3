import { OperationSummaryInfo } from './OperationSummaryInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListMonthlyOperationReportsResponse extends SdkResponse {
    private 'data_list'?: Array<OperationSummaryInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<OperationSummaryInfo>): ListMonthlyOperationReportsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<OperationSummaryInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<OperationSummaryInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListMonthlyOperationReportsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}