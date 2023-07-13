

export class BatchDeleteInstanceTopicReq {
    public topics?: Array<string>;
    public constructor() { 
    }
    public withTopics(topics: Array<string>): BatchDeleteInstanceTopicReq {
        this['topics'] = topics;
        return this;
    }
}