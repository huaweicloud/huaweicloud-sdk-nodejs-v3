

export class ListSubNetworkInterfacesRequest {
    public limit?: number;
    public marker?: string;
    public id?: Array<string>;
    private 'virsubnet_id'?: Array<string>;
    private 'private_ip_address'?: Array<string>;
    private 'mac_address'?: Array<string>;
    private 'vpc_id'?: Array<string>;
    public description?: Array<string>;
    private 'parent_id'?: Array<string>;
    private 'enable_eip'?: boolean;
    public scope?: string;
    private 'security_groups'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'parent_device_id'?: Array<string>;
    private 'vlan_id'?: Array<number>;
    public state?: Array<string>;
    private 'ipv6_ip_address'?: Array<string>;
    private 'instance_id'?: Array<string>;
    private 'instance_type'?: Array<string>;
    public constructor() { 
    }
    public withLimit(limit: number): ListSubNetworkInterfacesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSubNetworkInterfacesRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: Array<string>): ListSubNetworkInterfacesRequest {
        this['id'] = id;
        return this;
    }
    public withVirsubnetId(virsubnetId: Array<string>): ListSubNetworkInterfacesRequest {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: Array<string>  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): Array<string> | undefined {
        return this['virsubnet_id'];
    }
    public withPrivateIpAddress(privateIpAddress: Array<string>): ListSubNetworkInterfacesRequest {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: Array<string>  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): Array<string> | undefined {
        return this['private_ip_address'];
    }
    public withMacAddress(macAddress: Array<string>): ListSubNetworkInterfacesRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: Array<string>  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): Array<string> | undefined {
        return this['mac_address'];
    }
    public withVpcId(vpcId: Array<string>): ListSubNetworkInterfacesRequest {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: Array<string>  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): Array<string> | undefined {
        return this['vpc_id'];
    }
    public withDescription(description: Array<string>): ListSubNetworkInterfacesRequest {
        this['description'] = description;
        return this;
    }
    public withParentId(parentId: Array<string>): ListSubNetworkInterfacesRequest {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: Array<string>  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): Array<string> | undefined {
        return this['parent_id'];
    }
    public withEnableEip(enableEip: boolean): ListSubNetworkInterfacesRequest {
        this['enable_eip'] = enableEip;
        return this;
    }
    public set enableEip(enableEip: boolean  | undefined) {
        this['enable_eip'] = enableEip;
    }
    public get enableEip(): boolean | undefined {
        return this['enable_eip'];
    }
    public withScope(scope: string): ListSubNetworkInterfacesRequest {
        this['scope'] = scope;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): ListSubNetworkInterfacesRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListSubNetworkInterfacesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withParentDeviceId(parentDeviceId: Array<string>): ListSubNetworkInterfacesRequest {
        this['parent_device_id'] = parentDeviceId;
        return this;
    }
    public set parentDeviceId(parentDeviceId: Array<string>  | undefined) {
        this['parent_device_id'] = parentDeviceId;
    }
    public get parentDeviceId(): Array<string> | undefined {
        return this['parent_device_id'];
    }
    public withVlanId(vlanId: Array<number>): ListSubNetworkInterfacesRequest {
        this['vlan_id'] = vlanId;
        return this;
    }
    public set vlanId(vlanId: Array<number>  | undefined) {
        this['vlan_id'] = vlanId;
    }
    public get vlanId(): Array<number> | undefined {
        return this['vlan_id'];
    }
    public withState(state: Array<string>): ListSubNetworkInterfacesRequest {
        this['state'] = state;
        return this;
    }
    public withIpv6IpAddress(ipv6IpAddress: Array<string>): ListSubNetworkInterfacesRequest {
        this['ipv6_ip_address'] = ipv6IpAddress;
        return this;
    }
    public set ipv6IpAddress(ipv6IpAddress: Array<string>  | undefined) {
        this['ipv6_ip_address'] = ipv6IpAddress;
    }
    public get ipv6IpAddress(): Array<string> | undefined {
        return this['ipv6_ip_address'];
    }
    public withInstanceId(instanceId: Array<string>): ListSubNetworkInterfacesRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: Array<string>  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): Array<string> | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: Array<string>): ListSubNetworkInterfacesRequest {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: Array<string>  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): Array<string> | undefined {
        return this['instance_type'];
    }
}