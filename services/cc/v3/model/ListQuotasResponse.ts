import { Quota } from './Quota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotasResponse extends SdkResponse {
    public quotas?: Array<Quota>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withQuotas(quotas: Array<Quota>): ListQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
    public withRequestId(requestId: string): ListQuotasResponse {
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