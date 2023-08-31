

export class ListNatGatewaysRequest {
    public id?: string;
    private 'enterprise_project_id'?: string;
    public description?: string;
    private 'created_at'?: string;
    public name?: string;
    public status?: Array<ListNatGatewaysRequestStatusEnum> | Array<string>;
    public spec?: Array<ListNatGatewaysRequestSpecEnum> | Array<string>;
    private 'admin_state_up'?: boolean;
    private 'internal_network_id'?: string;
    private 'router_id'?: string;
    public limit?: number;
    public constructor() { 
    }
    public withId(id: string): ListNatGatewaysRequest {
        this['id'] = id;
        return this;
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListNatGatewaysRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDescription(description: string): ListNatGatewaysRequest {
        this['description'] = description;
        return this;
    }
    public withCreatedAt(createdAt: string): ListNatGatewaysRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withName(name: string): ListNatGatewaysRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: Array<ListNatGatewaysRequestStatusEnum> | Array<string>): ListNatGatewaysRequest {
        this['status'] = status;
        return this;
    }
    public withSpec(spec: Array<ListNatGatewaysRequestSpecEnum> | Array<string>): ListNatGatewaysRequest {
        this['spec'] = spec;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListNatGatewaysRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withInternalNetworkId(internalNetworkId: string): ListNatGatewaysRequest {
        this['internal_network_id'] = internalNetworkId;
        return this;
    }
    public set internalNetworkId(internalNetworkId: string  | undefined) {
        this['internal_network_id'] = internalNetworkId;
    }
    public get internalNetworkId(): string | undefined {
        return this['internal_network_id'];
    }
    public withRouterId(routerId: string): ListNatGatewaysRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withLimit(limit: number): ListNatGatewaysRequest {
        this['limit'] = limit;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaysRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    PENDING_CREATE = 'PENDING_CREATE',
    PENDING_UPDATE = 'PENDING_UPDATE',
    PENDING_DELETE = 'PENDING_DELETE',
    INACTIVE = 'INACTIVE'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaysRequestSpecEnum {
    E_1 = '1',
    E_2 = '2',
    E_3 = '3',
    E_4 = '4'
}
