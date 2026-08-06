import { ListKeyPolicyResponseBodyPolicy } from './ListKeyPolicyResponseBodyPolicy';


export class ListKeyPolicyResponseBodyKeyspacePolicies {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'keyspace_id'?: string;
    public policy?: ListKeyPolicyResponseBodyPolicy;
    public description?: string;
    private 'created_by'?: string;
    private 'create_time'?: string;
    private 'last_modify_time'?: string;
    private 'last_access_time'?: string;
    public constructor(policyId?: string, policyName?: string, keyspaceId?: string, policy?: ListKeyPolicyResponseBodyPolicy, createdBy?: string, createTime?: string, lastModifyTime?: string, lastAccessTime?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['keyspace_id'] = keyspaceId;
        this['policy'] = policy;
        this['created_by'] = createdBy;
        this['create_time'] = createTime;
        this['last_modify_time'] = lastModifyTime;
        this['last_access_time'] = lastAccessTime;
    }
    public withPolicyId(policyId: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withKeyspaceId(keyspaceId: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['keyspace_id'] = keyspaceId;
        return this;
    }
    public set keyspaceId(keyspaceId: string  | undefined) {
        this['keyspace_id'] = keyspaceId;
    }
    public get keyspaceId(): string | undefined {
        return this['keyspace_id'];
    }
    public withPolicy(policy: ListKeyPolicyResponseBodyPolicy): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['policy'] = policy;
        return this;
    }
    public withDescription(description: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['description'] = description;
        return this;
    }
    public withCreatedBy(createdBy: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['created_by'] = createdBy;
        return this;
    }
    public set createdBy(createdBy: string  | undefined) {
        this['created_by'] = createdBy;
    }
    public get createdBy(): string | undefined {
        return this['created_by'];
    }
    public withCreateTime(createTime: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withLastModifyTime(lastModifyTime: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['last_modify_time'] = lastModifyTime;
        return this;
    }
    public set lastModifyTime(lastModifyTime: string  | undefined) {
        this['last_modify_time'] = lastModifyTime;
    }
    public get lastModifyTime(): string | undefined {
        return this['last_modify_time'];
    }
    public withLastAccessTime(lastAccessTime: string): ListKeyPolicyResponseBodyKeyspacePolicies {
        this['last_access_time'] = lastAccessTime;
        return this;
    }
    public set lastAccessTime(lastAccessTime: string  | undefined) {
        this['last_access_time'] = lastAccessTime;
    }
    public get lastAccessTime(): string | undefined {
        return this['last_access_time'];
    }
}