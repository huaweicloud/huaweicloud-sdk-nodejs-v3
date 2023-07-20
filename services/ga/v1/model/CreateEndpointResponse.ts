import { EndpointDetail } from './EndpointDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateEndpointResponse extends SdkResponse {
    public endpoint?: EndpointDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withEndpoint(endpoint: EndpointDetail): CreateEndpointResponse {
        this['endpoint'] = endpoint;
        return this;
    }
    public withRequestId(requestId: string): CreateEndpointResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}