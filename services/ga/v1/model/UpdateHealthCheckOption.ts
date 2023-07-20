import { HealthCheckProtocol } from './HealthCheckProtocol';


export class UpdateHealthCheckOption {
    public protocol?: HealthCheckProtocol;
    public port?: number;
    public interval?: number;
    public timeout?: number;
    private 'max_retries'?: number;
    public enabled?: boolean;
    public constructor() { 
    }
    public withProtocol(protocol: HealthCheckProtocol): UpdateHealthCheckOption {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): UpdateHealthCheckOption {
        this['port'] = port;
        return this;
    }
    public withInterval(interval: number): UpdateHealthCheckOption {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): UpdateHealthCheckOption {
        this['timeout'] = timeout;
        return this;
    }
    public withMaxRetries(maxRetries: number): UpdateHealthCheckOption {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number  | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries(): number | undefined {
        return this['max_retries'];
    }
    public withEnabled(enabled: boolean): UpdateHealthCheckOption {
        this['enabled'] = enabled;
        return this;
    }
}