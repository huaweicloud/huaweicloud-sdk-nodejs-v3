import { SmnTopicInfo } from './SmnTopicInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSmnTopicsResponse extends SdkResponse {
    public success?: boolean;
    private 'request_id'?: string;
    private 'topic_count'?: number;
    public topics?: Array<SmnTopicInfo>;
    public constructor() { 
        super();
    }
    public withSuccess(success: boolean): ListSmnTopicsResponse {
        this['success'] = success;
        return this;
    }
    public withRequestId(requestId: string): ListSmnTopicsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTopicCount(topicCount: number): ListSmnTopicsResponse {
        this['topic_count'] = topicCount;
        return this;
    }
    public set topicCount(topicCount: number  | undefined) {
        this['topic_count'] = topicCount;
    }
    public get topicCount(): number | undefined {
        return this['topic_count'];
    }
    public withTopics(topics: Array<SmnTopicInfo>): ListSmnTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}