import { PolicyEntity } from './PolicyEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTopicAccessPolicyResponse extends SdkResponse {
    public name?: string;
    private 'topic_type'?: number | undefined;
    public policies?: Array<PolicyEntity>;
    public constructor() { 
        super();
    }
    public withName(name: string): ShowTopicAccessPolicyResponse {
        this['name'] = name;
        return this;
    }
    public withTopicType(topicType: number): ShowTopicAccessPolicyResponse {
        this['topic_type'] = topicType;
        return this;
    }
    public set topicType(topicType: number | undefined) {
        this['topic_type'] = topicType;
    }
    public get topicType() {
        return this['topic_type'];
    }
    public withPolicies(policies: Array<PolicyEntity>): ShowTopicAccessPolicyResponse {
        this['policies'] = policies;
        return this;
    }
}