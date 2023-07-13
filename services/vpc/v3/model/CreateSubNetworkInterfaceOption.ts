

export class CreateSubNetworkInterfaceOption {
    private 'virsubnet_id': string | undefined;
    private 'vlan_id'?: string | undefined;
    private 'parent_id': string | undefined;
    public description?: string;
    private 'ipv6_enable'?: boolean | undefined;
    private 'private_ip_address'?: string | undefined;
    private 'ipv6_ip_address'?: string | undefined;
    private 'security_groups'?: Array<string> | undefined;
    private 'project_id'?: string | undefined;
    public constructor(virsubnetId?: any, parentId?: any) { 
        this['virsubnet_id'] = virsubnetId;
        this['parent_id'] = parentId;
    }
    public withVirsubnetId(virsubnetId: string): CreateSubNetworkInterfaceOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId() {
        return this['virsubnet_id'];
    }
    public withVlanId(vlanId: string): CreateSubNetworkInterfaceOption {
        this['vlan_id'] = vlanId;
        return this;
    }
    public set vlanId(vlanId: string | undefined) {
        this['vlan_id'] = vlanId;
    }
    public get vlanId() {
        return this['vlan_id'];
    }
    public withParentId(parentId: string): CreateSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId() {
        return this['parent_id'];
    }
    public withDescription(description: string): CreateSubNetworkInterfaceOption {
        this['description'] = description;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateSubNetworkInterfaceOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withPrivateIpAddress(privateIpAddress: string): CreateSubNetworkInterfaceOption {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress() {
        return this['private_ip_address'];
    }
    public withIpv6IpAddress(ipv6IpAddress: string): CreateSubNetworkInterfaceOption {
        this['ipv6_ip_address'] = ipv6IpAddress;
        return this;
    }
    public set ipv6IpAddress(ipv6IpAddress: string | undefined) {
        this['ipv6_ip_address'] = ipv6IpAddress;
    }
    public get ipv6IpAddress() {
        return this['ipv6_ip_address'];
    }
    public withSecurityGroups(securityGroups: Array<string>): CreateSubNetworkInterfaceOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withProjectId(projectId: string): CreateSubNetworkInterfaceOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
}