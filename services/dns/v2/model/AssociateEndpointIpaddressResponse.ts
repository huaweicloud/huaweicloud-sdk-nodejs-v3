import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateEndpointIpaddressResponse extends SdkResponse {
    public endpoint?: EndpointResp;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointResp): AssociateEndpointIpaddressResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}