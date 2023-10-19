import { Description } from './Description';
import { EnterpriseRouterId } from './EnterpriseRouterId';
import { EnterpriseRouterProjectId } from './EnterpriseRouterProjectId';
import { EnterpriseRouterRegionId } from './EnterpriseRouterRegionId';
import { GlobalDcGatewayId } from './GlobalDcGatewayId';
import { Name } from './Name';


export class CreateCentralNetworkGdgwAttachment {
    public name?: string;
    public description?: string;
    private 'enterprise_router_id'?: string;
    private 'global_dc_gateway_id'?: string;
    private 'enterprise_router_project_id'?: string;
    private 'enterprise_router_region_id'?: string;
    private 'global_dc_gateway_project_id'?: string;
    private 'global_dc_gateway_region_id'?: string;
    private 'central_network_plane_id'?: string;
    public constructor(name?: string, enterpriseRouterId?: string, globalDcGatewayId?: string, enterpriseRouterProjectId?: string, enterpriseRouterRegionId?: string, globalDcGatewayProjectId?: string, globalDcGatewayRegionId?: string) { 
        this['name'] = name;
        this['enterprise_router_id'] = enterpriseRouterId;
        this['global_dc_gateway_id'] = globalDcGatewayId;
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
    }
    public withName(name: string): CreateCentralNetworkGdgwAttachment {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateCentralNetworkGdgwAttachment {
        this['description'] = description;
        return this;
    }
    public withEnterpriseRouterId(enterpriseRouterId: string): CreateCentralNetworkGdgwAttachment {
        this['enterprise_router_id'] = enterpriseRouterId;
        return this;
    }
    public set enterpriseRouterId(enterpriseRouterId: string  | undefined) {
        this['enterprise_router_id'] = enterpriseRouterId;
    }
    public get enterpriseRouterId(): string | undefined {
        return this['enterprise_router_id'];
    }
    public withGlobalDcGatewayId(globalDcGatewayId: string): CreateCentralNetworkGdgwAttachment {
        this['global_dc_gateway_id'] = globalDcGatewayId;
        return this;
    }
    public set globalDcGatewayId(globalDcGatewayId: string  | undefined) {
        this['global_dc_gateway_id'] = globalDcGatewayId;
    }
    public get globalDcGatewayId(): string | undefined {
        return this['global_dc_gateway_id'];
    }
    public withEnterpriseRouterProjectId(enterpriseRouterProjectId: string): CreateCentralNetworkGdgwAttachment {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
        return this;
    }
    public set enterpriseRouterProjectId(enterpriseRouterProjectId: string  | undefined) {
        this['enterprise_router_project_id'] = enterpriseRouterProjectId;
    }
    public get enterpriseRouterProjectId(): string | undefined {
        return this['enterprise_router_project_id'];
    }
    public withEnterpriseRouterRegionId(enterpriseRouterRegionId: string): CreateCentralNetworkGdgwAttachment {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
        return this;
    }
    public set enterpriseRouterRegionId(enterpriseRouterRegionId: string  | undefined) {
        this['enterprise_router_region_id'] = enterpriseRouterRegionId;
    }
    public get enterpriseRouterRegionId(): string | undefined {
        return this['enterprise_router_region_id'];
    }
    public withGlobalDcGatewayProjectId(globalDcGatewayProjectId: string): CreateCentralNetworkGdgwAttachment {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
        return this;
    }
    public set globalDcGatewayProjectId(globalDcGatewayProjectId: string  | undefined) {
        this['global_dc_gateway_project_id'] = globalDcGatewayProjectId;
    }
    public get globalDcGatewayProjectId(): string | undefined {
        return this['global_dc_gateway_project_id'];
    }
    public withGlobalDcGatewayRegionId(globalDcGatewayRegionId: string): CreateCentralNetworkGdgwAttachment {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
        return this;
    }
    public set globalDcGatewayRegionId(globalDcGatewayRegionId: string  | undefined) {
        this['global_dc_gateway_region_id'] = globalDcGatewayRegionId;
    }
    public get globalDcGatewayRegionId(): string | undefined {
        return this['global_dc_gateway_region_id'];
    }
    public withCentralNetworkPlaneId(centralNetworkPlaneId: string): CreateCentralNetworkGdgwAttachment {
        this['central_network_plane_id'] = centralNetworkPlaneId;
        return this;
    }
    public set centralNetworkPlaneId(centralNetworkPlaneId: string  | undefined) {
        this['central_network_plane_id'] = centralNetworkPlaneId;
    }
    public get centralNetworkPlaneId(): string | undefined {
        return this['central_network_plane_id'];
    }
}