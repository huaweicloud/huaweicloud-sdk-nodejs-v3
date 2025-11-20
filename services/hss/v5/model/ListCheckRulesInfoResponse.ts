import { ImageCheckRuleResponseInfo } from './ImageCheckRuleResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCheckRulesInfoResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageCheckRuleResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCheckRulesInfoResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageCheckRuleResponseInfo>): ListCheckRulesInfoResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageCheckRuleResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageCheckRuleResponseInfo> | undefined {
        return this['data_list'];
    }
}