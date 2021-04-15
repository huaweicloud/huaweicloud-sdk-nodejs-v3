

export class Privateip {
    public status: PrivateipStatusEnum;
    public id: string;
    private 'subnet_id': string | undefined;
    private 'tenant_id': string | undefined;
    private 'device_owner': PrivateipDeviceOwnerEnum | undefined;
    private 'ip_address': string | undefined;
    public constructor(status?: any, id?: any, subnetId?: any, tenantId?: any, deviceOwner?: any, ipAddress?: any) { 
        this['status'] = status;
        this['id'] = id;
        this['subnet_id'] = subnetId;
        this['tenant_id'] = tenantId;
        this['device_owner'] = deviceOwner;
        this['ip_address'] = ipAddress;
    }
    public withStatus(status: PrivateipStatusEnum): Privateip {
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
    public set subnetId(subnetId: string | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId() {
        return this['subnet_id'];
    }
    public withTenantId(tenantId: string): Privateip {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withDeviceOwner(deviceOwner: PrivateipDeviceOwnerEnum): Privateip {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: PrivateipDeviceOwnerEnum | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withIpAddress(ipAddress: string): Privateip {
        this['ip_address'] = ipAddress;
        return this;
    }
    public set ipAddress(ipAddress: string | undefined) {
        this['ip_address'] = ipAddress;
    }
    public get ipAddress() {
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
