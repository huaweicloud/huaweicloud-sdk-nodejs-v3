
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateClusterResponse extends SdkResponse {
    private 'cluster_id'?: string;
    private 'cluster_name'?: string;
    public description?: string;
    public version?: string;
    public state?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'is_upgradeable'?: boolean;
    public constructor() { 
        super();
    }
    public withClusterId(clusterId: string): CreateClusterResponse {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withClusterName(clusterName: string): CreateClusterResponse {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withDescription(description: string): CreateClusterResponse {
        this['description'] = description;
        return this;
    }
    public withVersion(version: string): CreateClusterResponse {
        this['version'] = version;
        return this;
    }
    public withState(state: string): CreateClusterResponse {
        this['state'] = state;
        return this;
    }
    public withCreateTime(createTime: string): CreateClusterResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateClusterResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withIsUpgradeable(isUpgradeable: boolean): CreateClusterResponse {
        this['is_upgradeable'] = isUpgradeable;
        return this;
    }
    public set isUpgradeable(isUpgradeable: boolean  | undefined) {
        this['is_upgradeable'] = isUpgradeable;
    }
    public get isUpgradeable(): boolean | undefined {
        return this['is_upgradeable'];
    }
}