import { ConfigStatus } from './ConfigStatus';
import { EndpointType } from './EndpointType';
import { FrozenInfo } from './FrozenInfo';


export class EndpointDetail {
    public id?: string;
    private 'resource_id'?: string;
    private 'endpoint_group_id'?: string;
    private 'resource_type'?: EndpointType;
    public status?: ConfigStatus;
    public weight?: number;
    private 'health_state'?: EndpointDetailHealthStateEnum | string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'domain_id'?: string;
    private 'ip_address'?: string;
    private 'frozen_info'?: FrozenInfo;
    public constructor() { 
    }
    public withId(id: string): EndpointDetail {
        this['id'] = id;
        return this;
    }
    public withResourceId(resourceId: string): EndpointDetail {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: string  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): string | undefined {
        return this['resource_id'];
    }
    public withEndpointGroupId(endpointGroupId: string): EndpointDetail {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string  | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId(): string | undefined {
        return this['endpoint_group_id'];
    }
    public withResourceType(resourceType: EndpointType): EndpointDetail {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: EndpointType  | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType(): EndpointType | undefined {
        return this['resource_type'];
    }
    public withStatus(status: ConfigStatus): EndpointDetail {
        this['status'] = status;
        return this;
    }
    public withWeight(weight: number): EndpointDetail {
        this['weight'] = weight;
        return this;
    }
    public withHealthState(healthState: EndpointDetailHealthStateEnum | string): EndpointDetail {
        this['health_state'] = healthState;
        return this;
    }
    public set healthState(healthState: EndpointDetailHealthStateEnum | string  | undefined) {
        this['health_state'] = healthState;
    }
    public get healthState(): EndpointDetailHealthStateEnum | string | undefined {
        return this['health_state'];
    }
    public withCreatedAt(createdAt: Date): EndpointDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EndpointDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): EndpointDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withIpAddress(ipAddress: string): EndpointDetail {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): EndpointDetail {
        this['frozen_info'] = frozenInfo;
        return this;
    }
    public set frozenInfo(frozenInfo: FrozenInfo  | undefined) {
        this['frozen_info'] = frozenInfo;
    }
    public get frozenInfo(): FrozenInfo | undefined {
        return this['frozen_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum EndpointDetailHealthStateEnum {
    INITIAL = 'INITIAL',
    HEALTHY = 'HEALTHY',
    UNHEALTHY = 'UNHEALTHY',
    NO_MONITOR = 'NO_MONITOR'
}
