import { PolicyType } from './PolicyType';


export class Policy {
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
    public constructor(policyType?: PolicyType, policyName?: string, policyId?: string, urn?: string, path?: string, defaultVersionId?: string, attachmentCount?: number, createdAt?: Date, updatedAt?: Date) { 
        this['policy_type'] = policyType;
        this['policy_name'] = policyName;
        this['policy_id'] = policyId;
        this['urn'] = urn;
        this['path'] = path;
        this['default_version_id'] = defaultVersionId;
        this['attachment_count'] = attachmentCount;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withPolicyType(policyType: PolicyType): Policy {
        this['policy_type'] = policyType;
        return this;
    }
    public set policyType(policyType: PolicyType  | undefined) {
        this['policy_type'] = policyType;
    }
    public get policyType(): PolicyType | undefined {
        return this['policy_type'];
    }
    public withPolicyName(policyName: string): Policy {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withPolicyId(policyId: string): Policy {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withUrn(urn: string): Policy {
        this['urn'] = urn;
        return this;
    }
    public withPath(path: string): Policy {
        this['path'] = path;
        return this;
    }
    public withDefaultVersionId(defaultVersionId: string): Policy {
        this['default_version_id'] = defaultVersionId;
        return this;
    }
    public set defaultVersionId(defaultVersionId: string  | undefined) {
        this['default_version_id'] = defaultVersionId;
    }
    public get defaultVersionId(): string | undefined {
        return this['default_version_id'];
    }
    public withAttachmentCount(attachmentCount: number): Policy {
        this['attachment_count'] = attachmentCount;
        return this;
    }
    public set attachmentCount(attachmentCount: number  | undefined) {
        this['attachment_count'] = attachmentCount;
    }
    public get attachmentCount(): number | undefined {
        return this['attachment_count'];
    }
    public withDescription(description: string): Policy {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: Date): Policy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Policy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}