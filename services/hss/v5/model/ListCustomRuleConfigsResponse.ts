import { ListCustomRuleConfigResponse } from './ListCustomRuleConfigResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCustomRuleConfigsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ListCustomRuleConfigResponse>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListCustomRuleConfigsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ListCustomRuleConfigResponse>): ListCustomRuleConfigsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ListCustomRuleConfigResponse>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ListCustomRuleConfigResponse> | undefined {
        return this['data_list'];
    }
}