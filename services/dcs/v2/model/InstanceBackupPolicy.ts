import { BackupPolicy } from './BackupPolicy';


export class InstanceBackupPolicy {
    private 'backup_policy_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    public policy?: BackupPolicy;
    private 'tenant_id'?: string;
    public constructor() { 
    }
    public withBackupPolicyId(backupPolicyId: string): InstanceBackupPolicy {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withCreatedAt(createdAt: string): InstanceBackupPolicy {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): InstanceBackupPolicy {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withPolicy(policy: BackupPolicy): InstanceBackupPolicy {
        this['policy'] = policy;
        return this;
    }
    public withTenantId(tenantId: string): InstanceBackupPolicy {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}