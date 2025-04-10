import { FeatureRuleInfo } from './FeatureRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCheckFeatureRuleResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<FeatureRuleInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCheckFeatureRuleResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<FeatureRuleInfo>): ListCheckFeatureRuleResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<FeatureRuleInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<FeatureRuleInfo> | undefined {
        return this['data_list'];
    }
}