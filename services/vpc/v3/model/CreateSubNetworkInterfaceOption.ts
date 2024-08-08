import { AllowedAddressPair } from './AllowedAddressPair';
import { ResourceTag } from './ResourceTag';


export class CreateSubNetworkInterfaceOption {
    private 'virsubnet_id'?: string;
    private 'vlan_id'?: string;
    private 'parent_id'?: string;
    public description?: string;
    private 'ipv6_enable'?: boolean;
    private 'private_ip_address'?: string;
    private 'ipv6_ip_address'?: string;
    private 'security_groups'?: Array<string>;
    private 'project_id'?: string;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    public tags?: Array<ResourceTag>;
    public constructor(virsubnetId?: string, parentId?: string) { 
        this['virsubnet_id'] = virsubnetId;
        this['parent_id'] = parentId;
    }
    public withVirsubnetId(virsubnetId: string): CreateSubNetworkInterfaceOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVlanId(vlanId: string): CreateSubNetworkInterfaceOption {
        this['vlan_id'] = vlanId;
        return this;
    }
    public set vlanId(vlanId: string  | undefined) {
        this['vlan_id'] = vlanId;
    }
    public get vlanId(): string | undefined {
        return this['vlan_id'];
    }
    public withParentId(parentId: string): CreateSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
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
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withPrivateIpAddress(privateIpAddress: string): CreateSubNetworkInterfaceOption {
        this['private_ip_address'] = privateIpAddress;
        return this;
    }
    public set privateIpAddress(privateIpAddress: string  | undefined) {
        this['private_ip_address'] = privateIpAddress;
    }
    public get privateIpAddress(): string | undefined {
        return this['private_ip_address'];
    }
    public withIpv6IpAddress(ipv6IpAddress: string): CreateSubNetworkInterfaceOption {
        this['ipv6_ip_address'] = ipv6IpAddress;
        return this;
    }
    public set ipv6IpAddress(ipv6IpAddress: string  | undefined) {
        this['ipv6_ip_address'] = ipv6IpAddress;
    }
    public get ipv6IpAddress(): string | undefined {
        return this['ipv6_ip_address'];
    }
    public withSecurityGroups(securityGroups: Array<string>): CreateSubNetworkInterfaceOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withProjectId(projectId: string): CreateSubNetworkInterfaceOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): CreateSubNetworkInterfaceOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
    public withInstanceId(instanceId: string): CreateSubNetworkInterfaceOption {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): CreateSubNetworkInterfaceOption {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withTags(tags: Array<ResourceTag>): CreateSubNetworkInterfaceOption {
        this['tags'] = tags;
        return this;
    }
}