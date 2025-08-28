import { DatabaseInstabcesParam } from './DatabaseInstabcesParam';


export class CreateDatabaseDetail {
    public name?: string;
    private 'shard_mode'?: CreateDatabaseDetailShardModeEnum | string;
    private 'shard_number'?: number;
    private 'shard_unit'?: number;
    private 'used_rds'?: Array<DatabaseInstabcesParam>;
    public constructor(name?: string, shardMode?: string, shardNumber?: number, usedRds?: Array<DatabaseInstabcesParam>) { 
        this['name'] = name;
        this['shard_mode'] = shardMode;
        this['shard_number'] = shardNumber;
        this['used_rds'] = usedRds;
    }
    public withName(name: string): CreateDatabaseDetail {
        this['name'] = name;
        return this;
    }
    public withShardMode(shardMode: CreateDatabaseDetailShardModeEnum | string): CreateDatabaseDetail {
        this['shard_mode'] = shardMode;
        return this;
    }
    public set shardMode(shardMode: CreateDatabaseDetailShardModeEnum | string  | undefined) {
        this['shard_mode'] = shardMode;
    }
    public get shardMode(): CreateDatabaseDetailShardModeEnum | string | undefined {
        return this['shard_mode'];
    }
    public withShardNumber(shardNumber: number): CreateDatabaseDetail {
        this['shard_number'] = shardNumber;
        return this;
    }
    public set shardNumber(shardNumber: number  | undefined) {
        this['shard_number'] = shardNumber;
    }
    public get shardNumber(): number | undefined {
        return this['shard_number'];
    }
    public withShardUnit(shardUnit: number): CreateDatabaseDetail {
        this['shard_unit'] = shardUnit;
        return this;
    }
    public set shardUnit(shardUnit: number  | undefined) {
        this['shard_unit'] = shardUnit;
    }
    public get shardUnit(): number | undefined {
        return this['shard_unit'];
    }
    public withUsedRds(usedRds: Array<DatabaseInstabcesParam>): CreateDatabaseDetail {
        this['used_rds'] = usedRds;
        return this;
    }
    public set usedRds(usedRds: Array<DatabaseInstabcesParam>  | undefined) {
        this['used_rds'] = usedRds;
    }
    public get usedRds(): Array<DatabaseInstabcesParam> | undefined {
        return this['used_rds'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateDatabaseDetailShardModeEnum {
    CLUSTER = 'cluster',
    SINGLE = 'single'
}
