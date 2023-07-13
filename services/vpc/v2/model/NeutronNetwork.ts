

export class NeutronNetwork {
    public id: string;
    public status: NeutronNetworkStatusEnum;
    public name: string;
    public subnets: Array<string>;
    private 'router:external': boolean | undefined;
    private 'admin_state_up': boolean | undefined;
    public shared: boolean;
    private 'tenant_id': string | undefined;
    private 'provider:network_type': string | undefined;
    private 'availability_zone_hints': Array<string> | undefined;
    private 'availability_zones': Array<string> | undefined;
    private 'port_security_enabled': boolean | undefined;
    private 'dns_domain': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    public constructor(id?: any, status?: any, name?: any, subnets?: any, routerExternal?: any, adminStateUp?: any, shared?: any, tenantId?: any, providerNetworkType?: any, availabilityZoneHints?: any, availabilityZones?: any, portSecurityEnabled?: any, dnsDomain?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
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
    public withStatus(status: NeutronNetworkStatusEnum): NeutronNetwork {
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
    public set routerExternal(routerExternal: boolean | undefined) {
        this['router:external'] = routerExternal;
    }
    public get routerExternal() {
        return this['router:external'];
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronNetwork {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
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
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProviderNetworkType(providerNetworkType: string): NeutronNetwork {
        this['provider:network_type'] = providerNetworkType;
        return this;
    }
    public set providerNetworkType(providerNetworkType: string | undefined) {
        this['provider:network_type'] = providerNetworkType;
    }
    public get providerNetworkType() {
        return this['provider:network_type'];
    }
    public withAvailabilityZoneHints(availabilityZoneHints: Array<string>): NeutronNetwork {
        this['availability_zone_hints'] = availabilityZoneHints;
        return this;
    }
    public set availabilityZoneHints(availabilityZoneHints: Array<string> | undefined) {
        this['availability_zone_hints'] = availabilityZoneHints;
    }
    public get availabilityZoneHints() {
        return this['availability_zone_hints'];
    }
    public withAvailabilityZones(availabilityZones: Array<string>): NeutronNetwork {
        this['availability_zones'] = availabilityZones;
        return this;
    }
    public set availabilityZones(availabilityZones: Array<string> | undefined) {
        this['availability_zones'] = availabilityZones;
    }
    public get availabilityZones() {
        return this['availability_zones'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronNetwork {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled() {
        return this['port_security_enabled'];
    }
    public withDnsDomain(dnsDomain: string): NeutronNetwork {
        this['dns_domain'] = dnsDomain;
        return this;
    }
    public set dnsDomain(dnsDomain: string | undefined) {
        this['dns_domain'] = dnsDomain;
    }
    public get dnsDomain() {
        return this['dns_domain'];
    }
    public withProjectId(projectId: string): NeutronNetwork {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronNetwork {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronNetwork {
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
