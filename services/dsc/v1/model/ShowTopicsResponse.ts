import { TopicBean } from './TopicBean';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopicsResponse extends SdkResponse {
    private 'default_topic_urn'?: string;
    private 'topic_count'?: number;
    public topics?: Array<TopicBean>;
    public constructor() { 
        super();
    }
    public withDefaultTopicUrn(defaultTopicUrn: string): ShowTopicsResponse {
        this['default_topic_urn'] = defaultTopicUrn;
        return this;
    }
    public set defaultTopicUrn(defaultTopicUrn: string  | undefined) {
        this['default_topic_urn'] = defaultTopicUrn;
    }
    public get defaultTopicUrn(): string | undefined {
        return this['default_topic_urn'];
    }
    public withTopicCount(topicCount: number): ShowTopicsResponse {
        this['topic_count'] = topicCount;
        return this;
    }
    public set topicCount(topicCount: number  | undefined) {
        this['topic_count'] = topicCount;
    }
    public get topicCount(): number | undefined {
        return this['topic_count'];
    }
    public withTopics(topics: Array<TopicBean>): ShowTopicsResponse {
        this['topics'] = topics;
        return this;
    }
}