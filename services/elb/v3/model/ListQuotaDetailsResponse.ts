import { QuotaInfo } from './QuotaInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListQuotaDetailsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public quotas?: Array<QuotaInfo>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListQuotaDetailsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withQuotas(quotas: Array<QuotaInfo>): ListQuotaDetailsResponse {
        this['quotas'] = quotas;
        return this;
    }
}