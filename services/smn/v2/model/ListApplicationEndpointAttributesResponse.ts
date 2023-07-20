import { ListApplicationEndpointAttributesResponseBodyAttributes } from './ListApplicationEndpointAttributesResponseBodyAttributes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationEndpointAttributesResponse extends SdkResponse {
    private 'request_id'?: string;
    public attributes?: ListApplicationEndpointAttributesResponseBodyAttributes;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListApplicationEndpointAttributesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withAttributes(attributes: ListApplicationEndpointAttributesResponseBodyAttributes): ListApplicationEndpointAttributesResponse {
        this['attributes'] = attributes;
        return this;
    }
}