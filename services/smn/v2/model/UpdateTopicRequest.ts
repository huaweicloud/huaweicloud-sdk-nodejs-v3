import { UpdateTopicRequestBody } from './UpdateTopicRequestBody';


export class UpdateTopicRequest {
    private 'topic_urn'?: string;
    public body?: UpdateTopicRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): UpdateTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: UpdateTopicRequestBody): UpdateTopicRequest {
        this['body'] = body;
        return this;
    }
}