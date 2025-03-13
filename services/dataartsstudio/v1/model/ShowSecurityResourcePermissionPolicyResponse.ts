import { MemberPolicyItem } from './MemberPolicyItem';
import { ResourcePolicyItem } from './ResourcePolicyItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSecurityResourcePermissionPolicyResponse extends SdkResponse {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    public resources?: Array<ResourcePolicyItem>;
    public members?: Array<MemberPolicyItem>;
    private 'create_time'?: number;
    private 'create_user'?: string;
    private 'update_time'?: number;
    public constructor() { 
        super();
    }
    public withPolicyId(policyId: string): ShowSecurityResourcePermissionPolicyResponse {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ShowSecurityResourcePermissionPolicyResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withResources(resources: Array<ResourcePolicyItem>): ShowSecurityResourcePermissionPolicyResponse {
        this['resources'] = resources;
        return this;
    }
    public withMembers(members: Array<MemberPolicyItem>): ShowSecurityResourcePermissionPolicyResponse {
        this['members'] = members;
        return this;
    }
    public withCreateTime(createTime: number): ShowSecurityResourcePermissionPolicyResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withCreateUser(createUser: string): ShowSecurityResourcePermissionPolicyResponse {
        this['create_user'] = createUser;
        return this;
    }
    public set createUser(createUser: string  | undefined) {
        this['create_user'] = createUser;
    }
    public get createUser(): string | undefined {
        return this['create_user'];
    }
    public withUpdateTime(updateTime: number): ShowSecurityResourcePermissionPolicyResponse {
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