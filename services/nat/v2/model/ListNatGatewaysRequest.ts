

export class ListNatGatewaysRequest {
    private 'tenant_id'?: string;
    public id?: string;
    private 'enterprise_project_id'?: string;
    public description?: string;
    private 'created_at'?: Date;
    public name?: string;
    public status?: Array<ListNatGatewaysRequestStatusEnum> | Array<string>;
    public spec?: Array<ListNatGatewaysRequestSpecEnum> | Array<string>;
    private 'admin_state_up'?: boolean;
    private 'internal_network_id'?: string;
    private 'router_id'?: string;
    public limit?: number;
    public marker?: string;
    private 'sort_key'?: ListNatGatewaysRequestSortKeyEnum | string;
    private 'sort_dir'?: ListNatGatewaysRequestSortDirEnum | string;
    public constructor() { 
    }
    public withTenantId(tenantId: string): ListNatGatewaysRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
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
    public withCreatedAt(createdAt: Date): ListNatGatewaysRequest {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
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
    public withMarker(marker: string): ListNatGatewaysRequest {
        this['marker'] = marker;
        return this;
    }
    public withSortKey(sortKey: ListNatGatewaysRequestSortKeyEnum | string): ListNatGatewaysRequest {
        this['sort_key'] = sortKey;
        return this;
    }
    public set sortKey(sortKey: ListNatGatewaysRequestSortKeyEnum | string  | undefined) {
        this['sort_key'] = sortKey;
    }
    public get sortKey(): ListNatGatewaysRequestSortKeyEnum | string | undefined {
        return this['sort_key'];
    }
    public withSortDir(sortDir: ListNatGatewaysRequestSortDirEnum | string): ListNatGatewaysRequest {
        this['sort_dir'] = sortDir;
        return this;
    }
    public set sortDir(sortDir: ListNatGatewaysRequestSortDirEnum | string  | undefined) {
        this['sort_dir'] = sortDir;
    }
    public get sortDir(): ListNatGatewaysRequestSortDirEnum | string | undefined {
        return this['sort_dir'];
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
    E_4 = '4',
    E_5 = '5'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaysRequestSortKeyEnum {
    ID = 'id',
    NAME = 'name',
    STATUS = 'status',
    CREATED_AT = 'created_at'
}
/**
    * @export
    * @enum {string}
    */
export enum ListNatGatewaysRequestSortDirEnum {
    DESC = 'desc',
    ASC = 'asc'
}
