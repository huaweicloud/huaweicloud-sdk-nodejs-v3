

export class Privateip {
    public status?: PrivateipStatusEnum | string;
    public id?: string;
    private 'subnet_id'?: string;
    private 'tenant_id'?: string;
    private 'device_owner'?: PrivateipDeviceOwnerEnum | string;
    private 'ip_address'?: string;
    public constructor(status?: string, id?: string, subnetId?: string, tenantId?: string, deviceOwner?: string, ipAddress?: string) { 
        this['status'] = status;
        this['id'] = id;
        this['subnet_id'] = subnetId;
        this['tenant_id'] = tenantId;
        this['device_owner'] = deviceOwner;
        this['ip_address'] = ipAddress;
    }
    public withStatus(status: PrivateipStatusEnum | string): Privateip {
        this['status'] = status;
        return this;
    }
    public withId(id: string): Privateip {
        this['id'] = id;
        return this;
    }
    public withSubnetId(subnetId: string): Privateip {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withTenantId(tenantId: string): Privateip {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDeviceOwner(deviceOwner: PrivateipDeviceOwnerEnum | string): Privateip {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: PrivateipDeviceOwnerEnum | string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): PrivateipDeviceOwnerEnum | string | undefined {
        return this['device_owner'];
    }
    public withIpAddress(ipAddress: string): Privateip {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string  | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress(): string | undefined {
        return this['ip_address'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PrivateipStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN'
}
/**
    * @export
    * @enum {string}
    */
export enum PrivateipDeviceOwnerEnum {
    NETWORKDHCP = 'network:dhcp',
    NETWORKROUTER_INTERFACE_DISTRIBUTED = 'network:router_interface_distributed',
    COMPUTEXXX = 'compute:xxx'
}
