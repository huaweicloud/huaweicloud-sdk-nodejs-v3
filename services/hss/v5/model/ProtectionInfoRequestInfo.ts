import { BackupResources } from './BackupResources';
import { ProtectionProxyInfoRequestInfo } from './ProtectionProxyInfoRequestInfo';
import { UpdateBackupPolicyRequestInfo1 } from './UpdateBackupPolicyRequestInfo1';


export class ProtectionInfoRequestInfo {
    private 'operating_system'?: string;
    private 'ransom_protection_status'?: string;
    private 'protection_policy_id'?: string;
    private 'create_protection_policy'?: ProtectionProxyInfoRequestInfo;
    private 'backup_protection_status'?: string;
    private 'backup_resources'?: BackupResources;
    private 'backup_policy_id'?: string;
    private 'backup_cycle'?: UpdateBackupPolicyRequestInfo1;
    private 'agent_id_list'?: Array<string>;
    private 'host_id_list'?: Array<string>;
    public constructor(operatingSystem?: string, ransomProtectionStatus?: string, backupProtectionStatus?: string, agentIdList?: Array<string>, hostIdList?: Array<string>) { 
        this['operating_system'] = operatingSystem;
        this['ransom_protection_status'] = ransomProtectionStatus;
        this['backup_protection_status'] = backupProtectionStatus;
        this['agent_id_list'] = agentIdList;
        this['host_id_list'] = hostIdList;
    }
    public withOperatingSystem(operatingSystem: string): ProtectionInfoRequestInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withRansomProtectionStatus(ransomProtectionStatus: string): ProtectionInfoRequestInfo {
        this['ransom_protection_status'] = ransomProtectionStatus;
        return this;
    }
    public set ransomProtectionStatus(ransomProtectionStatus: string  | undefined) {
        this['ransom_protection_status'] = ransomProtectionStatus;
    }
    public get ransomProtectionStatus(): string | undefined {
        return this['ransom_protection_status'];
    }
    public withProtectionPolicyId(protectionPolicyId: string): ProtectionInfoRequestInfo {
        this['protection_policy_id'] = protectionPolicyId;
        return this;
    }
    public set protectionPolicyId(protectionPolicyId: string  | undefined) {
        this['protection_policy_id'] = protectionPolicyId;
    }
    public get protectionPolicyId(): string | undefined {
        return this['protection_policy_id'];
    }
    public withCreateProtectionPolicy(createProtectionPolicy: ProtectionProxyInfoRequestInfo): ProtectionInfoRequestInfo {
        this['create_protection_policy'] = createProtectionPolicy;
        return this;
    }
    public set createProtectionPolicy(createProtectionPolicy: ProtectionProxyInfoRequestInfo  | undefined) {
        this['create_protection_policy'] = createProtectionPolicy;
    }
    public get createProtectionPolicy(): ProtectionProxyInfoRequestInfo | undefined {
        return this['create_protection_policy'];
    }
    public withBackupProtectionStatus(backupProtectionStatus: string): ProtectionInfoRequestInfo {
        this['backup_protection_status'] = backupProtectionStatus;
        return this;
    }
    public set backupProtectionStatus(backupProtectionStatus: string  | undefined) {
        this['backup_protection_status'] = backupProtectionStatus;
    }
    public get backupProtectionStatus(): string | undefined {
        return this['backup_protection_status'];
    }
    public withBackupResources(backupResources: BackupResources): ProtectionInfoRequestInfo {
        this['backup_resources'] = backupResources;
        return this;
    }
    public set backupResources(backupResources: BackupResources  | undefined) {
        this['backup_resources'] = backupResources;
    }
    public get backupResources(): BackupResources | undefined {
        return this['backup_resources'];
    }
    public withBackupPolicyId(backupPolicyId: string): ProtectionInfoRequestInfo {
        this['backup_policy_id'] = backupPolicyId;
        return this;
    }
    public set backupPolicyId(backupPolicyId: string  | undefined) {
        this['backup_policy_id'] = backupPolicyId;
    }
    public get backupPolicyId(): string | undefined {
        return this['backup_policy_id'];
    }
    public withBackupCycle(backupCycle: UpdateBackupPolicyRequestInfo1): ProtectionInfoRequestInfo {
        this['backup_cycle'] = backupCycle;
        return this;
    }
    public set backupCycle(backupCycle: UpdateBackupPolicyRequestInfo1  | undefined) {
        this['backup_cycle'] = backupCycle;
    }
    public get backupCycle(): UpdateBackupPolicyRequestInfo1 | undefined {
        return this['backup_cycle'];
    }
    public withAgentIdList(agentIdList: Array<string>): ProtectionInfoRequestInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withHostIdList(hostIdList: Array<string>): ProtectionInfoRequestInfo {
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