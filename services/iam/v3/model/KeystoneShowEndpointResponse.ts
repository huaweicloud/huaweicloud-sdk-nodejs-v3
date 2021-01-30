import { Endpoint } from './Endpoint';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class KeystoneShowEndpointResponse extends SdkResponse {
    public endpoint?: Endpoint;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: Endpoint): KeystoneShowEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
}