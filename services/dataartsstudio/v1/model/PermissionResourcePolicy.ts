import { MemberPolicyItem } from './MemberPolicyItem';
import { ResourcePolicyItem } from './ResourcePolicyItem';


export class PermissionResourcePolicy {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public resources?: Array<ResourcePolicyItem>;
    public members?: Array<MemberPolicyItem>;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    public constructor(policyId?: string, policyName?: string, resources?: Array<ResourcePolicyItem>, members?: Array<MemberPolicyItem>) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['resources'] = resources;
        this['members'] = members;
    }
    public withPolicyId(policyId: string): PermissionResourcePolicy {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): PermissionResourcePolicy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withResources(resources: Array<ResourcePolicyItem>): PermissionResourcePolicy {
        this['resources'] = resources;
        return this;
    }
    public withMembers(members: Array<MemberPolicyItem>): PermissionResourcePolicy {
        this['members'] = members;
        return this;
    }
    public withCreateTime(createTime: number): PermissionResourcePolicy {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): PermissionResourcePolicy {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): PermissionResourcePolicy {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
}