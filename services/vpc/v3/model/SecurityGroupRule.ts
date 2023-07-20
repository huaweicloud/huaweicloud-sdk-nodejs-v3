

export class SecurityGroupRule {
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
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'project_id'?: string;
    public constructor(id?: string, description?: string, securityGroupId?: string, direction?: string, protocol?: string, ethertype?: string, multiport?: string, action?: string, priority?: number, remoteGroupId?: string, remoteIpPrefix?: string, remoteAddressGroupId?: string, createdAt?: Date, updatedAt?: Date, projectId?: string) { 
        this['id'] = id;
        this['description'] = description;
        this['security_group_id'] = securityGroupId;
        this['direction'] = direction;
        this['protocol'] = protocol;
        this['ethertype'] = ethertype;
        this['multiport'] = multiport;
        this['action'] = action;
        this['priority'] = priority;
        this['remote_group_id'] = remoteGroupId;
        this['remote_ip_prefix'] = remoteIpPrefix;
        this['remote_address_group_id'] = remoteAddressGroupId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['project_id'] = projectId;
    }
    public withId(id: string): SecurityGroupRule {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): SecurityGroupRule {
        this['description'] = description;
        return this;
    }
    public withSecurityGroupId(securityGroupId: string): SecurityGroupRule {
        this['security_group_id'] = securityGroupId;
        return this;
    }
    public set securityGroupId(securityGroupId: string  | undefined) {
        this['security_group_id'] = securityGroupId;
    }
    public get securityGroupId(): string | undefined {
        return this['security_group_id'];
    }
    public withDirection(direction: string): SecurityGroupRule {
        this['direction'] = direction;
        return this;
    }
    public withProtocol(protocol: string): SecurityGroupRule {
        this['protocol'] = protocol;
        return this;
    }
    public withEthertype(ethertype: string): SecurityGroupRule {
        this['ethertype'] = ethertype;
        return this;
    }
    public withMultiport(multiport: string): SecurityGroupRule {
        this['multiport'] = multiport;
        return this;
    }
    public withAction(action: string): SecurityGroupRule {
        this['action'] = action;
        return this;
    }
    public withPriority(priority: number): SecurityGroupRule {
        this['priority'] = priority;
        return this;
    }
    public withRemoteGroupId(remoteGroupId: string): SecurityGroupRule {
        this['remote_group_id'] = remoteGroupId;
        return this;
    }
    public set remoteGroupId(remoteGroupId: string  | undefined) {
        this['remote_group_id'] = remoteGroupId;
    }
    public get remoteGroupId(): string | undefined {
        return this['remote_group_id'];
    }
    public withRemoteIpPrefix(remoteIpPrefix: string): SecurityGroupRule {
        this['remote_ip_prefix'] = remoteIpPrefix;
        return this;
    }
    public set remoteIpPrefix(remoteIpPrefix: string  | undefined) {
        this['remote_ip_prefix'] = remoteIpPrefix;
    }
    public get remoteIpPrefix(): string | undefined {
        return this['remote_ip_prefix'];
    }
    public withRemoteAddressGroupId(remoteAddressGroupId: string): SecurityGroupRule {
        this['remote_address_group_id'] = remoteAddressGroupId;
        return this;
    }
    public set remoteAddressGroupId(remoteAddressGroupId: string  | undefined) {
        this['remote_address_group_id'] = remoteAddressGroupId;
    }
    public get remoteAddressGroupId(): string | undefined {
        return this['remote_address_group_id'];
    }
    public withCreatedAt(createdAt: Date): SecurityGroupRule {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): SecurityGroupRule {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withProjectId(projectId: string): SecurityGroupRule {
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