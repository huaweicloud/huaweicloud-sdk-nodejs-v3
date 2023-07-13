

export class BatchDeleteTopicReq {
    public topics?: Array<string>;
    public constructor() { 
    }
    public withTopics(topics: Array<string>): BatchDeleteTopicReq {
        this['topics'] = topics;
        return this;
    }
}