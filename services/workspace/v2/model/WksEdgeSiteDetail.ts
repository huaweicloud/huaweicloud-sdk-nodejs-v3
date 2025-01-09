import { SimpleSiteInfo } from './SimpleSiteInfo';


export class WksEdgeSiteDetail {
    public id?: string;
    public name?: string;
    public description?: string;
    private 'availability_zone_id'?: string;
    public address?: string;
    public status?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'cpu_usage_rate'?: number;
    private 'memory_usage_rate'?: number;
    private 'capacity_usage_rate'?: number;
    private 'site_info'?: SimpleSiteInfo;
    public constructor() { 
    }
    public withId(id: string): WksEdgeSiteDetail {
        this['id'] = id;
        return this;
    }
    public withName(name: string): WksEdgeSiteDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): WksEdgeSiteDetail {
        this['description'] = description;
        return this;
    }
    public withAvailabilityZoneId(availabilityZoneId: string): WksEdgeSiteDetail {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withAddress(address: string): WksEdgeSiteDetail {
        this['address'] = address;
        return this;
    }
    public withStatus(status: string): WksEdgeSiteDetail {
        this['status'] = status;
        return this;
    }
    public withCreatedAt(createdAt: string): WksEdgeSiteDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): WksEdgeSiteDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withCpuUsageRate(cpuUsageRate: number): WksEdgeSiteDetail {
        this['cpu_usage_rate'] = cpuUsageRate;
        return this;
    }
    public set cpuUsageRate(cpuUsageRate: number  | undefined) {
        this['cpu_usage_rate'] = cpuUsageRate;
    }
    public get cpuUsageRate(): number | undefined {
        return this['cpu_usage_rate'];
    }
    public withMemoryUsageRate(memoryUsageRate: number): WksEdgeSiteDetail {
        this['memory_usage_rate'] = memoryUsageRate;
        return this;
    }
    public set memoryUsageRate(memoryUsageRate: number  | undefined) {
        this['memory_usage_rate'] = memoryUsageRate;
    }
    public get memoryUsageRate(): number | undefined {
        return this['memory_usage_rate'];
    }
    public withCapacityUsageRate(capacityUsageRate: number): WksEdgeSiteDetail {
        this['capacity_usage_rate'] = capacityUsageRate;
        return this;
    }
    public set capacityUsageRate(capacityUsageRate: number  | undefined) {
        this['capacity_usage_rate'] = capacityUsageRate;
    }
    public get capacityUsageRate(): number | undefined {
        return this['capacity_usage_rate'];
    }
    public withSiteInfo(siteInfo: SimpleSiteInfo): WksEdgeSiteDetail {
        this['site_info'] = siteInfo;
        return this;
    }
    public set siteInfo(siteInfo: SimpleSiteInfo  | undefined) {
        this['site_info'] = siteInfo;
    }
    public get siteInfo(): SimpleSiteInfo | undefined {
        return this['site_info'];
    }
}