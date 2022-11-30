import { TopicAttribute } from './TopicAttribute';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicAttributesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    public attributes?: TopicAttribute;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTopicAttributesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withAttributes(attributes: TopicAttribute): ListTopicAttributesResponse {
        this['attributes'] = attributes;
        return this;
    }
}