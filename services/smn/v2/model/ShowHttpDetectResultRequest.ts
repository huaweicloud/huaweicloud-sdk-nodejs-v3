

export class ShowHttpDetectResultRequest {
    private 'topic_urn'?: string;
    private 'task_id'?: string;
    public constructor(topicUrn?: string, taskId?: string) { 
        this['topic_urn'] = topicUrn;
        this['task_id'] = taskId;
    }
    public withTopicUrn(topicUrn: string): ShowHttpDetectResultRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withTaskId(taskId: string): ShowHttpDetectResultRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}