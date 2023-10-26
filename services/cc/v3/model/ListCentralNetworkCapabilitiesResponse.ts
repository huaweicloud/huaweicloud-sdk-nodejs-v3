import { CentralNetworkCapability } from './CentralNetworkCapability';
import { RequestId } from './RequestId';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListCentralNetworkCapabilitiesResponse extends SdkResponse {
    private 'request_id'?: string;
    public capabilities?: Array<CentralNetworkCapability>;
    public constructor(requestId?: string, capabilities?: Array<CentralNetworkCapability>) { 
        super();
        this['request_id'] = requestId;
        this['capabilities'] = capabilities;
    }
    public withRequestId(requestId: string): ListCentralNetworkCapabilitiesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withCapabilities(capabilities: Array<CentralNetworkCapability>): ListCentralNetworkCapabilitiesResponse {
        this['capabilities'] = capabilities;
        return this;
    }
}