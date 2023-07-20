

export class NeutronListPortsRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'network_id'?: string;
    private 'mac_address'?: string;
    private 'device_id'?: string;
    private 'device_owner'?: string;
    public status?: string;
    private 'security_groups'?: Array<string>;
    private 'fixed_ips'?: Array<string>;
    private 'tenant_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListPortsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListPortsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListPortsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronListPortsRequest {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronListPortsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withNetworkId(networkId: string): NeutronListPortsRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withMacAddress(macAddress: string): NeutronListPortsRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
    public withDeviceId(deviceId: string): NeutronListPortsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: string): NeutronListPortsRequest {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withStatus(status: string): NeutronListPortsRequest {
        this['status'] = status;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): NeutronListPortsRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withFixedIps(fixedIps: Array<string>): NeutronListPortsRequest {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<string>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<string> | undefined {
        return this['fixed_ips'];
    }
    public withTenantId(tenantId: string): NeutronListPortsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}