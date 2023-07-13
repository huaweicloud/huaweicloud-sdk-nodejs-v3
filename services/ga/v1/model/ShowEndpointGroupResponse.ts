import { EndpointGroupDetail } from './EndpointGroupDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowEndpointGroupResponse extends SdkResponse {
    private 'endpoint_group'?: EndpointGroupDetail | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withEndpointGroup(endpointGroup: EndpointGroupDetail): ShowEndpointGroupResponse {
        this['endpoint_group'] = endpointGroup;
        return this;
    }
    public set endpointGroup(endpointGroup: EndpointGroupDetail | undefined) {
        this['endpoint_group'] = endpointGroup;
    }
    public get endpointGroup() {
        return this['endpoint_group'];
    }
    public withRequestId(requestId: string): ShowEndpointGroupResponse {
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