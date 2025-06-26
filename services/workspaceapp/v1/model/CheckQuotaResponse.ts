import { QuotaRemainderData } from './QuotaRemainderData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckQuotaResponse extends SdkResponse {
    private 'is_enough'?: boolean;
    private 'quota_remainder'?: Array<QuotaRemainderData>;
    public constructor() { 
        super();
    }
    public withIsEnough(isEnough: boolean): CheckQuotaResponse {
        this['is_enough'] = isEnough;
        return this;
    }
    public set isEnough(isEnough: boolean  | undefined) {
        this['is_enough'] = isEnough;
    }
    public get isEnough(): boolean | undefined {
        return this['is_enough'];
    }
    public withQuotaRemainder(quotaRemainder: Array<QuotaRemainderData>): CheckQuotaResponse {
        this['quota_remainder'] = quotaRemainder;
        return this;
    }
    public set quotaRemainder(quotaRemainder: Array<QuotaRemainderData>  | undefined) {
        this['quota_remainder'] = quotaRemainder;
    }
    public get quotaRemainder(): Array<QuotaRemainderData> | undefined {
        return this['quota_remainder'];
    }
}