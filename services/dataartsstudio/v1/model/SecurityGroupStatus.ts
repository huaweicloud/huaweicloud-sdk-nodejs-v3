

export class SecurityGroupStatus {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'security_group_name'?: string;
    private 'group_description'?: string;
    public constructor() { 
    }
    public withClusterId(clusterId: string): SecurityGroupStatus {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): SecurityGroupStatus {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withSecurityGroupName(securityGroupName: string): SecurityGroupStatus {
        this['security_group_name'] = securityGroupName;
        return this;
    }
    public set securityGroupName(securityGroupName: string  | undefined) {
        this['security_group_name'] = securityGroupName;
    }
    public get securityGroupName(): string | undefined {
        return this['security_group_name'];
    }
    public withGroupDescription(groupDescription: string): SecurityGroupStatus {
        this['group_description'] = groupDescription;
        return this;
    }
    public set groupDescription(groupDescription: string  | undefined) {
        this['group_description'] = groupDescription;
    }
    public get groupDescription(): string | undefined {
        return this['group_description'];
    }
}