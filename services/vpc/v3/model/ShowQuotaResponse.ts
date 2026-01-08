import { VpcQuotas } from './VpcQuotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    public quota?: VpcQuotas;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withQuota(quota: VpcQuotas): ShowQuotaResponse {
        this['quota'] = quota;
        return this;
    }
    public withRequestId(requestId: string): ShowQuotaResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}