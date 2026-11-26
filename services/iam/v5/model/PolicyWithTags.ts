import { PolicyType } from './PolicyType';
import { Tag } from './Tag';


export class PolicyWithTags {
    private 'policy_type'?: PolicyType;
    private 'policy_name'?: string;
    private 'policy_id'?: string;
    public urn?: string;
    public path?: string;
    private 'default_version_id'?: string;
    private 'attachment_count'?: number;
    public description?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public tags?: Array<Tag>;
    public constructor(policyType?: PolicyType, policyName?: string, policyId?: string, urn?: string, path?: string, defaultVersionId?: string, attachmentCount?: number, createdAt?: Date, updatedAt?: Date, tags?: Array<Tag>) { 
        this['policy_type'] = policyType;
        this['policy_name'] = policyName;
        this['policy_id'] = policyId;
        this['urn'] = urn;
        this['path'] = path;
        this['default_version_id'] = defaultVersionId;
        this['attachment_count'] = attachmentCount;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['tags'] = tags;
    }
    public withPolicyType(policyType: PolicyType): PolicyWithTags {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: PolicyType  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): PolicyType | undefined {
        return this['policy_type'];
    }
    public withPolicyName(policyName: string): PolicyWithTags {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): PolicyWithTags {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withUrn(urn: string): PolicyWithTags {
        this['urn'] = urn;
        return this;
    }
    public withPath(path: string): PolicyWithTags {
        this['path'] = path;
        return this;
    }
    public withDefaultVersionId(defaultVersionId: string): PolicyWithTags {
        this['default_version_id'] = defaultVersionId;
        return this;
    }
    public set defaultVersionId(defaultVersionId: string  | undefined) {
        this['default_version_id'] = defaultVersionId;
    }
    public get defaultVersionId(): string | undefined {
        return this['default_version_id'];
    }
    public withAttachmentCount(attachmentCount: number): PolicyWithTags {
        this['attachment_count'] = attachmentCount;
        return this;
    }
    public set attachmentCount(attachmentCount: number  | undefined) {
        this['attachment_count'] = attachmentCount;
    }
    public get attachmentCount(): number | undefined {
        return this['attachment_count'];
    }
    public withDescription(description: string): PolicyWithTags {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): PolicyWithTags {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): PolicyWithTags {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withTags(tags: Array<Tag>): PolicyWithTags {
        this['tags'] = tags;
        return this;
    }
}