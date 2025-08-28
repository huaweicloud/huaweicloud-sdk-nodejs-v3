import { DatabaseDnInstances } from './DatabaseDnInstances';


export class CreateDdmDatabaseRequestBody {
    public name?: string;
    private 'shard_mode'?: string;
    private 'shard_number'?: number;
    private 'dn_instances'?: Array<DatabaseDnInstances>;
    public constructor(name?: string, shardMode?: string, shardNumber?: number, dnInstances?: Array<DatabaseDnInstances>) { 
        this['name'] = name;
        this['shard_mode'] = shardMode;
        this['shard_number'] = shardNumber;
        this['dn_instances'] = dnInstances;
    }
    public withName(name: string): CreateDdmDatabaseRequestBody {
        this['name'] = name;
        return this;
    }
    public withShardMode(shardMode: string): CreateDdmDatabaseRequestBody {
        this['shard_mode'] = shardMode;
        return this;
    }
    public set shardMode(shardMode: string  | undefined) {
        this['shard_mode'] = shardMode;
    }
    public get shardMode(): string | undefined {
        return this['shard_mode'];
    }
    public withShardNumber(shardNumber: number): CreateDdmDatabaseRequestBody {
        this['shard_number'] = shardNumber;
        return this;
    }
    public set shardNumber(shardNumber: number  | undefined) {
        this['shard_number'] = shardNumber;
    }
    public get shardNumber(): number | undefined {
        return this['shard_number'];
    }
    public withDnInstances(dnInstances: Array<DatabaseDnInstances>): CreateDdmDatabaseRequestBody {
        this['dn_instances'] = dnInstances;
        return this;
    }
    public set dnInstances(dnInstances: Array<DatabaseDnInstances>  | undefined) {
        this['dn_instances'] = dnInstances;
    }
    public get dnInstances(): Array<DatabaseDnInstances> | undefined {
        return this['dn_instances'];
    }
}