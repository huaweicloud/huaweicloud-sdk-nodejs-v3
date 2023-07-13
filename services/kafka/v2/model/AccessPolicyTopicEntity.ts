import { AccessPolicyEntity } from './AccessPolicyEntity';


export class AccessPolicyTopicEntity {
    public name: string;
    public policies: Array<AccessPolicyEntity>;
    public constructor(name?: any, policies?: any) { 
        this['name'] = name;
        this['policies'] = policies;
    }
    public withName(name: string): AccessPolicyTopicEntity {
        this['name'] = name;
        return this;
    }
    public withPolicies(policies: Array<AccessPolicyEntity>): AccessPolicyTopicEntity {
        this['policies'] = policies;
        return this;
    }
}