import { TrustProcessInfo } from './TrustProcessInfo';


export class ProtectionProxyInfoRequestInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'protection_mode'?: string;
    private 'bait_protection_status'?: string;
    private 'protection_directory'?: string;
    private 'protection_type'?: string;
    private 'exclude_directory'?: string;
    private 'runtime_detection_status'?: string;
    private 'operating_system'?: string;
    private 'process_whitelist'?: Array<TrustProcessInfo>;
    public constructor() { 
    }
    public withPolicyId(policyId: string): ProtectionProxyInfoRequestInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ProtectionProxyInfoRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withProtectionMode(protectionMode: string): ProtectionProxyInfoRequestInfo {
        this['protection_mode'] = protectionMode;
        return this;
    }
    public set protectionMode(protectionMode: string  | undefined) {
        this['protection_mode'] = protectionMode;
    }
    public get protectionMode(): string | undefined {
        return this['protection_mode'];
    }
    public withBaitProtectionStatus(baitProtectionStatus: string): ProtectionProxyInfoRequestInfo {
        this['bait_protection_status'] = baitProtectionStatus;
        return this;
    }
    public set baitProtectionStatus(baitProtectionStatus: string  | undefined) {
        this['bait_protection_status'] = baitProtectionStatus;
    }
    public get baitProtectionStatus(): string | undefined {
        return this['bait_protection_status'];
    }
    public withProtectionDirectory(protectionDirectory: string): ProtectionProxyInfoRequestInfo {
        this['protection_directory'] = protectionDirectory;
        return this;
    }
    public set protectionDirectory(protectionDirectory: string  | undefined) {
        this['protection_directory'] = protectionDirectory;
    }
    public get protectionDirectory(): string | undefined {
        return this['protection_directory'];
    }
    public withProtectionType(protectionType: string): ProtectionProxyInfoRequestInfo {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withExcludeDirectory(excludeDirectory: string): ProtectionProxyInfoRequestInfo {
        this['exclude_directory'] = excludeDirectory;
        return this;
    }
    public set excludeDirectory(excludeDirectory: string  | undefined) {
        this['exclude_directory'] = excludeDirectory;
    }
    public get excludeDirectory(): string | undefined {
        return this['exclude_directory'];
    }
    public withRuntimeDetectionStatus(runtimeDetectionStatus: string): ProtectionProxyInfoRequestInfo {
        this['runtime_detection_status'] = runtimeDetectionStatus;
        return this;
    }
    public set runtimeDetectionStatus(runtimeDetectionStatus: string  | undefined) {
        this['runtime_detection_status'] = runtimeDetectionStatus;
    }
    public get runtimeDetectionStatus(): string | undefined {
        return this['runtime_detection_status'];
    }
    public withOperatingSystem(operatingSystem: string): ProtectionProxyInfoRequestInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withProcessWhitelist(processWhitelist: Array<TrustProcessInfo>): ProtectionProxyInfoRequestInfo {
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