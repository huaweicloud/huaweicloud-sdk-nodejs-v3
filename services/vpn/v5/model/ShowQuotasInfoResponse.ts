import { Quotas } from './Quotas';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowQuotasInfoResponse extends SdkResponse {
    public quotas?: Quotas;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Quotas): ShowQuotasInfoResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withRequestId(requestId: string): ShowQuotasInfoResponse {
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