import { CreateLocation } from './CreateLocation';


export class CreateEdgeSite {
    public name?: string;
    private 'region_id'?: string;
    private 'project_id'?: string;
    public description?: string;
    public location?: CreateLocation;
    private 'enterprise_project_id'?: string;
    public constructor(name?: string, regionId?: string, location?: CreateLocation) { 
        this['name'] = name;
        this['region_id'] = regionId;
        this['location'] = location;
    }
    public withName(name: string): CreateEdgeSite {
        this['name'] = name;
        return this;
    }
    public withRegionId(regionId: string): CreateEdgeSite {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withProjectId(projectId: string): CreateEdgeSite {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withDescription(description: string): CreateEdgeSite {
        this['description'] = description;
        return this;
    }
    public withLocation(location: CreateLocation): CreateEdgeSite {
        this['location'] = location;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): CreateEdgeSite {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
}