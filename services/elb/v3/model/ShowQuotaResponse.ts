import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotaResponse extends SdkResponse {
    private 'request_id'?: string;
    public quota?: Quota;
    public constructor() { 
        super();
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
    public withQuota(quota: Quota): ShowQuotaResponse {
        this['quota'] = quota;
        return this;
    }
}