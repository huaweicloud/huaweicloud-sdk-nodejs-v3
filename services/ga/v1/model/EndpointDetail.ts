import { ConfigStatus } from './ConfigStatus';
import { EndpointType } from './EndpointType';
import { FrozenInfo } from './FrozenInfo';


export class EndpointDetail {
    public id?: string;
    private 'resource_id'?: string | undefined;
    private 'endpoint_group_id'?: string | undefined;
    private 'resource_type'?: EndpointType | undefined;
    public status?: ConfigStatus;
    public weight?: number;
    private 'health_state'?: EndpointDetailHealthStateEnum | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'domain_id'?: string | undefined;
    private 'ip_address'?: string | undefined;
    private 'frozen_info'?: FrozenInfo | undefined;
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
    public set resourceId(resourceId: string | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId() {
        return this['resource_id'];
    }
    public withEndpointGroupId(endpointGroupId: string): EndpointDetail {
        this['endpoint_group_id'] = endpointGroupId;
        return this;
    }
    public set endpointGroupId(endpointGroupId: string | undefined) {
        this['endpoint_group_id'] = endpointGroupId;
    }
    public get endpointGroupId() {
        return this['endpoint_group_id'];
    }
    public withResourceType(resourceType: EndpointType): EndpointDetail {
        this['resource_type'] = resourceType;
        return this;
    }
    public set resourceType(resourceType: EndpointType | undefined) {
        this['resource_type'] = resourceType;
    }
    public get resourceType() {
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
    public withHealthState(healthState: EndpointDetailHealthStateEnum): EndpointDetail {
        this['health_state'] = healthState;
        return this;
    }
    public set healthState(healthState: EndpointDetailHealthStateEnum | undefined) {
        this['health_state'] = healthState;
    }
    public get healthState() {
        return this['health_state'];
    }
    public withCreatedAt(createdAt: Date): EndpointDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EndpointDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): EndpointDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withIpAddress(ipAddress: string): EndpointDetail {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
        return this['ip_address'];
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): EndpointDetail {
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
