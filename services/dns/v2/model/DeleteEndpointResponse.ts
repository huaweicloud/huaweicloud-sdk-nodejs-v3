import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteEndpointResponse extends SdkResponse {
    public endpoint?: EndpointResp;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointResp): DeleteEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}