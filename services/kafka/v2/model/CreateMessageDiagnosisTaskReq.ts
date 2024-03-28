

export class CreateMessageDiagnosisTaskReq {
    private 'group_name'?: string;
    private 'topic_name'?: string;
    public constructor(groupName?: string, topicName?: string) { 
        this['group_name'] = groupName;
        this['topic_name'] = topicName;
    }
    public withGroupName(groupName: string): CreateMessageDiagnosisTaskReq {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withTopicName(topicName: string): CreateMessageDiagnosisTaskReq {
        this['topic_name'] = topicName;
        return this;
    }
    public set topicName(topicName: string  | undefined) {
        this['topic_name'] = topicName;
    }
    public get topicName(): string | undefined {
        return this['topic_name'];
    }
}