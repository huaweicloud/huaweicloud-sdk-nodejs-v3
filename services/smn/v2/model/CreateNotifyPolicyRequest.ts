import { NotifyPolicyRequestBody } from './NotifyPolicyRequestBody';


export class CreateNotifyPolicyRequest {
    private 'topic_urn'?: string;
    public body?: NotifyPolicyRequestBody;
    public constructor(topicUrn?: string) { 
        this['topic_urn'] = topicUrn;
    }
    public withTopicUrn(topicUrn: string): CreateNotifyPolicyRequest {
        this['topic_urn'] = topicUrn;
        return this;
    }
    public set topicUrn(topicUrn: string  | undefined) {
        this['topic_urn'] = topicUrn;
    }
    public get topicUrn(): string | undefined {
        return this['topic_urn'];
    }
    public withBody(body: NotifyPolicyRequestBody): CreateNotifyPolicyRequest {
        this['body'] = body;
        return this;
    }
}