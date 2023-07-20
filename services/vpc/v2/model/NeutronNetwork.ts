

export class NeutronNetwork {
    public id?: string;
    public status?: NeutronNetworkStatusEnum | string;
    public name?: string;
    public subnets?: Array<string>;
    private 'router:external'?: boolean;
    private 'admin_state_up'?: boolean;
    public shared?: boolean;
    private 'tenant_id'?: string;
    private 'provider:network_type'?: string;
    private 'availability_zone_hints'?: Array<string>;
    private 'availability_zones'?: Array<string>;
    private 'port_security_enabled'?: boolean;
    private 'dns_domain'?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, status?: string, name?: string, subnets?: Array<string>, routerExternal?: boolean, adminStateUp?: boolean, shared?: boolean, tenantId?: string, providerNetworkType?: string, availabilityZoneHints?: Array<string>, availabilityZones?: Array<string>, portSecurityEnabled?: boolean, dnsDomain?: string, projectId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['status'] = status;
        this['name'] = name;
        this['subnets'] = subnets;
        this['router:external'] = routerExternal;
        this['admin_state_up'] = adminStateUp;
        this['shared'] = shared;
        this['tenant_id'] = tenantId;
        this['provider:network_type'] = providerNetworkType;
        this['availability_zone_hints'] = availabilityZoneHints;
        this['availability_zones'] = availabilityZones;
        this['port_security_enabled'] = portSecurityEnabled;
        this['dns_domain'] = dnsDomain;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): NeutronNetwork {
        this['id'] = id;
        return this;
    }
    public withStatus(status: NeutronNetworkStatusEnum | string): NeutronNetwork {
        this['status'] = status;
        return this;
    }
    public withName(name: string): NeutronNetwork {
        this['name'] = name;
        return this;
    }
    public withSubnets(subnets: Array<string>): NeutronNetwork {
        this['subnets'] = subnets;
        return this;
    }
    public withRouterExternal(routerExternal: boolean): NeutronNetwork {
        this['router:external'] = routerExternal;
        return this;
    }
    public set routerExternal(routerExternal: boolean  | undefined) {
        this['router:external'] = routerExternal;
    }
    public get routerExternal(): boolean | undefined {
        return this['router:external'];
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronNetwork {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withShared(shared: boolean): NeutronNetwork {
        this['shared'] = shared;
        return this;
    }
    public withTenantId(tenantId: string): NeutronNetwork {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProviderNetworkType(providerNetworkType: string): NeutronNetwork {
        this['provider:network_type'] = providerNetworkType;
        return this;
    }
    public set providerNetworkType(providerNetworkType: string  | undefined) {
        this['provider:network_type'] = providerNetworkType;
    }
    public get providerNetworkType(): string | undefined {
        return this['provider:network_type'];
    }
    public withAvailabilityZoneHints(availabilityZoneHints: Array<string>): NeutronNetwork {
        this['availability_zone_hints'] = availabilityZoneHints;
        return this;
    }
    public set availabilityZoneHints(availabilityZoneHints: Array<string>  | undefined) {
        this['availability_zone_hints'] = availabilityZoneHints;
    }
    public get availabilityZoneHints(): Array<string> | undefined {
        return this['availability_zone_hints'];
    }
    public withAvailabilityZones(availabilityZones: Array<string>): NeutronNetwork {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string>  | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones(): Array<string> | undefined {
        return this['availability_zones'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronNetwork {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean  | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled(): boolean | undefined {
        return this['port_security_enabled'];
    }
    public withDnsDomain(dnsDomain: string): NeutronNetwork {
        this['dns_domain'] = dnsDomain;
        return this;
    }
    public set dnsDomain(dnsDomain: string  | undefined) {
        this['dns_domain'] = dnsDomain;
    }
    public get dnsDomain(): string | undefined {
        return this['dns_domain'];
    }
    public withProjectId(projectId: string): NeutronNetwork {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronNetwork {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronNetwork {
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

/**
    * @export
    * @enum {string}
    */
export enum NeutronNetworkStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    BUILD = 'BUILD',
    ERROR = 'ERROR'
}
