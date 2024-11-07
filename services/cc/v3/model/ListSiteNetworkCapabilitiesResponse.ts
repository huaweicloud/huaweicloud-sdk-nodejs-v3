import { RequestId } from './RequestId';
import { SiteNetworkCapabilityEntry } from './SiteNetworkCapabilityEntry';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSiteNetworkCapabilitiesResponse extends SdkResponse {
    private 'request_id'?: string;
    public capabilities?: Array<SiteNetworkCapabilityEntry>;
    public constructor(requestId?: string, capabilities?: Array<SiteNetworkCapabilityEntry>) { 
        super();
        this['request_id'] = requestId;
        this['capabilities'] = capabilities;
    }
    public withRequestId(requestId: string): ListSiteNetworkCapabilitiesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCapabilities(capabilities: Array<SiteNetworkCapabilityEntry>): ListSiteNetworkCapabilitiesResponse {
        this['capabilities'] = capabilities;
        return this;
    }
}