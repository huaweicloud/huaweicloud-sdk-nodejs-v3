

export class AssociationInfo {
    public id?: string;
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    private 'app_id'?: string;
    private 'app_name'?: string;
    private 'vpc_name'?: string;
    private 'subnet_name'?: string;
    private 'cluster_server_type'?: string;
    private 'vpcep_address'?: string;
    private 'update_time'?: number;
    private 'create_time'?: number;
    public constructor(id?: string, clusterId?: string, clusterName?: string, appId?: string, appName?: string, vpcName?: string, subnetName?: string, clusterServerType?: string, vpcepAddress?: string, updateTime?: number, createTime?: number) { 
        this['id'] = id;
        this['cluster_id'] = clusterId;
        this['cluster_name'] = clusterName;
        this['app_id'] = appId;
        this['app_name'] = appName;
        this['vpc_name'] = vpcName;
        this['subnet_name'] = subnetName;
        this['cluster_server_type'] = clusterServerType;
        this['vpcep_address'] = vpcepAddress;
        this['update_time'] = updateTime;
        this['create_time'] = createTime;
    }
    public withId(id: string): AssociationInfo {
        this['id'] = id;
        return this;
    }
    public withClusterId(clusterId: string): AssociationInfo {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): AssociationInfo {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withAppId(appId: string): AssociationInfo {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppName(appName: string): AssociationInfo {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withVpcName(vpcName: string): AssociationInfo {
        this['vpc_name'] = vpcName;
        return this;
    }
    public set vpcName(vpcName: string  | undefined) {
        this['vpc_name'] = vpcName;
    }
    public get vpcName(): string | undefined {
        return this['vpc_name'];
    }
    public withSubnetName(subnetName: string): AssociationInfo {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withClusterServerType(clusterServerType: string): AssociationInfo {
        this['cluster_server_type'] = clusterServerType;
        return this;
    }
    public set clusterServerType(clusterServerType: string  | undefined) {
        this['cluster_server_type'] = clusterServerType;
    }
    public get clusterServerType(): string | undefined {
        return this['cluster_server_type'];
    }
    public withVpcepAddress(vpcepAddress: string): AssociationInfo {
        this['vpcep_address'] = vpcepAddress;
        return this;
    }
    public set vpcepAddress(vpcepAddress: string  | undefined) {
        this['vpcep_address'] = vpcepAddress;
    }
    public get vpcepAddress(): string | undefined {
        return this['vpcep_address'];
    }
    public withUpdateTime(updateTime: number): AssociationInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withCreateTime(createTime: number): AssociationInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
}