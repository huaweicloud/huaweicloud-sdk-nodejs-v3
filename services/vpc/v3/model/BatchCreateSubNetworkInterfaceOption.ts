import { AllowedAddressPair } from './AllowedAddressPair';


export class BatchCreateSubNetworkInterfaceOption {
    private 'virsubnet_id'?: string;
    private 'parent_id'?: string;
    private 'security_groups'?: Array<string>;
    public description?: string;
    private 'ipv6_enable'?: boolean;
    private 'project_id'?: string;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    public constructor(virsubnetId?: string, parentId?: string) { 
        this['virsubnet_id'] = virsubnetId;
        this['parent_id'] = parentId;
    }
    public withVirsubnetId(virsubnetId: string): BatchCreateSubNetworkInterfaceOption {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withParentId(parentId: string): BatchCreateSubNetworkInterfaceOption {
        this['parent_id'] = parentId;
        return this;
    }
    public set parentId(parentId: string  | undefined) {
        this['parent_id'] = parentId;
    }
    public get parentId(): string | undefined {
        return this['parent_id'];
    }
    public withSecurityGroups(securityGroups: Array<string>): BatchCreateSubNetworkInterfaceOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withDescription(description: string): BatchCreateSubNetworkInterfaceOption {
        this['description'] = description;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): BatchCreateSubNetworkInterfaceOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withProjectId(projectId: string): BatchCreateSubNetworkInterfaceOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): BatchCreateSubNetworkInterfaceOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
}