import { EnterpriseRouterId } from './EnterpriseRouterId';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';


export class AssociateErInstanceDocument {
    private 'enterprise_router_id'?: string;
    private 'project_id'?: string;
    private 'region_id'?: string;
    public constructor(enterpriseRouterId?: string, projectId?: string, regionId?: string) { 
        this['enterprise_router_id'] = enterpriseRouterId;
        this['project_id'] = projectId;
        this['region_id'] = regionId;
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): AssociateErInstanceDocument {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withProjectId(projectId: string): AssociateErInstanceDocument {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): AssociateErInstanceDocument {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
}