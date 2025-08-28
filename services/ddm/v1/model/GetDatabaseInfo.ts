import { GetDatabaseUsedRds } from './GetDatabaseUsedRds';


export class GetDatabaseInfo {
    public name?: string;
    private 'shard_mode'?: string;
    private 'shard_number'?: number;
    public status?: string;
    public created?: number;
    private 'used_rds'?: Array<GetDatabaseUsedRds>;
    private 'shard_unit'?: number;
    public constructor(name?: string, shardMode?: string, shardNumber?: number, status?: string, created?: number, usedRds?: Array<GetDatabaseUsedRds>, shardUnit?: number) { 
        this['name'] = name;
        this['shard_mode'] = shardMode;
        this['shard_number'] = shardNumber;
        this['status'] = status;
        this['created'] = created;
        this['used_rds'] = usedRds;
        this['shard_unit'] = shardUnit;
    }
    public withName(name: string): GetDatabaseInfo {
        this['name'] = name;
        return this;
    }
    public withShardMode(shardMode: string): GetDatabaseInfo {
        this['shard_mode'] = shardMode;
        return this;
    }
    public set shardMode(shardMode: string  | undefined) {
        this['shard_mode'] = shardMode;
    }
    public get shardMode(): string | undefined {
        return this['shard_mode'];
    }
    public withShardNumber(shardNumber: number): GetDatabaseInfo {
        this['shard_number'] = shardNumber;
        return this;
    }
    public set shardNumber(shardNumber: number  | undefined) {
        this['shard_number'] = shardNumber;
    }
    public get shardNumber(): number | undefined {
        return this['shard_number'];
    }
    public withStatus(status: string): GetDatabaseInfo {
        this['status'] = status;
        return this;
    }
    public withCreated(created: number): GetDatabaseInfo {
        this['created'] = created;
        return this;
    }
    public withUsedRds(usedRds: Array<GetDatabaseUsedRds>): GetDatabaseInfo {
        this['used_rds'] = usedRds;
        return this;
    }
    public set usedRds(usedRds: Array<GetDatabaseUsedRds>  | undefined) {
        this['used_rds'] = usedRds;
    }
    public get usedRds(): Array<GetDatabaseUsedRds> | undefined {
        return this['used_rds'];
    }
    public withShardUnit(shardUnit: number): GetDatabaseInfo {
        this['shard_unit'] = shardUnit;
        return this;
    }
    public set shardUnit(shardUnit: number  | undefined) {
        this['shard_unit'] = shardUnit;
    }
    public get shardUnit(): number | undefined {
        return this['shard_unit'];
    }
}