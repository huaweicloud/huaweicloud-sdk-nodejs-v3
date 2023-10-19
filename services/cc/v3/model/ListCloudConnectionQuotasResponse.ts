import { CloudConnectionQuota } from './CloudConnectionQuota';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudConnectionQuotasResponse extends SdkResponse {
    private 'request_id'?: string;
    public quotas?: Array<CloudConnectionQuota>;
    public constructor(requestId?: string, quotas?: Array<CloudConnectionQuota>) { 
        super();
        this['request_id'] = requestId;
        this['quotas'] = quotas;
    }
    public withRequestId(requestId: string): ListCloudConnectionQuotasResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withQuotas(quotas: Array<CloudConnectionQuota>): ListCloudConnectionQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}