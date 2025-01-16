import { PermissionClusterDetail } from './PermissionClusterDetail';


export class HostClusterInfo {
    public id?: string;
    private 'host_count'?: number;
    public name?: string;
    private 'project_id'?: string;
    public os?: string;
    private 'slave_cluster_id'?: string;
    public description?: string;
    public permission?: PermissionClusterDetail;
    private 'nick_name'?: string;
    private 'env_count'?: number;
    private 'is_proxy_mode'?: number;
    public constructor() { 
    }
    public withId(id: string): HostClusterInfo {
        this['id'] = id;
        return this;
    }
    public withHostCount(hostCount: number): HostClusterInfo {
        this['host_count'] = hostCount;
        return this;
    }
    public set hostCount(hostCount: number  | undefined) {
        this['host_count'] = hostCount;
    }
    public get hostCount(): number | undefined {
        return this['host_count'];
    }
    public withName(name: string): HostClusterInfo {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): HostClusterInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOs(os: string): HostClusterInfo {
        this['os'] = os;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): HostClusterInfo {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withDescription(description: string): HostClusterInfo {
        this['description'] = description;
        return this;
    }
    public withPermission(permission: PermissionClusterDetail): HostClusterInfo {
        this['permission'] = permission;
        return this;
    }
    public withNickName(nickName: string): HostClusterInfo {
        this['nick_name'] = nickName;
        return this;
    }
    public set nickName(nickName: string  | undefined) {
        this['nick_name'] = nickName;
    }
    public get nickName(): string | undefined {
        return this['nick_name'];
    }
    public withEnvCount(envCount: number): HostClusterInfo {
        this['env_count'] = envCount;
        return this;
    }
    public set envCount(envCount: number  | undefined) {
        this['env_count'] = envCount;
    }
    public get envCount(): number | undefined {
        return this['env_count'];
    }
    public withIsProxyMode(isProxyMode: number): HostClusterInfo {
        this['is_proxy_mode'] = isProxyMode;
        return this;
    }
    public set isProxyMode(isProxyMode: number  | undefined) {
        this['is_proxy_mode'] = isProxyMode;
    }
    public get isProxyMode(): number | undefined {
        return this['is_proxy_mode'];
    }
}