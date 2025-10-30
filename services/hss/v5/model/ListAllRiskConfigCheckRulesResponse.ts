import { CheckRulesResponseInfo } from './CheckRulesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAllRiskConfigCheckRulesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'pass_num'?: number;
    private 'failed_num'?: number;
    private 'processed_num'?: number;
    private 'data_list'?: Array<CheckRulesResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAllRiskConfigCheckRulesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withPassNum(passNum: number): ListAllRiskConfigCheckRulesResponse {
        this['pass_num'] = passNum;
        return this;
    }
    public set passNum(passNum: number  | undefined) {
        this['pass_num'] = passNum;
    }
    public get passNum(): number | undefined {
        return this['pass_num'];
    }
    public withFailedNum(failedNum: number): ListAllRiskConfigCheckRulesResponse {
        this['failed_num'] = failedNum;
        return this;
    }
    public set failedNum(failedNum: number  | undefined) {
        this['failed_num'] = failedNum;
    }
    public get failedNum(): number | undefined {
        return this['failed_num'];
    }
    public withProcessedNum(processedNum: number): ListAllRiskConfigCheckRulesResponse {
        this['processed_num'] = processedNum;
        return this;
    }
    public set processedNum(processedNum: number  | undefined) {
        this['processed_num'] = processedNum;
    }
    public get processedNum(): number | undefined {
        return this['processed_num'];
    }
    public withDataList(dataList: Array<CheckRulesResponseInfo>): ListAllRiskConfigCheckRulesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CheckRulesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CheckRulesResponseInfo> | undefined {
        return this['data_list'];
    }
}