import { EndpointResp } from './EndpointResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateEndpointResponse extends SdkResponse {
    public endpoint?: EndpointResp;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointResp): UpdateEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}