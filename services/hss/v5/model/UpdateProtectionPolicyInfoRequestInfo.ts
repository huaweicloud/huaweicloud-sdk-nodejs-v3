import { TrustProcessInfo } from './TrustProcessInfo';


export class UpdateProtectionPolicyInfoRequestInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'protection_mode'?: string;
    private 'bait_protection_status'?: string;
    private 'protection_directory'?: string;
    private 'protection_type'?: string;
    private 'exclude_directory'?: string;
    private 'agent_id_list'?: Array<string>;
    private 'operating_system'?: string;
    private 'runtime_detection_status'?: string;
    private 'process_whitelist'?: Array<TrustProcessInfo>;
    public constructor(policyId?: string, policyName?: string, protectionMode?: string, baitProtectionStatus?: string, protectionDirectory?: string, protectionType?: string, operatingSystem?: string) { 
        this['policy_id'] = policyId;
        this['policy_name'] = policyName;
        this['protection_mode'] = protectionMode;
        this['bait_protection_status'] = baitProtectionStatus;
        this['protection_directory'] = protectionDirectory;
        this['protection_type'] = protectionType;
        this['operating_system'] = operatingSystem;
    }
    public withPolicyId(policyId: string): UpdateProtectionPolicyInfoRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): UpdateProtectionPolicyInfoRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withProtectionMode(protectionMode: string): UpdateProtectionPolicyInfoRequestInfo {
        this['protection_mode'] = protectionMode;
        return this;
    }
    public set protectionMode(protectionMode: string  | undefined) {
        this['protection_mode'] = protectionMode;
    }
    public get protectionMode(): string | undefined {
        return this['protection_mode'];
    }
    public withBaitProtectionStatus(baitProtectionStatus: string): UpdateProtectionPolicyInfoRequestInfo {
        this['bait_protection_status'] = baitProtectionStatus;
        return this;
    }
    public set baitProtectionStatus(baitProtectionStatus: string  | undefined) {
        this['bait_protection_status'] = baitProtectionStatus;
    }
    public get baitProtectionStatus(): string | undefined {
        return this['bait_protection_status'];
    }
    public withProtectionDirectory(protectionDirectory: string): UpdateProtectionPolicyInfoRequestInfo {
        this['protection_directory'] = protectionDirectory;
        return this;
    }
    public set protectionDirectory(protectionDirectory: string  | undefined) {
        this['protection_directory'] = protectionDirectory;
    }
    public get protectionDirectory(): string | undefined {
        return this['protection_directory'];
    }
    public withProtectionType(protectionType: string): UpdateProtectionPolicyInfoRequestInfo {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withExcludeDirectory(excludeDirectory: string): UpdateProtectionPolicyInfoRequestInfo {
        this['exclude_directory'] = excludeDirectory;
        return this;
    }
    public set excludeDirectory(excludeDirectory: string  | undefined) {
        this['exclude_directory'] = excludeDirectory;
    }
    public get excludeDirectory(): string | undefined {
        return this['exclude_directory'];
    }
    public withAgentIdList(agentIdList: Array<string>): UpdateProtectionPolicyInfoRequestInfo {
        this['agent_id_list'] = agentIdList;
        return this;
    }
    public set agentIdList(agentIdList: Array<string>  | undefined) {
        this['agent_id_list'] = agentIdList;
    }
    public get agentIdList(): Array<string> | undefined {
        return this['agent_id_list'];
    }
    public withOperatingSystem(operatingSystem: string): UpdateProtectionPolicyInfoRequestInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withRuntimeDetectionStatus(runtimeDetectionStatus: string): UpdateProtectionPolicyInfoRequestInfo {
        this['runtime_detection_status'] = runtimeDetectionStatus;
        return this;
    }
    public set runtimeDetectionStatus(runtimeDetectionStatus: string  | undefined) {
        this['runtime_detection_status'] = runtimeDetectionStatus;
    }
    public get runtimeDetectionStatus(): string | undefined {
        return this['runtime_detection_status'];
    }
    public withProcessWhitelist(processWhitelist: Array<TrustProcessInfo>): UpdateProtectionPolicyInfoRequestInfo {
        this['process_whitelist'] = processWhitelist;
        return this;
    }
    public set processWhitelist(processWhitelist: Array<TrustProcessInfo>  | undefined) {
        this['process_whitelist'] = processWhitelist;
    }
    public get processWhitelist(): Array<TrustProcessInfo> | undefined {
        return this['process_whitelist'];
    }
}