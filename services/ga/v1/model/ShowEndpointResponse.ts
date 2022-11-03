import { EndpointDetail } from './EndpointDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEndpointResponse extends SdkResponse {
    public endpoint?: EndpointDetail;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointDetail): ShowEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRequestId(requestId: string): ShowEndpointResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}