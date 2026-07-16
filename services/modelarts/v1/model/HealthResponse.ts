

export class HealthResponse {
    private 'check_method'?: string;
    public cmd?: string;
    public url?: string;
    public protocol?: string;
    private 'initial_delay_seconds'?: number;
    private 'timeout_seconds'?: number;
    private 'period_seconds'?: number;
    private 'failure_threshold'?: number;
    public constructor(initialDelaySeconds?: number, timeoutSeconds?: number, periodSeconds?: number, failureThreshold?: number) { 
        this['initial_delay_seconds'] = initialDelaySeconds;
        this['timeout_seconds'] = timeoutSeconds;
        this['period_seconds'] = periodSeconds;
        this['failure_threshold'] = failureThreshold;
    }
    public withCheckMethod(checkMethod: string): HealthResponse {
        this['check_method'] = checkMethod;
        return this;
    }
    public set checkMethod(checkMethod: string  | undefined) {
        this['check_method'] = checkMethod;
    }
    public get checkMethod(): string | undefined {
        return this['check_method'];
    }
    public withCmd(cmd: string): HealthResponse {
        this['cmd'] = cmd;
        return this;
    }
    public withUrl(url: string): HealthResponse {
        this['url'] = url;
        return this;
    }
    public withProtocol(protocol: string): HealthResponse {
        this['protocol'] = protocol;
        return this;
    }
    public withInitialDelaySeconds(initialDelaySeconds: number): HealthResponse {
        this['initial_delay_seconds'] = initialDelaySeconds;
        return this;
    }
    public set initialDelaySeconds(initialDelaySeconds: number  | undefined) {
        this['initial_delay_seconds'] = initialDelaySeconds;
    }
    public get initialDelaySeconds(): number | undefined {
        return this['initial_delay_seconds'];
    }
    public withTimeoutSeconds(timeoutSeconds: number): HealthResponse {
        this['timeout_seconds'] = timeoutSeconds;
        return this;
    }
    public set timeoutSeconds(timeoutSeconds: number  | undefined) {
        this['timeout_seconds'] = timeoutSeconds;
    }
    public get timeoutSeconds(): number | undefined {
        return this['timeout_seconds'];
    }
    public withPeriodSeconds(periodSeconds: number): HealthResponse {
        this['period_seconds'] = periodSeconds;
        return this;
    }
    public set periodSeconds(periodSeconds: number  | undefined) {
        this['period_seconds'] = periodSeconds;
    }
    public get periodSeconds(): number | undefined {
        return this['period_seconds'];
    }
    public withFailureThreshold(failureThreshold: number): HealthResponse {
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