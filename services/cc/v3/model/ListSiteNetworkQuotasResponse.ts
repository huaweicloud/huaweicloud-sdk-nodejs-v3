import { RequestId } from './RequestId';
import { SiteNetworkQuota } from './SiteNetworkQuota';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSiteNetworkQuotasResponse extends SdkResponse {
    private 'request_id'?: string;
    public quotas?: Array<SiteNetworkQuota>;
    public constructor(requestId?: string, quotas?: Array<SiteNetworkQuota>) { 
        super();
        this['request_id'] = requestId;
        this['quotas'] = quotas;
    }
    public withRequestId(requestId: string): ListSiteNetworkQuotasResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withQuotas(quotas: Array<SiteNetworkQuota>): ListSiteNetworkQuotasResponse {
        this['quotas'] = quotas;
        return this;
    }
}