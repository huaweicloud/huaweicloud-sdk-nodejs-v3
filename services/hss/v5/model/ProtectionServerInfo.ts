import { ProtectionServerInfoBackupError } from './ProtectionServerInfoBackupError';


export class ProtectionServerInfo {
    private 'project_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'host_id'?: string;
    private 'agent_id'?: string;
    private 'host_name'?: string;
    private 'host_ip'?: string;
    private 'private_ip'?: string;
    private 'os_type'?: string;
    private 'os_name'?: string;
    private 'host_status'?: string;
    private 'ransom_protection_status'?: string;
    private 'ransom_protection_fail_reason'?: string;
    private 'failed_decoy_dir'?: string;
    private 'agent_version'?: string;
    private 'protect_status'?: string;
    private 'group_id'?: string;
    private 'group_name'?: string;
    private 'protect_policy_id'?: string;
    private 'protect_policy_name'?: string;
    private 'backup_error'?: ProtectionServerInfoBackupError;
    private 'backup_protection_status'?: string;
    private 'count_protect_event'?: number;
    private 'count_backuped'?: number;
    private 'agent_status'?: string;
    public version?: string;
    private 'host_source'?: string;
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
    public withProjectId(projectId: string): ProtectionServerInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ProtectionServerInfo {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withHostId(hostId: string): ProtectionServerInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentId(agentId: string): ProtectionServerInfo {
        this['agent_id'] = agentId;
        return this;
    }
    public set agentId(agentId: string  | undefined) {
        this['agent_id'] = agentId;
    }
    public get agentId(): string | undefined {
        return this['agent_id'];
    }
    public withHostName(hostName: string): ProtectionServerInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostIp(hostIp: string): ProtectionServerInfo {
        this['host_ip'] = hostIp;
        return this;
    }
    public set hostIp(hostIp: string  | undefined) {
        this['host_ip'] = hostIp;
    }
    public get hostIp(): string | undefined {
        return this['host_ip'];
    }
    public withPrivateIp(privateIp: string): ProtectionServerInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withOsType(osType: string): ProtectionServerInfo {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withOsName(osName: string): ProtectionServerInfo {
        this['os_name'] = osName;
        return this;
    }
    public set osName(osName: string  | undefined) {
        this['os_name'] = osName;
    }
    public get osName(): string | undefined {
        return this['os_name'];
    }
    public withHostStatus(hostStatus: string): ProtectionServerInfo {
        this['host_status'] = hostStatus;
        return this;
    }
    public set hostStatus(hostStatus: string  | undefined) {
        this['host_status'] = hostStatus;
    }
    public get hostStatus(): string | undefined {
        return this['host_status'];
    }
    public withRansomProtectionStatus(ransomProtectionStatus: string): ProtectionServerInfo {
        this['ransom_protection_status'] = ransomProtectionStatus;
        return this;
    }
    public set ransomProtectionStatus(ransomProtectionStatus: string  | undefined) {
        this['ransom_protection_status'] = ransomProtectionStatus;
    }
    public get ransomProtectionStatus(): string | undefined {
        return this['ransom_protection_status'];
    }
    public withRansomProtectionFailReason(ransomProtectionFailReason: string): ProtectionServerInfo {
        this['ransom_protection_fail_reason'] = ransomProtectionFailReason;
        return this;
    }
    public set ransomProtectionFailReason(ransomProtectionFailReason: string  | undefined) {
        this['ransom_protection_fail_reason'] = ransomProtectionFailReason;
    }
    public get ransomProtectionFailReason(): string | undefined {
        return this['ransom_protection_fail_reason'];
    }
    public withFailedDecoyDir(failedDecoyDir: string): ProtectionServerInfo {
        this['failed_decoy_dir'] = failedDecoyDir;
        return this;
    }
    public set failedDecoyDir(failedDecoyDir: string  | undefined) {
        this['failed_decoy_dir'] = failedDecoyDir;
    }
    public get failedDecoyDir(): string | undefined {
        return this['failed_decoy_dir'];
    }
    public withAgentVersion(agentVersion: string): ProtectionServerInfo {
        this['agent_version'] = agentVersion;
        return this;
    }
    public set agentVersion(agentVersion: string  | undefined) {
        this['agent_version'] = agentVersion;
    }
    public get agentVersion(): string | undefined {
        return this['agent_version'];
    }
    public withProtectStatus(protectStatus: string): ProtectionServerInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withGroupId(groupId: string): ProtectionServerInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withGroupName(groupName: string): ProtectionServerInfo {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withProtectPolicyId(protectPolicyId: string): ProtectionServerInfo {
        this['protect_policy_id'] = protectPolicyId;
        return this;
    }
    public set protectPolicyId(protectPolicyId: string  | undefined) {
        this['protect_policy_id'] = protectPolicyId;
    }
    public get protectPolicyId(): string | undefined {
        return this['protect_policy_id'];
    }
    public withProtectPolicyName(protectPolicyName: string): ProtectionServerInfo {
        this['protect_policy_name'] = protectPolicyName;
        return this;
    }
    public set protectPolicyName(protectPolicyName: string  | undefined) {
        this['protect_policy_name'] = protectPolicyName;
    }
    public get protectPolicyName(): string | undefined {
        return this['protect_policy_name'];
    }
    public withBackupError(backupError: ProtectionServerInfoBackupError): ProtectionServerInfo {
        this['backup_error'] = backupError;
        return this;
    }
    public set backupError(backupError: ProtectionServerInfoBackupError  | undefined) {
        this['backup_error'] = backupError;
    }
    public get backupError(): ProtectionServerInfoBackupError | undefined {
        return this['backup_error'];
    }
    public withBackupProtectionStatus(backupProtectionStatus: string): ProtectionServerInfo {
        this['backup_protection_status'] = backupProtectionStatus;
        return this;
    }
    public set backupProtectionStatus(backupProtectionStatus: string  | undefined) {
        this['backup_protection_status'] = backupProtectionStatus;
    }
    public get backupProtectionStatus(): string | undefined {
        return this['backup_protection_status'];
    }
    public withCountProtectEvent(countProtectEvent: number): ProtectionServerInfo {
        this['count_protect_event'] = countProtectEvent;
        return this;
    }
    public set countProtectEvent(countProtectEvent: number  | undefined) {
        this['count_protect_event'] = countProtectEvent;
    }
    public get countProtectEvent(): number | undefined {
        return this['count_protect_event'];
    }
    public withCountBackuped(countBackuped: number): ProtectionServerInfo {
        this['count_backuped'] = countBackuped;
        return this;
    }
    public set countBackuped(countBackuped: number  | undefined) {
        this['count_backuped'] = countBackuped;
    }
    public get countBackuped(): number | undefined {
        return this['count_backuped'];
    }
    public withAgentStatus(agentStatus: string): ProtectionServerInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withVersion(version: string): ProtectionServerInfo {
        this['version'] = version;
        return this;
    }
    public withHostSource(hostSource: string): ProtectionServerInfo {
        this['host_source'] = hostSource;
        return this;
    }
    public set hostSource(hostSource: string  | undefined) {
        this['host_source'] = hostSource;
    }
    public get hostSource(): string | undefined {
        return this['host_source'];
    }
    public withVaultId(vaultId: string): ProtectionServerInfo {
        this['vault_id'] = vaultId;
        return this;
    }
    public set vaultId(vaultId: string  | undefined) {
        this['vault_id'] = vaultId;
    }
    public get vaultId(): string | undefined {
        return this['vault_id'];
    }
    public withVaultName(vaultName: string): ProtectionServerInfo {
        this['vault_name'] = vaultName;
        return this;
    }
    public set vaultName(vaultName: string  | undefined) {
        this['vault_name'] = vaultName;
    }
    public get vaultName(): string | undefined {
        return this['vault_name'];
    }
    public withVaultSize(vaultSize: number): ProtectionServerInfo {
        this['vault_size'] = vaultSize;
        return this;
    }
    public set vaultSize(vaultSize: number  | undefined) {
        this['vault_size'] = vaultSize;
    }
    public get vaultSize(): number | undefined {
        return this['vault_size'];
    }
    public withVaultUsed(vaultUsed: number): ProtectionServerInfo {
        this['vault_used'] = vaultUsed;
        return this;
    }
    public set vaultUsed(vaultUsed: number  | undefined) {
        this['vault_used'] = vaultUsed;
    }
    public get vaultUsed(): number | undefined {
        return this['vault_used'];
    }
    public withVaultAllocated(vaultAllocated: number): ProtectionServerInfo {
        this['vault_allocated'] = vaultAllocated;
        return this;
    }
    public set vaultAllocated(vaultAllocated: number  | undefined) {
        this['vault_allocated'] = vaultAllocated;
    }
    public get vaultAllocated(): number | undefined {
        return this['vault_allocated'];
    }
    public withVaultChargingMode(vaultChargingMode: string): ProtectionServerInfo {
        this['vault_charging_mode'] = vaultChargingMode;
        return this;
    }
    public set vaultChargingMode(vaultChargingMode: string  | undefined) {
        this['vault_charging_mode'] = vaultChargingMode;
    }
    public get vaultChargingMode(): string | undefined {
        return this['vault_charging_mode'];
    }
    public withVaultStatus(vaultStatus: string): ProtectionServerInfo {
        this['vault_status'] = vaultStatus;
        return this;
    }
    public set vaultStatus(vaultStatus: string  | undefined) {
        this['vault_status'] = vaultStatus;
    }
    public get vaultStatus(): string | undefined {
        return this['vault_status'];
    }
    public withBackupPolicyId(backupPolicyId: string): ProtectionServerInfo {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withBackupPolicyName(backupPolicyName: string): ProtectionServerInfo {
        this['backup_policy_name'] = backupPolicyName;
        return this;
    }
    public set backupPolicyName(backupPolicyName: string  | undefined) {
        this['backup_policy_name'] = backupPolicyName;
    }
    public get backupPolicyName(): string | undefined {
        return this['backup_policy_name'];
    }
    public withBackupPolicyEnabled(backupPolicyEnabled: boolean): ProtectionServerInfo {
        this['backup_policy_enabled'] = backupPolicyEnabled;
        return this;
    }
    public set backupPolicyEnabled(backupPolicyEnabled: boolean  | undefined) {
        this['backup_policy_enabled'] = backupPolicyEnabled;
    }
    public get backupPolicyEnabled(): boolean | undefined {
        return this['backup_policy_enabled'];
    }
    public withResourcesNum(resourcesNum: number): ProtectionServerInfo {
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