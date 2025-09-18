import { CloudConnectionCapabilityInfo } from './CloudConnectionCapabilityInfo';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCloudConnectionCapabilitiesResponse extends SdkResponse {
    private 'request_id'?: string;
    public capabilities?: Array<CloudConnectionCapabilityInfo>;
    public constructor(requestId?: string, capabilities?: Array<CloudConnectionCapabilityInfo>) { 
        super();
        this['request_id'] = requestId;
        this['capabilities'] = capabilities;
    }
    public withRequestId(requestId: string): ListCloudConnectionCapabilitiesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCapabilities(capabilities: Array<CloudConnectionCapabilityInfo>): ListCloudConnectionCapabilitiesResponse {
        this['capabilities'] = capabilities;
        return this;
    }
}