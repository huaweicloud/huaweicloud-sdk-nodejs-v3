

export class DeploymentGroup {
    public name?: string;
    private 'region_name'?: string;
    private 'project_id'?: string;
    public os?: DeploymentGroupOsEnum | string;
    private 'slave_cluster_id'?: string;
    public description?: string;
    private 'is_proxy_mode'?: number;
    public constructor(name?: string, regionName?: string, projectId?: string, os?: string) { 
        this['name'] = name;
        this['region_name'] = regionName;
        this['project_id'] = projectId;
        this['os'] = os;
    }
    public withName(name: string): DeploymentGroup {
        this['name'] = name;
        return this;
    }
    public withRegionName(regionName: string): DeploymentGroup {
        this['region_name'] = regionName;
        return this;
    }
    public set regionName(regionName: string  | undefined) {
        this['region_name'] = regionName;
    }
    public get regionName(): string | undefined {
        return this['region_name'];
    }
    public withProjectId(projectId: string): DeploymentGroup {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withOs(os: DeploymentGroupOsEnum | string): DeploymentGroup {
        this['os'] = os;
        return this;
    }
    public withSlaveClusterId(slaveClusterId: string): DeploymentGroup {
        this['slave_cluster_id'] = slaveClusterId;
        return this;
    }
    public set slaveClusterId(slaveClusterId: string  | undefined) {
        this['slave_cluster_id'] = slaveClusterId;
    }
    public get slaveClusterId(): string | undefined {
        return this['slave_cluster_id'];
    }
    public withDescription(description: string): DeploymentGroup {
        this['description'] = description;
        return this;
    }
    public withIsProxyMode(isProxyMode: number): DeploymentGroup {
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

/**
    * @export
    * @enum {string}
    */
export enum DeploymentGroupOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
