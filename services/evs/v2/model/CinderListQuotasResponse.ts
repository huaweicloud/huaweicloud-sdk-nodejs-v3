import { QuotaList } from './QuotaList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CinderListQuotasResponse extends SdkResponse {
    private 'quota_set'?: QuotaList | undefined;
    public constructor() { 
        super();
    }
    public withQuotaSet(quotaSet: QuotaList): CinderListQuotasResponse {
        this['quota_set'] = quotaSet;
        return this;
    }
    public set quotaSet(quotaSet: QuotaList | undefined) {
        this['quota_set'] = quotaSet;
    }
    public get quotaSet() {
        return this['quota_set'];
    }
}