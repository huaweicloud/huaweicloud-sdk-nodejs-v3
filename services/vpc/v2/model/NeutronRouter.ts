import { ExternalGatewayInfo } from './ExternalGatewayInfo';
import { Route } from './Route';


export class NeutronRouter {
    private 'admin_state_up': boolean | undefined;
    private 'external_gateway_info': ExternalGatewayInfo | undefined;
    public id: string;
    public name: string;
    public routes: Array<Route>;
    public status: string;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(adminStateUp?: any, externalGatewayInfo?: any, id?: any, name?: any, routes?: any, status?: any, tenantId?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
        this['admin_state_up'] = adminStateUp;
        this['external_gateway_info'] = externalGatewayInfo;
        this['id'] = id;
        this['name'] = name;
        this['routes'] = routes;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronRouter {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withExternalGatewayInfo(externalGatewayInfo: ExternalGatewayInfo): NeutronRouter {
        this['external_gateway_info'] = externalGatewayInfo;
        return this;
    }
    public set externalGatewayInfo(externalGatewayInfo: ExternalGatewayInfo | undefined) {
        this['external_gateway_info'] = externalGatewayInfo;
    }
    public get externalGatewayInfo() {
        return this['external_gateway_info'];
    }
    public withId(id: string): NeutronRouter {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronRouter {
        this['name'] = name;
        return this;
    }
    public withRoutes(routes: Array<Route>): NeutronRouter {
        this['routes'] = routes;
        return this;
    }
    public withStatus(status: string): NeutronRouter {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): NeutronRouter {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronRouter {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronRouter {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronRouter {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}