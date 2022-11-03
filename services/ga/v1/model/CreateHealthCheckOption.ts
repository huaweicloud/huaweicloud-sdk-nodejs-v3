import { HealthCheckProtocol } from './HealthCheckProtocol';


export class CreateHealthCheckOption {
    private 'endpoint_group_id': string | undefined;
    public protocol: HealthCheckProtocol;
    public port: number;
    public interval: number;
    public timeout: number;
    private 'max_retries': number | undefined;
    public enabled: boolean;
    public constructor(endpointGroupId?: any, protocol?: any, port?: any, interval?: any, timeout?: any, maxRetries?: any, enabled?: any) { 
        this['endpoint_group_id'] = endpointGroupId;
        this['protocol'] = protocol;
        this['port'] = port;
        this['interval'] = interval;
        this['timeout'] = timeout;
        this['max_retries'] = maxRetries;
        this['enabled'] = enabled;
    }
    public withEndpointGroupId(endpointGroupId: string): CreateHealthCheckOption {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withProtocol(protocol: HealthCheckProtocol): CreateHealthCheckOption {
        this['protocol'] = protocol;
        return this;
    }
    public withPort(port: number): CreateHealthCheckOption {
        this['port'] = port;
        return this;
    }
    public withInterval(interval: number): CreateHealthCheckOption {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): CreateHealthCheckOption {
        this['timeout'] = timeout;
        return this;
    }
    public withMaxRetries(maxRetries: number): CreateHealthCheckOption {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withEnabled(enabled: boolean): CreateHealthCheckOption {
        this['enabled'] = enabled;
        return this;
    }
}