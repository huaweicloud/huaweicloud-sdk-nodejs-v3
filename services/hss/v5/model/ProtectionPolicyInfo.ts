import { TrustProcessInfo } from './TrustProcessInfo';


export class ProtectionPolicyInfo {
    private 'policy_id'?: string;
    private 'policy_name'?: string;
    private 'protection_mode'?: string;
    private 'bait_protection_status'?: string;
    private 'deploy_mode'?: string;
    private 'protection_directory'?: string;
    private 'protection_type'?: string;
    private 'exclude_directory'?: string;
    private 'runtime_detection_status'?: string;
    private 'runtime_detection_directory'?: string;
    private 'count_associated_server'?: number;
    private 'operating_system'?: string;
    private 'process_whitelist'?: Array<TrustProcessInfo>;
    private 'default_policy'?: number;
    private 'ai_protection_status'?: string;
    public constructor() { 
    }
    public withPolicyId(policyId: string): ProtectionPolicyInfo {
        this['policy_id'] = policyId;
        return this;
    }
    public set policyId(policyId: string  | undefined) {
        this['policy_id'] = policyId;
    }
    public get policyId(): string | undefined {
        return this['policy_id'];
    }
    public withPolicyName(policyName: string): ProtectionPolicyInfo {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withProtectionMode(protectionMode: string): ProtectionPolicyInfo {
        this['protection_mode'] = protectionMode;
        return this;
    }
    public set protectionMode(protectionMode: string  | undefined) {
        this['protection_mode'] = protectionMode;
    }
    public get protectionMode(): string | undefined {
        return this['protection_mode'];
    }
    public withBaitProtectionStatus(baitProtectionStatus: string): ProtectionPolicyInfo {
        this['bait_protection_status'] = baitProtectionStatus;
        return this;
    }
    public set baitProtectionStatus(baitProtectionStatus: string  | undefined) {
        this['bait_protection_status'] = baitProtectionStatus;
    }
    public get baitProtectionStatus(): string | undefined {
        return this['bait_protection_status'];
    }
    public withDeployMode(deployMode: string): ProtectionPolicyInfo {
        this['deploy_mode'] = deployMode;
        return this;
    }
    public set deployMode(deployMode: string  | undefined) {
        this['deploy_mode'] = deployMode;
    }
    public get deployMode(): string | undefined {
        return this['deploy_mode'];
    }
    public withProtectionDirectory(protectionDirectory: string): ProtectionPolicyInfo {
        this['protection_directory'] = protectionDirectory;
        return this;
    }
    public set protectionDirectory(protectionDirectory: string  | undefined) {
        this['protection_directory'] = protectionDirectory;
    }
    public get protectionDirectory(): string | undefined {
        return this['protection_directory'];
    }
    public withProtectionType(protectionType: string): ProtectionPolicyInfo {
        this['protection_type'] = protectionType;
        return this;
    }
    public set protectionType(protectionType: string  | undefined) {
        this['protection_type'] = protectionType;
    }
    public get protectionType(): string | undefined {
        return this['protection_type'];
    }
    public withExcludeDirectory(excludeDirectory: string): ProtectionPolicyInfo {
        this['exclude_directory'] = excludeDirectory;
        return this;
    }
    public set excludeDirectory(excludeDirectory: string  | undefined) {
        this['exclude_directory'] = excludeDirectory;
    }
    public get excludeDirectory(): string | undefined {
        return this['exclude_directory'];
    }
    public withRuntimeDetectionStatus(runtimeDetectionStatus: string): ProtectionPolicyInfo {
        this['runtime_detection_status'] = runtimeDetectionStatus;
        return this;
    }
    public set runtimeDetectionStatus(runtimeDetectionStatus: string  | undefined) {
        this['runtime_detection_status'] = runtimeDetectionStatus;
    }
    public get runtimeDetectionStatus(): string | undefined {
        return this['runtime_detection_status'];
    }
    public withRuntimeDetectionDirectory(runtimeDetectionDirectory: string): ProtectionPolicyInfo {
        this['runtime_detection_directory'] = runtimeDetectionDirectory;
        return this;
    }
    public set runtimeDetectionDirectory(runtimeDetectionDirectory: string  | undefined) {
        this['runtime_detection_directory'] = runtimeDetectionDirectory;
    }
    public get runtimeDetectionDirectory(): string | undefined {
        return this['runtime_detection_directory'];
    }
    public withCountAssociatedServer(countAssociatedServer: number): ProtectionPolicyInfo {
        this['count_associated_server'] = countAssociatedServer;
        return this;
    }
    public set countAssociatedServer(countAssociatedServer: number  | undefined) {
        this['count_associated_server'] = countAssociatedServer;
    }
    public get countAssociatedServer(): number | undefined {
        return this['count_associated_server'];
    }
    public withOperatingSystem(operatingSystem: string): ProtectionPolicyInfo {
        this['operating_system'] = operatingSystem;
        return this;
    }
    public set operatingSystem(operatingSystem: string  | undefined) {
        this['operating_system'] = operatingSystem;
    }
    public get operatingSystem(): string | undefined {
        return this['operating_system'];
    }
    public withProcessWhitelist(processWhitelist: Array<TrustProcessInfo>): ProtectionPolicyInfo {
        this['process_whitelist'] = processWhitelist;
        return this;
    }
    public set processWhitelist(processWhitelist: Array<TrustProcessInfo>  | undefined) {
        this['process_whitelist'] = processWhitelist;
    }
    public get processWhitelist(): Array<TrustProcessInfo> | undefined {
        return this['process_whitelist'];
    }
    public withDefaultPolicy(defaultPolicy: number): ProtectionPolicyInfo {
        this['default_policy'] = defaultPolicy;
        return this;
    }
    public set defaultPolicy(defaultPolicy: number  | undefined) {
        this['default_policy'] = defaultPolicy;
    }
    public get defaultPolicy(): number | undefined {
        return this['default_policy'];
    }
    public withAiProtectionStatus(aiProtectionStatus: string): ProtectionPolicyInfo {
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