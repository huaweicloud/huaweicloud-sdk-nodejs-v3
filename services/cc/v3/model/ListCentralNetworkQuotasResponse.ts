import { CentralNetworkQuota } from './CentralNetworkQuota';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkQuotasResponse extends SdkResponse {
    private 'request_id'?: string;
    public quotas?: Array<CentralNetworkQuota>;
    public constructor(requestId?: string, quotas?: Array<CentralNetworkQuota>) { 
        super();
        this['request_id'] = requestId;
        this['quotas'] = quotas;
    }
    public withRequestId(requestId: string): ListCentralNetworkQuotasResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withQuotas(quotas: Array<CentralNetworkQuota>): ListCentralNetworkQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}