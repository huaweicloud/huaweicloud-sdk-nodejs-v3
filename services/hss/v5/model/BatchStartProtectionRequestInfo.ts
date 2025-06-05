

export class BatchStartProtectionRequestInfo {
    private 'operating_system'?: string;
    private 'ransom_protection_status'?: string;
    private 'protection_policy_id'?: string;
    private 'backup_protection_status'?: string;
    private 'vault_id'?: string;
    private 'host_id_list'?: Array<string>;
    public constructor(operatingSystem?: string, ransomProtectionStatus?: string, backupProtectionStatus?: string, hostIdList?: Array<string>) { 
        this['operating_system'] = operatingSystem;
        this['ransom_protection_status'] = ransomProtectionStatus;
        this['backup_protection_status'] = backupProtectionStatus;
        this['host_id_list'] = hostIdList;
    }
    public withOperatingSystem(operatingSystem: string): BatchStartProtectionRequestInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withRansomProtectionStatus(ransomProtectionStatus: string): BatchStartProtectionRequestInfo {
        this['ransom_protection_status'] = ransomProtectionStatus;
        return this;
    }
    public set ransomProtectionStatus(ransomProtectionStatus: string  | undefined) {
        this['ransom_protection_status'] = ransomProtectionStatus;
    }
    public get ransomProtectionStatus(): string | undefined {
        return this['ransom_protection_status'];
    }
    public withProtectionPolicyId(protectionPolicyId: string): BatchStartProtectionRequestInfo {
        this['protection_policy_id'] = protectionPolicyId;
        return this;
    }
    public set protectionPolicyId(protectionPolicyId: string  | undefined) {
        this['protection_policy_id'] = protectionPolicyId;
    }
    public get protectionPolicyId(): string | undefined {
        return this['protection_policy_id'];
    }
    public withBackupProtectionStatus(backupProtectionStatus: string): BatchStartProtectionRequestInfo {
        this['backup_protection_status'] = backupProtectionStatus;
        return this;
    }
    public set backupProtectionStatus(backupProtectionStatus: string  | undefined) {
        this['backup_protection_status'] = backupProtectionStatus;
    }
    public get backupProtectionStatus(): string | undefined {
        return this['backup_protection_status'];
    }
    public withVaultId(vaultId: string): BatchStartProtectionRequestInfo {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withHostIdList(hostIdList: Array<string>): BatchStartProtectionRequestInfo {
        this['host_id_list'] = hostIdList;
        return this;
    }
    public set hostIdList(hostIdList: Array<string>  | undefined) {
        this['host_id_list'] = hostIdList;
    }
    public get hostIdList(): Array<string> | undefined {
        return this['host_id_list'];
    }
}