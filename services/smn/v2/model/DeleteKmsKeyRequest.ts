

export class DeleteKmsKeyRequest {
    private 'topic_urn'?: string;
    public id?: string;
    public constructor(topicUrn?: string, id?: string) { 
        this['topic_urn'] = topicUrn;
        this['id'] = id;
    }
    public withTopicUrn(topicUrn: string): DeleteKmsKeyRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withId(id: string): DeleteKmsKeyRequest {
        this['id'] = id;
        return this;
    }
}