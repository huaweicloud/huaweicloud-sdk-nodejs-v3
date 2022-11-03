import { ConfigStatus } from './ConfigStatus';
import { FrozenInfo } from './FrozenInfo';
import { Id } from './Id';


export class EndpointGroupDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    public status?: ConfigStatus;
    private 'traffic_dial_percentage'?: number | undefined;
    private 'region_id'?: string | undefined;
    public listeners?: Array<Id>;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    private 'domain_id'?: string | undefined;
    private 'frozen_info'?: FrozenInfo | undefined;
    public constructor() { 
    }
    public withId(id: string): EndpointGroupDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): EndpointGroupDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EndpointGroupDetail {
        this['description'] = description;
        return this;
    }
    public withStatus(status: ConfigStatus): EndpointGroupDetail {
        this['status'] = status;
        return this;
    }
    public withTrafficDialPercentage(trafficDialPercentage: number): EndpointGroupDetail {
        this['traffic_dial_percentage'] = trafficDialPercentage;
        return this;
    }
    public set trafficDialPercentage(trafficDialPercentage: number | undefined) {
        this['traffic_dial_percentage'] = trafficDialPercentage;
    }
    public get trafficDialPercentage() {
        return this['traffic_dial_percentage'];
    }
    public withRegionId(regionId: string): EndpointGroupDetail {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
        return this['region_id'];
    }
    public withListeners(listeners: Array<Id>): EndpointGroupDetail {
        this['listeners'] = listeners;
        return this;
    }
    public withCreatedAt(createdAt: Date): EndpointGroupDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EndpointGroupDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withDomainId(domainId: string): EndpointGroupDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId() {
        return this['domain_id'];
    }
    public withFrozenInfo(frozenInfo: FrozenInfo): EndpointGroupDetail {
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