

export class DefaultTopicRequest {
    public id?: string;
    private 'project_id'?: string;
    public status?: number;
    private 'topic_urn'?: string;
    public constructor(id?: string, topicUrn?: string) { 
        this['id'] = id;
        this['topic_urn'] = topicUrn;
    }
    public withId(id: string): DefaultTopicRequest {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): DefaultTopicRequest {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withStatus(status: number): DefaultTopicRequest {
        this['status'] = status;
        return this;
    }
    public withTopicUrn(topicUrn: string): DefaultTopicRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
}