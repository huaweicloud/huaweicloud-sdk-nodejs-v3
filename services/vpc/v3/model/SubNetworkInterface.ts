

export class SubNetworkInterface {
    public id?: string;
    private 'virsubnet_id'?: string;
    private 'private_ip_address'?: string;
    private 'ipv6_ip_address'?: string;
    private 'mac_address'?: string;
    private 'parent_device_id'?: string;
    private 'parent_id'?: string;
    public description?: string;
    private 'vpc_id'?: string;
    private 'vlan_id'?: number;
    private 'security_groups'?: Array<string>;
    public tags?: Array<string>;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'security_enabled'?: boolean;
    public constructor(id?: string, virsubnetId?: string, privateIpAddress?: string, ipv6IpAddress?: string, macAddress?: string, parentDeviceId?: string, parentId?: string, description?: string, vpcId?: string, vlanId?: number, securityGroups?: Array<string>, tags?: Array<string>, projectId?: string, createdAt?: Date, securityEnabled?: boolean) { 
        this['id'] = id;
        this['virsubnet_id'] = virsubnetId;
        this['private_ip_address'] = privateIpAddress;
        this['ipv6_ip_address'] = ipv6IpAddress;
        this['mac_address'] = macAddress;
        this['parent_device_id'] = parentDeviceId;
        this['parent_id'] = parentId;
        this['description'] = description;
        this['vpc_id'] = vpcId;
        this['vlan_id'] = vlanId;
        this['security_groups'] = securityGroups;
        this['tags'] = tags;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['security_enabled'] = securityEnabled;
    }
    public withId(id: string): SubNetworkInterface {
        this['id'] = id;
        return this;
    }
    public withVirsubnetId(virsubnetId: string): SubNetworkInterface {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withPrivateIpAddress(privateIpAddress: string): SubNetworkInterface {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withIpv6IpAddress(ipv6IpAddress: string): SubNetworkInterface {
        this['ipv6_ip_address'] = ipv6IpAddress;
        return this;
    }
    public set ipv6IpAddress(ipv6IpAddress: string  | undefined) {
        this['ipv6_ip_address'] = ipv6IpAddress;
    }
    public get ipv6IpAddress(): string | undefined {
        return this['ipv6_ip_address'];
    }
    public withMacAddress(macAddress: string): SubNetworkInterface {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
    public withParentDeviceId(parentDeviceId: string): SubNetworkInterface {
        this['parent_device_id'] = parentDeviceId;
        return this;
    }
    public set parentDeviceId(parentDeviceId: string  | undefined) {
        this['parent_device_id'] = parentDeviceId;
    }
    public get parentDeviceId(): string | undefined {
        return this['parent_device_id'];
    }
    public withParentId(parentId: string): SubNetworkInterface {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withDescription(description: string): SubNetworkInterface {
        this['description'] = description;
        return this;
    }
    public withVpcId(vpcId: string): SubNetworkInterface {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVlanId(vlanId: number): SubNetworkInterface {
        this['vlan_id'] = vlanId;
        return this;
    }
    public set vlanId(vlanId: number  | undefined) {
        this['vlan_id'] = vlanId;
    }
    public get vlanId(): number | undefined {
        return this['vlan_id'];
    }
    public withSecurityGroups(securityGroups: Array<string>): SubNetworkInterface {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withTags(tags: Array<string>): SubNetworkInterface {
        this['tags'] = tags;
        return this;
    }
    public withProjectId(projectId: string): SubNetworkInterface {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): SubNetworkInterface {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withSecurityEnabled(securityEnabled: boolean): SubNetworkInterface {
        this['security_enabled'] = securityEnabled;
        return this;
    }
    public set securityEnabled(securityEnabled: boolean  | undefined) {
        this['security_enabled'] = securityEnabled;
    }
    public get securityEnabled(): boolean | undefined {
        return this['security_enabled'];
    }
}