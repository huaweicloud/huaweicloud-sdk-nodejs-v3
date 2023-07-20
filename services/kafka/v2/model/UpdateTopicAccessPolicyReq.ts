import { AccessPolicyTopicEntity } from './AccessPolicyTopicEntity';


export class UpdateTopicAccessPolicyReq {
    public topics?: Array<AccessPolicyTopicEntity>;
    public constructor(topics?: Array<AccessPolicyTopicEntity>) { 
        this['topics'] = topics;
    }
    public withTopics(topics: Array<AccessPolicyTopicEntity>): UpdateTopicAccessPolicyReq {
        this['topics'] = topics;
        return this;
    }
}