

export class DeleteConsumerGroupOffsetsRequestBody {
    public topics?: Array<string>;
    public constructor() { 
    }
    public withTopics(topics: Array<string>): DeleteConsumerGroupOffsetsRequestBody {
        this['topics'] = topics;
        return this;
    }
}