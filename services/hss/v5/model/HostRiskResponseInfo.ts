

export class HostRiskResponseInfo {
    private 'host_id'?: string;
    private 'agent_status'?: string;
    private 'install_result_code'?: string;
    public version?: string;
    private 'protect_status'?: string;
    private 'detect_result'?: string;
    public asset?: number;
    public vulnerability?: number;
    public baseline?: number;
    public intrusion?: number;
    public constructor() { 
    }
    public withHostId(hostId: string): HostRiskResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withAgentStatus(agentStatus: string): HostRiskResponseInfo {
        this['agent_status'] = agentStatus;
        return this;
    }
    public set agentStatus(agentStatus: string  | undefined) {
        this['agent_status'] = agentStatus;
    }
    public get agentStatus(): string | undefined {
        return this['agent_status'];
    }
    public withInstallResultCode(installResultCode: string): HostRiskResponseInfo {
        this['install_result_code'] = installResultCode;
        return this;
    }
    public set installResultCode(installResultCode: string  | undefined) {
        this['install_result_code'] = installResultCode;
    }
    public get installResultCode(): string | undefined {
        return this['install_result_code'];
    }
    public withVersion(version: string): HostRiskResponseInfo {
        this['version'] = version;
        return this;
    }
    public withProtectStatus(protectStatus: string): HostRiskResponseInfo {
        this['protect_status'] = protectStatus;
        return this;
    }
    public set protectStatus(protectStatus: string  | undefined) {
        this['protect_status'] = protectStatus;
    }
    public get protectStatus(): string | undefined {
        return this['protect_status'];
    }
    public withDetectResult(detectResult: string): HostRiskResponseInfo {
        this['detect_result'] = detectResult;
        return this;
    }
    public set detectResult(detectResult: string  | undefined) {
        this['detect_result'] = detectResult;
    }
    public get detectResult(): string | undefined {
        return this['detect_result'];
    }
    public withAsset(asset: number): HostRiskResponseInfo {
        this['asset'] = asset;
        return this;
    }
    public withVulnerability(vulnerability: number): HostRiskResponseInfo {
        this['vulnerability'] = vulnerability;
        return this;
    }
    public withBaseline(baseline: number): HostRiskResponseInfo {
        this['baseline'] = baseline;
        return this;
    }
    public withIntrusion(intrusion: number): HostRiskResponseInfo {
        this['intrusion'] = intrusion;
        return this;
    }
}