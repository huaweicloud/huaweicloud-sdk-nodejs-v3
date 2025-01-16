

export class DeleteNotifyPolicyRequest {
    private 'topic_urn'?: string;
    private 'notify_policy_id'?: string;
    public constructor(topicUrn?: string, notifyPolicyId?: string) { 
        this['topic_urn'] = topicUrn;
        this['notify_policy_id'] = notifyPolicyId;
    }
    public withTopicUrn(topicUrn: string): DeleteNotifyPolicyRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withNotifyPolicyId(notifyPolicyId: string): DeleteNotifyPolicyRequest {
        this['notify_policy_id'] = notifyPolicyId;
        return this;
    }
    public set notifyPolicyId(notifyPolicyId: string  | undefined) {
        this['notify_policy_id'] = notifyPolicyId;
    }
    public get notifyPolicyId(): string | undefined {
        return this['notify_policy_id'];
    }
}