

export class ListPortsRequest {
    public id?: Array<string>;
    public name?: Array<string>;
    private 'admin_state_up'?: boolean;
    public status?: string;
    private 'virsubnet_id'?: Array<string>;
    private 'device_id'?: Array<string>;
    private 'mac_address'?: Array<string>;
    private 'device_owner'?: Array<string>;
    private 'device_owner_prefixlike'?: string;
    public description?: Array<string>;
    private 'binding:host_id'?: Array<string>;
    private 'private_ips'?: Array<string>;
    private 'security_groups'?: Array<string>;
    private 'vpc_id'?: Array<string>;
    private 'allowed_address_pairs'?: Array<string>;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    public constructor() { 
    }
    public withId(id: Array<string>): ListPortsRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: Array<string>): ListPortsRequest {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListPortsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withStatus(status: string): ListPortsRequest {
        this['status'] = status;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListPortsRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withDeviceId(deviceId: Array<string>): ListPortsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: Array<string>  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): Array<string> | undefined {
        return this['device_id'];
    }
    public withMacAddress(macAddress: Array<string>): ListPortsRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: Array<string>  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): Array<string> | undefined {
        return this['mac_address'];
    }
    public withDeviceOwner(deviceOwner: Array<string>): ListPortsRequest {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: Array<string>  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): Array<string> | undefined {
        return this['device_owner'];
    }
    public withDeviceOwnerPrefixlike(deviceOwnerPrefixlike: string): ListPortsRequest {
        this['device_owner_prefixlike'] = deviceOwnerPrefixlike;
        return this;
    }
    public set deviceOwnerPrefixlike(deviceOwnerPrefixlike: string  | undefined) {
        this['device_owner_prefixlike'] = deviceOwnerPrefixlike;
    }
    public get deviceOwnerPrefixlike(): string | undefined {
        return this['device_owner_prefixlike'];
    }
    public withDescription(description: Array<string>): ListPortsRequest {
        this['description'] = description;
        return this;
    }
    public withBindingHostId(bindingHostId: Array<string>): ListPortsRequest {
        this['binding:host_id'] = bindingHostId;
        return this;
    }
    public set bindingHostId(bindingHostId: Array<string>  | undefined) {
        this['binding:host_id'] = bindingHostId;
    }
    public get bindingHostId(): Array<string> | undefined {
        return this['binding:host_id'];
    }
    public withPrivateIps(privateIps: Array<string>): ListPortsRequest {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<string>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<string> | undefined {
        return this['private_ips'];
    }
    public withSecurityGroups(securityGroups: Array<string>): ListPortsRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withVpcId(vpcId: Array<string>): ListPortsRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<string>): ListPortsRequest {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<string>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<string> | undefined {
        return this['allowed_address_pairs'];
    }
    public withInstanceId(instanceId: string): ListPortsRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): ListPortsRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
}