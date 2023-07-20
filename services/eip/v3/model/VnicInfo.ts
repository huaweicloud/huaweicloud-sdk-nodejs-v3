

export class VnicInfo {
    private 'private_ip_address'?: string;
    private 'device_id'?: string;
    private 'device_owner'?: string;
    private 'vpc_id'?: string;
    private 'port_id'?: string;
    private 'port_profile'?: string;
    public mac?: string;
    public vtep?: string;
    public vni?: string;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    public constructor() { 
    }
    public withPrivateIpAddress(privateIpAddress: string): VnicInfo {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withDeviceId(deviceId: string): VnicInfo {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: string): VnicInfo {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withVpcId(vpcId: string): VnicInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withPortId(portId: string): VnicInfo {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withPortProfile(portProfile: string): VnicInfo {
        this['port_profile'] = portProfile;
        return this;
    }
    public set portProfile(portProfile: string  | undefined) {
        this['port_profile'] = portProfile;
    }
    public get portProfile(): string | undefined {
        return this['port_profile'];
    }
    public withMac(mac: string): VnicInfo {
        this['mac'] = mac;
        return this;
    }
    public withVtep(vtep: string): VnicInfo {
        this['vtep'] = vtep;
        return this;
    }
    public withVni(vni: string): VnicInfo {
        this['vni'] = vni;
        return this;
    }
    public withInstanceId(instanceId: string): VnicInfo {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): VnicInfo {
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