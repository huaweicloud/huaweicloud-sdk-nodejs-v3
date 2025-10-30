import { LocationDetail } from './LocationDetail';


export class EdgeSiteDetail {
    public id?: string;
    private 'domain_id'?: string;
    public name?: string;
    public description?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    private 'availability_zone_id'?: string;
    public status?: string;
    public location?: LocationDetail;
    private 'enterprise_project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): EdgeSiteDetail {
        this['id'] = id;
        return this;
    }
    public withDomainId(domainId: string): EdgeSiteDetail {
        this['domain_id'] = domainId;
        return this;
    }
    public set domainId(domainId: string  | undefined) {
        this['domain_id'] = domainId;
    }
    public get domainId(): string | undefined {
        return this['domain_id'];
    }
    public withName(name: string): EdgeSiteDetail {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): EdgeSiteDetail {
        this['description'] = description;
        return this;
    }
    public withRegionId(regionId: string): EdgeSiteDetail {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): EdgeSiteDetail {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAvailabilityZoneId(availabilityZoneId: string): EdgeSiteDetail {
        this['availability_zone_id'] = availabilityZoneId;
        return this;
    }
    public set availabilityZoneId(availabilityZoneId: string  | undefined) {
        this['availability_zone_id'] = availabilityZoneId;
    }
    public get availabilityZoneId(): string | undefined {
        return this['availability_zone_id'];
    }
    public withStatus(status: string): EdgeSiteDetail {
        this['status'] = status;
        return this;
    }
    public withLocation(location: LocationDetail): EdgeSiteDetail {
        this['location'] = location;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): EdgeSiteDetail {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withCreatedAt(createdAt: Date): EdgeSiteDetail {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): EdgeSiteDetail {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}