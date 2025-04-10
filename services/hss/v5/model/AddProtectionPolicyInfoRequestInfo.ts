import { TrustProcessInfo } from './TrustProcessInfo';


export class AddProtectionPolicyInfoRequestInfo {
    private 'policy_name'?: string;
    private 'protection_mode'?: string;
    private 'deploy_mode'?: string;
    private 'protection_directory'?: string;
    private 'protection_type'?: string;
    private 'exclude_directory'?: string;
    private 'operating_system'?: string;
    private 'process_whitelist'?: Array<TrustProcessInfo>;
    private 'ai_protection_status'?: string;
    public constructor(policyName?: string, protectionMode?: string, protectionDirectory?: string, protectionType?: string, operatingSystem?: string) { 
        this['policy_name'] = policyName;
        this['protection_mode'] = protectionMode;
        this['protection_directory'] = protectionDirectory;
        this['protection_type'] = protectionType;
        this['operating_system'] = operatingSystem;
    }
    public withPolicyName(policyName: string): AddProtectionPolicyInfoRequestInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withProtectionMode(protectionMode: string): AddProtectionPolicyInfoRequestInfo {
        this['protection_mode'] = protectionMode;
        return this;
    }
    public set protectionMode(protectionMode: string  | undefined) {
        this['protection_mode'] = protectionMode;
    }
    public get protectionMode(): string | undefined {
        return this['protection_mode'];
    }
    public withDeployMode(deployMode: string): AddProtectionPolicyInfoRequestInfo {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): string | undefined {
        return this['deploy_mode'];
    }
    public withProtectionDirectory(protectionDirectory: string): AddProtectionPolicyInfoRequestInfo {
        this['protection_directory'] = protectionDirectory;
        return this;
    }
    public set protectionDirectory(protectionDirectory: string  | undefined) {
        this['protection_directory'] = protectionDirectory;
    }
    public get protectionDirectory(): string | undefined {
        return this['protection_directory'];
    }
    public withProtectionType(protectionType: string): AddProtectionPolicyInfoRequestInfo {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withExcludeDirectory(excludeDirectory: string): AddProtectionPolicyInfoRequestInfo {
        this['exclude_directory'] = excludeDirectory;
        return this;
    }
    public set excludeDirectory(excludeDirectory: string  | undefined) {
        this['exclude_directory'] = excludeDirectory;
    }
    public get excludeDirectory(): string | undefined {
        return this['exclude_directory'];
    }
    public withOperatingSystem(operatingSystem: string): AddProtectionPolicyInfoRequestInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withProcessWhitelist(processWhitelist: Array<TrustProcessInfo>): AddProtectionPolicyInfoRequestInfo {
        this['process_whitelist'] = processWhitelist;
        return this;
    }
    public set processWhitelist(processWhitelist: Array<TrustProcessInfo>  | undefined) {
        this['process_whitelist'] = processWhitelist;
    }
    public get processWhitelist(): Array<TrustProcessInfo> | undefined {
        return this['process_whitelist'];
    }
    public withAiProtectionStatus(aiProtectionStatus: string): AddProtectionPolicyInfoRequestInfo {
        this['ai_protection_status'] = aiProtectionStatus;
        return this;
    }
    public set aiProtectionStatus(aiProtectionStatus: string  | undefined) {
        this['ai_protection_status'] = aiProtectionStatus;
    }
    public get aiProtectionStatus(): string | undefined {
        return this['ai_protection_status'];
    }
}