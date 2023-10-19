import { EnterpriseRouterId } from './EnterpriseRouterId';
import { EnterpriseRouterTableId } from './EnterpriseRouterTableId';
import { ProjectId } from './ProjectId';
import { RegionId } from './RegionId';


export class AssociateErTableDocument {
    private 'project_id'?: string;
    private 'region_id'?: string;
    private 'enterprise_router_id'?: string;
    private 'enterprise_router_table_id'?: string;
    public constructor(projectId?: string, regionId?: string, enterpriseRouterId?: string, enterpriseRouterTableId?: string) { 
        this['project_id'] = projectId;
        this['region_id'] = regionId;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public withProjectId(projectId: string): AssociateErTableDocument {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withRegionId(regionId: string): AssociateErTableDocument {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): AssociateErTableDocument {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withEnterpriseRouterTableId(enterpriseRouterTableId: string): AssociateErTableDocument {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
        return this;
    }
    public set enterpriseRouterTableId(enterpriseRouterTableId: string  | undefined) {
        this['enterprise_router_table_id'] = enterpriseRouterTableId;
    }
    public get enterpriseRouterTableId(): string | undefined {
        return this['enterprise_router_table_id'];
    }
}