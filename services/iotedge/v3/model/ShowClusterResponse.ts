
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterResponse extends SdkResponse {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public description?: string;
    public version?: string;
    public state?: string;
    public os?: string;
    public arch?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
        super();
    }
    public withClusterId(clusterId: string): ShowClusterResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): ShowClusterResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDescription(description: string): ShowClusterResponse {
        this['description'] = description;
        return this;
    }
    public withVersion(version: string): ShowClusterResponse {
        this['version'] = version;
        return this;
    }
    public withState(state: string): ShowClusterResponse {
        this['state'] = state;
        return this;
    }
    public withOs(os: string): ShowClusterResponse {
        this['os'] = os;
        return this;
    }
    public withArch(arch: string): ShowClusterResponse {
        this['arch'] = arch;
        return this;
    }
    public withCreateTime(createTime: string): ShowClusterResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ShowClusterResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}