

export class BatchDeleteInstanceTopicRespTopics {
    public id?: string;
    public success?: boolean;
    public constructor() { 
    }
    public withId(id: string): BatchDeleteInstanceTopicRespTopics {
        this['id'] = id;
        return this;
    }
    public withSuccess(success: boolean): BatchDeleteInstanceTopicRespTopics {
        this['success'] = success;
        return this;
    }
}