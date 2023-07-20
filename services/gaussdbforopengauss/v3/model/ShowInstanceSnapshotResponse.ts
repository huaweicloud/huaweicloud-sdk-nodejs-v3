
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceSnapshotResponse extends SdkResponse {
    private 'cluster_mode'?: ShowInstanceSnapshotResponseClusterModeEnum | string;
    private 'instance_mode'?: ShowInstanceSnapshotResponseInstanceModeEnum | string;
    private 'data_volume_size'?: string;
    public solution?: ShowInstanceSnapshotResponseSolutionEnum | string;
    private 'node_num'?: number;
    private 'coordinator_num'?: number;
    private 'sharding_num'?: number;
    private 'replica_num'?: number;
    private 'engine_version'?: string;
    public constructor() { 
        super();
    }
    public withClusterMode(clusterMode: ShowInstanceSnapshotResponseClusterModeEnum | string): ShowInstanceSnapshotResponse {
        this['cluster_mode'] = clusterMode;
        return this;
    }
    public set clusterMode(clusterMode: ShowInstanceSnapshotResponseClusterModeEnum | string  | undefined) {
        this['cluster_mode'] = clusterMode;
    }
    public get clusterMode(): ShowInstanceSnapshotResponseClusterModeEnum | string | undefined {
        return this['cluster_mode'];
    }
    public withInstanceMode(instanceMode: ShowInstanceSnapshotResponseInstanceModeEnum | string): ShowInstanceSnapshotResponse {
        this['instance_mode'] = instanceMode;
        return this;
    }
    public set instanceMode(instanceMode: ShowInstanceSnapshotResponseInstanceModeEnum | string  | undefined) {
        this['instance_mode'] = instanceMode;
    }
    public get instanceMode(): ShowInstanceSnapshotResponseInstanceModeEnum | string | undefined {
        return this['instance_mode'];
    }
    public withDataVolumeSize(dataVolumeSize: string): ShowInstanceSnapshotResponse {
        this['data_volume_size'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: string  | undefined) {
        this['data_volume_size'] = dataVolumeSize;
    }
    public get dataVolumeSize(): string | undefined {
        return this['data_volume_size'];
    }
    public withSolution(solution: ShowInstanceSnapshotResponseSolutionEnum | string): ShowInstanceSnapshotResponse {
        this['solution'] = solution;
        return this;
    }
    public withNodeNum(nodeNum: number): ShowInstanceSnapshotResponse {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withCoordinatorNum(coordinatorNum: number): ShowInstanceSnapshotResponse {
        this['coordinator_num'] = coordinatorNum;
        return this;
    }
    public set coordinatorNum(coordinatorNum: number  | undefined) {
        this['coordinator_num'] = coordinatorNum;
    }
    public get coordinatorNum(): number | undefined {
        return this['coordinator_num'];
    }
    public withShardingNum(shardingNum: number): ShowInstanceSnapshotResponse {
        this['sharding_num'] = shardingNum;
        return this;
    }
    public set shardingNum(shardingNum: number  | undefined) {
        this['sharding_num'] = shardingNum;
    }
    public get shardingNum(): number | undefined {
        return this['sharding_num'];
    }
    public withReplicaNum(replicaNum: number): ShowInstanceSnapshotResponse {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withEngineVersion(engineVersion: string): ShowInstanceSnapshotResponse {
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
export enum ShowInstanceSnapshotResponseClusterModeEnum {
    HA = 'Ha',
    INDEPENDENT = 'Independent'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceSnapshotResponseInstanceModeEnum {
    BASIC = 'basic',
    STANDARD = 'standard',
    ENTERPRISE = 'enterprise'
}
/**
    * @export
    * @enum {string}
    */
export enum ShowInstanceSnapshotResponseSolutionEnum {
    TRISET = 'triset',
    HWS = 'hws'
}
