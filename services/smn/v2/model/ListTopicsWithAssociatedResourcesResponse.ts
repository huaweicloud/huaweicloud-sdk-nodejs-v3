import { ListTopicsWithAssociatedResourcesItem } from './ListTopicsWithAssociatedResourcesItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTopicsWithAssociatedResourcesResponse extends SdkResponse {
    private 'request_id'?: string;
    private 'topic_count'?: number;
    public topics?: Array<ListTopicsWithAssociatedResourcesItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListTopicsWithAssociatedResourcesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withTopicCount(topicCount: number): ListTopicsWithAssociatedResourcesResponse {
        this['topic_count'] = topicCount;
        return this;
    }
    public set topicCount(topicCount: number  | undefined) {
        this['topic_count'] = topicCount;
    }
    public get topicCount(): number | undefined {
        return this['topic_count'];
    }
    public withTopics(topics: Array<ListTopicsWithAssociatedResourcesItem>): ListTopicsWithAssociatedResourcesResponse {
        this['topics'] = topics;
        return this;
    }
}