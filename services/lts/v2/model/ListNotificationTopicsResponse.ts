import { Topics } from './Topics';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNotificationTopicsResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'topic_count'?: number;
    public topics?: Array<Topics>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListNotificationTopicsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTopicCount(topicCount: number): ListNotificationTopicsResponse {
        this['topic_count'] = topicCount;
        return this;
    }
    public set topicCount(topicCount: number  | undefined) {
        this['topic_count'] = topicCount;
    }
    public get topicCount(): number | undefined {
        return this['topic_count'];
    }
    public withTopics(topics: Array<Topics>): ListNotificationTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}