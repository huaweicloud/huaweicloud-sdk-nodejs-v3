

export class HwcSubnetSecurityGroupRule {
    public id?: string;
    public description?: string;
    private 'security_group_id'?: string;
    public direction?: string;
    public protocol?: string;
    public ethertype?: string;
    public multiport?: string;
    public action?: string;
    public priority?: number;
    private 'remote_group_id'?: string;
    private 'remote_ip_prefix'?: string;
    private 'remote_address_group_id'?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'project_id'?: string;
    public constructor(id?: string, securityGroupId?: string, direction?: string, protocol?: string, ethertype?: string, multiport?: string, action?: string, priority?: number, createdAt?: string, updatedAt?: string, projectId?: string) { 
        this['id'] = id;
        this['security_group_id'] = securityGroupId;
        this['direction'] = direction;
        this['protocol'] = protocol;
        this['ethertype'] = ethertype;
        this['multiport'] = multiport;
        this['action'] = action;
        this['priority'] = priority;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['project_id'] = projectId;
    }
    public withId(id: string): HwcSubnetSecurityGroupRule {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): HwcSubnetSecurityGroupRule {
        this['description'] = description;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): HwcSubnetSecurityGroupRule {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withDirection(direction: string): HwcSubnetSecurityGroupRule {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): HwcSubnetSecurityGroupRule {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): HwcSubnetSecurityGroupRule {
        this['ethertype'] = ethertype;
        return this;
    }
    public withMultiport(multiport: string): HwcSubnetSecurityGroupRule {
        this['multiport'] = multiport;
        return this;
    }
    public withAction(action: string): HwcSubnetSecurityGroupRule {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): HwcSubnetSecurityGroupRule {
        this['priority'] = priority;
        return this;
    }
    public withRemoteGroupId(remoteGroupId: string): HwcSubnetSecurityGroupRule {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): string | undefined {
        return this['remote_group_id'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): HwcSubnetSecurityGroupRule {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): HwcSubnetSecurityGroupRule {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): string | undefined {
        return this['remote_address_group_id'];
    }
    public withCreatedAt(createdAt: string): HwcSubnetSecurityGroupRule {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): HwcSubnetSecurityGroupRule {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): HwcSubnetSecurityGroupRule {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
}