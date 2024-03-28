

export class ShowDiagnosisPreCheckRequest {
    private 'instance_id'?: string;
    public group?: string;
    public topic?: string;
    public constructor(instanceId?: string, group?: string, topic?: string) { 
        this['instance_id'] = instanceId;
        this['group'] = group;
        this['topic'] = topic;
    }
    public withInstanceId(instanceId: string): ShowDiagnosisPreCheckRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withGroup(group: string): ShowDiagnosisPreCheckRequest {
        this['group'] = group;
        return this;
    }
    public withTopic(topic: string): ShowDiagnosisPreCheckRequest {
        this['topic'] = topic;
        return this;
    }
}