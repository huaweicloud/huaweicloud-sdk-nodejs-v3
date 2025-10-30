import { CheckRuleFixFailDetailInfo } from './CheckRuleFixFailDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowCheckRuleFixFailDetailResponse extends SdkResponse {
    private 'fail_detail_list'?: Array<CheckRuleFixFailDetailInfo>;
    public constructor() { 
        super();
    }
    public withFailDetailList(failDetailList: Array<CheckRuleFixFailDetailInfo>): ShowCheckRuleFixFailDetailResponse {
        this['fail_detail_list'] = failDetailList;
        return this;
    }
    public set failDetailList(failDetailList: Array<CheckRuleFixFailDetailInfo>  | undefined) {
        this['fail_detail_list'] = failDetailList;
    }
    public get failDetailList(): Array<CheckRuleFixFailDetailInfo> | undefined {
        return this['fail_detail_list'];
    }
}