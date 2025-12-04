import { AddKmsKeyRequestBody } from './AddKmsKeyRequestBody';


export class CreateKmsKeyRequest {
    private 'topic_urn'?: string;
    public body?: AddKmsKeyRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): CreateKmsKeyRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: AddKmsKeyRequestBody): CreateKmsKeyRequest {
        this['body'] = body;
        return this;
    }
}