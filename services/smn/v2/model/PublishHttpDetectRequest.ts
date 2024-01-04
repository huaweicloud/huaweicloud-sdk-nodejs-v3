import { HttpDetectRequestBody } from './HttpDetectRequestBody';


export class PublishHttpDetectRequest {
    private 'topic_urn'?: string;
    public body?: HttpDetectRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): PublishHttpDetectRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: HttpDetectRequestBody): PublishHttpDetectRequest {
        this['body'] = body;
        return this;
    }
}