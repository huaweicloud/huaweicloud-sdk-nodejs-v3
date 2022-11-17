
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateTopicResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'topic_urn'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateTopicResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withTopicUrn(topicUrn: string): CreateTopicResponse {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn() {
        return this['topic_urn'];
    }
}