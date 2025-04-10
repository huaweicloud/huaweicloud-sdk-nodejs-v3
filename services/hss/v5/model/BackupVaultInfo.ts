

export class BackupVaultInfo {
    private 'vault_id'?: string;
    private 'vault_name'?: string;
    private 'vault_size'?: number;
    private 'vault_used'?: number;
    private 'vault_allocated'?: number;
    private 'vault_charging_mode'?: string;
    private 'vault_status'?: string;
    private 'backup_policy_id'?: string;
    private 'backup_policy_name'?: string;
    private 'backup_policy_enabled'?: boolean;
    private 'resources_num'?: number;
    public constructor() { 
    }
    public withVaultId(vaultId: string): BackupVaultInfo {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withVaultName(vaultName: string): BackupVaultInfo {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string  | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName(): string | undefined {
        return this['vault_name'];
    }
    public withVaultSize(vaultSize: number): BackupVaultInfo {
        this['vault_size'] = vaultSize;
        return this;
    }
    public set vaultSize(vaultSize: number  | undefined) {
        this['vault_size'] = vaultSize;
    }
    public get vaultSize(): number | undefined {
        return this['vault_size'];
    }
    public withVaultUsed(vaultUsed: number): BackupVaultInfo {
        this['vault_used'] = vaultUsed;
        return this;
    }
    public set vaultUsed(vaultUsed: number  | undefined) {
        this['vault_used'] = vaultUsed;
    }
    public get vaultUsed(): number | undefined {
        return this['vault_used'];
    }
    public withVaultAllocated(vaultAllocated: number): BackupVaultInfo {
        this['vault_allocated'] = vaultAllocated;
        return this;
    }
    public set vaultAllocated(vaultAllocated: number  | undefined) {
        this['vault_allocated'] = vaultAllocated;
    }
    public get vaultAllocated(): number | undefined {
        return this['vault_allocated'];
    }
    public withVaultChargingMode(vaultChargingMode: string): BackupVaultInfo {
        this['vault_charging_mode'] = vaultChargingMode;
        return this;
    }
    public set vaultChargingMode(vaultChargingMode: string  | undefined) {
        this['vault_charging_mode'] = vaultChargingMode;
    }
    public get vaultChargingMode(): string | undefined {
        return this['vault_charging_mode'];
    }
    public withVaultStatus(vaultStatus: string): BackupVaultInfo {
        this['vault_status'] = vaultStatus;
        return this;
    }
    public set vaultStatus(vaultStatus: string  | undefined) {
        this['vault_status'] = vaultStatus;
    }
    public get vaultStatus(): string | undefined {
        return this['vault_status'];
    }
    public withBackupPolicyId(backupPolicyId: string): BackupVaultInfo {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withBackupPolicyName(backupPolicyName: string): BackupVaultInfo {
        this['backup_policy_name'] = backupPolicyName;
        return this;
    }
    public set backupPolicyName(backupPolicyName: string  | undefined) {
        this['backup_policy_name'] = backupPolicyName;
    }
    public get backupPolicyName(): string | undefined {
        return this['backup_policy_name'];
    }
    public withBackupPolicyEnabled(backupPolicyEnabled: boolean): BackupVaultInfo {
        this['backup_policy_enabled'] = backupPolicyEnabled;
        return this;
    }
    public set backupPolicyEnabled(backupPolicyEnabled: boolean  | undefined) {
        this['backup_policy_enabled'] = backupPolicyEnabled;
    }
    public get backupPolicyEnabled(): boolean | undefined {
        return this['backup_policy_enabled'];
    }
    public withResourcesNum(resourcesNum: number): BackupVaultInfo {
        this['resources_num'] = resourcesNum;
        return this;
    }
    public set resourcesNum(resourcesNum: number  | undefined) {
        this['resources_num'] = resourcesNum;
    }
    public get resourcesNum(): number | undefined {
        return this['resources_num'];
    }
}