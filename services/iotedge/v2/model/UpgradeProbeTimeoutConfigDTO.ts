

export class UpgradeProbeTimeoutConfigDTO {
    public timeout?: number;
    private 'failure_threshold'?: number;
    public constructor() { 
    }
    public withTimeout(timeout: number): UpgradeProbeTimeoutConfigDTO {
        this['timeout'] = timeout;
        return this;
    }
    public withFailureThreshold(failureThreshold: number): UpgradeProbeTimeoutConfigDTO {
        this['failure_threshold'] = failureThreshold;
        return this;
    }
    public set failureThreshold(failureThreshold: number  | undefined) {
        this['failure_threshold'] = failureThreshold;
    }
    public get failureThreshold(): number | undefined {
        return this['failure_threshold'];
    }
}