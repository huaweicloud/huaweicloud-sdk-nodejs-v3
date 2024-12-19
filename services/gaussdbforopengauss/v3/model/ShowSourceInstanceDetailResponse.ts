
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowSourceInstanceDetailResponse extends SdkResponse {
    private 'cluster_mode'?: ShowSourceInstanceDetailResponseClusterModeEnum | string;
    private 'instance_mode'?: ShowSourceInstanceDetailResponseInstanceModeEnum | string;
    private 'data_volume_size'?: string;
    public solution?: ShowSourceInstanceDetailResponseSolutionEnum | string;
    private 'node_num'?: number;
    private 'coordinator_num'?: number;
    private 'sharding_num'?: number;
    private 'replica_num'?: number;
    private 'engine_version'?: string;
    public constructor() { 
        super();
    }
    public withClusterMode(clusterMode: ShowSourceInstanceDetailResponseClusterModeEnum | string): ShowSourceInstanceDetailResponse {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: ShowSourceInstanceDetailResponseClusterModeEnum | string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): ShowSourceInstanceDetailResponseClusterModeEnum | string | undefined {
        return this['cluster_mode'];
    }
    public withInstanceMode(instanceMode: ShowSourceInstanceDetailResponseInstanceModeEnum | string): ShowSourceInstanceDetailResponse {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: ShowSourceInstanceDetailResponseInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): ShowSourceInstanceDetailResponseInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
    public withDataVolumeSize(dataVolumeSize: string): ShowSourceInstanceDetailResponse {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: string  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): string | undefined {
        return this['data_volume_size'];
    }
    public withSolution(solution: ShowSourceInstanceDetailResponseSolutionEnum | string): ShowSourceInstanceDetailResponse {
        this['solution'] = solution;
        return this;
    }
    public withNodeNum(nodeNum: number): ShowSourceInstanceDetailResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withCoordinatorNum(coordinatorNum: number): ShowSourceInstanceDetailResponse {
        this['coordinator_num'] = coordinatorNum;
        return this;
    }
    public set coordinatorNum(coordinatorNum: number  | undefined) {
        this['coordinator_num'] = coordinatorNum;
    }
    public get coordinatorNum(): number | undefined {
        return this['coordinator_num'];
    }
    public withShardingNum(shardingNum: number): ShowSourceInstanceDetailResponse {
        this['sharding_num'] = shardingNum;
        return this;
    }
    public set shardingNum(shardingNum: number  | undefined) {
        this['sharding_num'] = shardingNum;
    }
    public get shardingNum(): number | undefined {
        return this['sharding_num'];
    }
    public withReplicaNum(replicaNum: number): ShowSourceInstanceDetailResponse {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withEngineVersion(engineVersion: string): ShowSourceInstanceDetailResponse {
        this['engine_version'] = engineVersion;
        return this;
    }
    public set engineVersion(engineVersion: string  | undefined) {
        this['engine_version'] = engineVersion;
    }
    public get engineVersion(): string | undefined {
        return this['engine_version'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ShowSourceInstanceDetailResponseClusterModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSourceInstanceDetailResponseInstanceModeEnum {
    BASIC = 'basic',
    STANDARD = 'standard',
    ENTERPRISE = 'enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowSourceInstanceDetailResponseSolutionEnum {
    TRISET = 'triset',
    HWS = 'hws'
}
