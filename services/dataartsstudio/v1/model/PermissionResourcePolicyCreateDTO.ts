import { MemberPolicyItem } from './MemberPolicyItem';
import { ResourcePolicyItem } from './ResourcePolicyItem';


export class PermissionResourcePolicyCreateDTO {
    private 'policy_name'?: string;
    public resources?: Array<ResourcePolicyItem>;
    public members?: Array<MemberPolicyItem>;
    public constructor(policyName?: string, resources?: Array<ResourcePolicyItem>, members?: Array<MemberPolicyItem>) { 
        this['policy_name'] = policyName;
        this['resources'] = resources;
        this['members'] = members;
    }
    public withPolicyName(policyName: string): PermissionResourcePolicyCreateDTO {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withResources(resources: Array<ResourcePolicyItem>): PermissionResourcePolicyCreateDTO {
        this['resources'] = resources;
        return this;
    }
    public withMembers(members: Array<MemberPolicyItem>): PermissionResourcePolicyCreateDTO {
        this['members'] = members;
        return this;
    }
}