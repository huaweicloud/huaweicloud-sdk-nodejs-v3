import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DisassociateEndpointIpaddressResponse extends SdkResponse {
    public endpoint?: EndpointResp;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointResp): DisassociateEndpointIpaddressResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}