import { DataNodes } from './DataNodes';
import { Shards } from './Shards';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInstanceDatabaseResponse extends SdkResponse {
    public shards?: Array<Shards>;
    public status?: string;
    public created?: string;
    public updated?: string;
    public name?: string;
    private 'shard_mode'?: string;
    private 'shard_number'?: number;
    private 'data_nodes'?: Array<DataNodes>;
    public constructor() { 
        super();
    }
    public withShards(shards: Array<Shards>): ShowInstanceDatabaseResponse {
        this['shards'] = shards;
        return this;
    }
    public withStatus(status: string): ShowInstanceDatabaseResponse {
        this['status'] = status;
        return this;
    }
    public withCreated(created: string): ShowInstanceDatabaseResponse {
        this['created'] = created;
        return this;
    }
    public withUpdated(updated: string): ShowInstanceDatabaseResponse {
        this['updated'] = updated;
        return this;
    }
    public withName(name: string): ShowInstanceDatabaseResponse {
        this['name'] = name;
        return this;
    }
    public withShardMode(shardMode: string): ShowInstanceDatabaseResponse {
        this['shard_mode'] = shardMode;
        return this;
    }
    public set shardMode(shardMode: string  | undefined) {
        this['shard_mode'] = shardMode;
    }
    public get shardMode(): string | undefined {
        return this['shard_mode'];
    }
    public withShardNumber(shardNumber: number): ShowInstanceDatabaseResponse {
        this['shard_number'] = shardNumber;
        return this;
    }
    public set shardNumber(shardNumber: number  | undefined) {
        this['shard_number'] = shardNumber;
    }
    public get shardNumber(): number | undefined {
        return this['shard_number'];
    }
    public withDataNodes(dataNodes: Array<DataNodes>): ShowInstanceDatabaseResponse {
        this['data_nodes'] = dataNodes;
        return this;
    }
    public set dataNodes(dataNodes: Array<DataNodes>  | undefined) {
        this['data_nodes'] = dataNodes;
    }
    public get dataNodes(): Array<DataNodes> | undefined {
        return this['data_nodes'];
    }
}