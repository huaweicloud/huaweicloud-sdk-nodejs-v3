
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeploymentFormResponse extends SdkResponse {
    private 'initial_node_num'?: number;
    public solution?: string;
    private 'shard_num'?: number;
    private 'replica_num'?: number;
    private 'each_expand_nodes'?: number;
    private 'max_shard_count'?: number;
    private 'each_shard_num'?: number;
    public constructor() { 
        super();
    }
    public withInitialNodeNum(initialNodeNum: number): ShowDeploymentFormResponse {
        this['initial_node_num'] = initialNodeNum;
        return this;
    }
    public set initialNodeNum(initialNodeNum: number  | undefined) {
        this['initial_node_num'] = initialNodeNum;
    }
    public get initialNodeNum(): number | undefined {
        return this['initial_node_num'];
    }
    public withSolution(solution: string): ShowDeploymentFormResponse {
        this['solution'] = solution;
        return this;
    }
    public withShardNum(shardNum: number): ShowDeploymentFormResponse {
        this['shard_num'] = shardNum;
        return this;
    }
    public set shardNum(shardNum: number  | undefined) {
        this['shard_num'] = shardNum;
    }
    public get shardNum(): number | undefined {
        return this['shard_num'];
    }
    public withReplicaNum(replicaNum: number): ShowDeploymentFormResponse {
        this['replica_num'] = replicaNum;
        return this;
    }
    public set replicaNum(replicaNum: number  | undefined) {
        this['replica_num'] = replicaNum;
    }
    public get replicaNum(): number | undefined {
        return this['replica_num'];
    }
    public withEachExpandNodes(eachExpandNodes: number): ShowDeploymentFormResponse {
        this['each_expand_nodes'] = eachExpandNodes;
        return this;
    }
    public set eachExpandNodes(eachExpandNodes: number  | undefined) {
        this['each_expand_nodes'] = eachExpandNodes;
    }
    public get eachExpandNodes(): number | undefined {
        return this['each_expand_nodes'];
    }
    public withMaxShardCount(maxShardCount: number): ShowDeploymentFormResponse {
        this['max_shard_count'] = maxShardCount;
        return this;
    }
    public set maxShardCount(maxShardCount: number  | undefined) {
        this['max_shard_count'] = maxShardCount;
    }
    public get maxShardCount(): number | undefined {
        return this['max_shard_count'];
    }
    public withEachShardNum(eachShardNum: number): ShowDeploymentFormResponse {
        this['each_shard_num'] = eachShardNum;
        return this;
    }
    public set eachShardNum(eachShardNum: number  | undefined) {
        this['each_shard_num'] = eachShardNum;
    }
    public get eachShardNum(): number | undefined {
        return this['each_shard_num'];
    }
}