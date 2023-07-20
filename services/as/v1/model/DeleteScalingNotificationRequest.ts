

export class DeleteScalingNotificationRequest {
    private 'scaling_group_id'?: string;
    private 'topic_urn'?: string;
    public constructor(scalingGroupId?: string, topicUrn?: string) { 
        this['scaling_group_id'] = scalingGroupId;
        this['topic_urn'] = topicUrn;
    }
    public withScalingGroupId(scalingGroupId: string): DeleteScalingNotificationRequest {
        this['scaling_group_id'] = scalingGroupId;
        return this;
    }
    public set scalingGroupId(scalingGroupId: string  | undefined) {
        this['scaling_group_id'] = scalingGroupId;
    }
    public get scalingGroupId(): string | undefined {
        return this['scaling_group_id'];
    }
    public withTopicUrn(topicUrn: string): DeleteScalingNotificationRequest {
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