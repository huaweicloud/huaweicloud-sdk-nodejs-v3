import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointResponse extends SdkResponse {
    public endpoint?: EndpointResp;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointResp): CreateEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}