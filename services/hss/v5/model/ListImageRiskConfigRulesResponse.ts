import { ImageRiskConfigsCheckRulesResponseInfo } from './ImageRiskConfigsCheckRulesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageRiskConfigRulesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ImageRiskConfigsCheckRulesResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListImageRiskConfigRulesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ImageRiskConfigsCheckRulesResponseInfo>): ListImageRiskConfigRulesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ImageRiskConfigsCheckRulesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ImageRiskConfigsCheckRulesResponseInfo> | undefined {
        return this['data_list'];
    }
}