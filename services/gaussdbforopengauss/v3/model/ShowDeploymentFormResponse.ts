
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDeploymentFormResponse extends SdkResponse {
    private 'initial_node_num'?: number;
    public solution?: string;
    private 'shard_num'?: number;
    private 'replica_num'?: number;
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
}