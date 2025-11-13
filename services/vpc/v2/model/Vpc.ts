import { Route } from './Route';


export class Vpc {
    public id?: string;
    public name?: string;
    public cidr?: string;
    public description?: string;
    public routes?: Array<Route>;
    public status?: VpcStatusEnum | string;
    private 'enterprise_project_id'?: string;
    private 'tenant_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'block_service_endpoint_states'?: string;
    private 'enable_network_address_usage_metrics'?: boolean;
    public constructor(id?: string, name?: string, cidr?: string, description?: string, routes?: Array<Route>, status?: string, enterpriseProjectId?: string, tenantId?: string, createdAt?: Date, updatedAt?: Date, blockServiceEndpointStates?: string, enableNetworkAddressUsageMetrics?: boolean) { 
        this['id'] = id;
        this['name'] = name;
        this['cidr'] = cidr;
        this['description'] = description;
        this['routes'] = routes;
        this['status'] = status;
        this['enterprise_project_id'] = enterpriseProjectId;
        this['tenant_id'] = tenantId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['block_service_endpoint_states'] = blockServiceEndpointStates;
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
    }
    public withId(id: string): Vpc {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Vpc {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): Vpc {
        this['cidr'] = cidr;
        return this;
    }
    public withDescription(description: string): Vpc {
        this['description'] = description;
        return this;
    }
    public withRoutes(routes: Array<Route>): Vpc {
        this['routes'] = routes;
        return this;
    }
    public withStatus(status: VpcStatusEnum | string): Vpc {
        this['status'] = status;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): Vpc {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withTenantId(tenantId: string): Vpc {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCreatedAt(createdAt: Date): Vpc {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Vpc {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withBlockServiceEndpointStates(blockServiceEndpointStates: string): Vpc {
        this['block_service_endpoint_states'] = blockServiceEndpointStates;
        return this;
    }
    public set blockServiceEndpointStates(blockServiceEndpointStates: string  | undefined) {
        this['block_service_endpoint_states'] = blockServiceEndpointStates;
    }
    public get blockServiceEndpointStates(): string | undefined {
        return this['block_service_endpoint_states'];
    }
    public withEnableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean): Vpc {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
        return this;
    }
    public set enableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean  | undefined) {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
    }
    public get enableNetworkAddressUsageMetrics(): boolean | undefined {
        return this['enable_network_address_usage_metrics'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VpcStatusEnum {
    CREATING = 'CREATING',
    OK = 'OK',
    ERROR = 'ERROR'
}
