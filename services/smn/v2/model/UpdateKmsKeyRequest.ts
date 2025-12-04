import { UpdateKmsKeyRequestBody } from './UpdateKmsKeyRequestBody';


export class UpdateKmsKeyRequest {
    private 'topic_urn'?: string;
    public id?: string;
    public body?: UpdateKmsKeyRequestBody;
    public constructor(topicUrn?: string, id?: string) { 
        this['topic_urn'] = topicUrn;
        this['id'] = id;
    }
    public withTopicUrn(topicUrn: string): UpdateKmsKeyRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withId(id: string): UpdateKmsKeyRequest {
        this['id'] = id;
        return this;
    }
    public withBody(body: UpdateKmsKeyRequestBody): UpdateKmsKeyRequest {
        this['body'] = body;
        return this;
    }
}