import { ConfigStatus } from './ConfigStatus';
import { FrozenInfo } from './FrozenInfo';
import { HealthCheckProtocol } from './HealthCheckProtocol';


export class HealthCheckDetail {
    public id?: string;
    private 'endpoint_group_id'?: string | undefined;
    public protocol?: HealthCheckProtocol;
    public status?: ConfigStatus;
    public port?: number;
    public interval?: number;
    public timeout?: number;
    private 'max_retries'?: number | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'domain_id'?: string | undefined;
    public enabled?: boolean;
    private 'frozen_info'?: FrozenInfo | undefined;
    public constructor() { 
    }
    public withId(id: string): HealthCheckDetail {
        this['id'] = id;
        return this;
    }
    public withEndpointGroupId(endpointGroupId: string): HealthCheckDetail {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withProtocol(protocol: HealthCheckProtocol): HealthCheckDetail {
        this['protocol'] = protocol;
        return this;
    }
    public withStatus(status: ConfigStatus): HealthCheckDetail {
        this['status'] = status;
        return this;
    }
    public withPort(port: number): HealthCheckDetail {
        this['port'] = port;
        return this;
    }
    public withInterval(interval: number): HealthCheckDetail {
        this['interval'] = interval;
        return this;
    }
    public withTimeout(timeout: number): HealthCheckDetail {
        this['timeout'] = timeout;
        return this;
    }
    public withMaxRetries(maxRetries: number): HealthCheckDetail {
        this['max_retries'] = maxRetries;
        return this;
    }
    public set maxRetries(maxRetries: number | undefined) {
        this['max_retries'] = maxRetries;
    }
    public get maxRetries() {
        return this['max_retries'];
    }
    public withCreatedAt(createdAt: Date): HealthCheckDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): HealthCheckDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): HealthCheckDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withEnabled(enabled: boolean): HealthCheckDetail {
        this['enabled'] = enabled;
        return this;
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): HealthCheckDetail {
        this['frozen_info'] = frozenInfo;
        return this;
    }
    public set frozenInfo(frozenInfo: FrozenInfo | undefined) {
        this['frozen_info'] = frozenInfo;
    }
    public get frozenInfo() {
        return this['frozen_info'];
    }
}