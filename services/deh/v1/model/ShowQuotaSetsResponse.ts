import { RespQuotaSet } from './RespQuotaSet';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaSetsResponse extends SdkResponse {
    private 'quota_set'?: Array<RespQuotaSet>;
    public constructor() { 
        super();
    }
    public withQuotaSet(quotaSet: Array<RespQuotaSet>): ShowQuotaSetsResponse {
        this['quota_set'] = quotaSet;
        return this;
    }
    public set quotaSet(quotaSet: Array<RespQuotaSet>  | undefined) {
        this['quota_set'] = quotaSet;
    }
    public get quotaSet(): Array<RespQuotaSet> | undefined {
        return this['quota_set'];
    }
}