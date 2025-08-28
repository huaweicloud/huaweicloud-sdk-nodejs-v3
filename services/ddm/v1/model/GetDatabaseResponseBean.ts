import { GetDatabaseUsedRds } from './GetDatabaseUsedRds';
import { GetDatabases } from './GetDatabases';


export class GetDatabaseResponseBean {
    public name?: string;
    public created?: number;
    public status?: string;
    public updated?: number;
    public databases?: Array<GetDatabases>;
    private 'shard_mode'?: string;
    private 'shard_number'?: number;
    private 'shard_unit'?: number;
    public dataVips?: Array<string>;
    private 'used_rds'?: Array<GetDatabaseUsedRds>;
    public constructor(name?: string, created?: number, status?: string, updated?: number, databases?: Array<GetDatabases>, shardMode?: string, shardNumber?: number, shardUnit?: number, dataVips?: Array<string>, usedRds?: Array<GetDatabaseUsedRds>) { 
        this['name'] = name;
        this['created'] = created;
        this['status'] = status;
        this['updated'] = updated;
        this['databases'] = databases;
        this['shard_mode'] = shardMode;
        this['shard_number'] = shardNumber;
        this['shard_unit'] = shardUnit;
        this['dataVips'] = dataVips;
        this['used_rds'] = usedRds;
    }
    public withName(name: string): GetDatabaseResponseBean {
        this['name'] = name;
        return this;
    }
    public withCreated(created: number): GetDatabaseResponseBean {
        this['created'] = created;
        return this;
    }
    public withStatus(status: string): GetDatabaseResponseBean {
        this['status'] = status;
        return this;
    }
    public withUpdated(updated: number): GetDatabaseResponseBean {
        this['updated'] = updated;
        return this;
    }
    public withDatabases(databases: Array<GetDatabases>): GetDatabaseResponseBean {
        this['databases'] = databases;
        return this;
    }
    public withShardMode(shardMode: string): GetDatabaseResponseBean {
        this['shard_mode'] = shardMode;
        return this;
    }
    public set shardMode(shardMode: string  | undefined) {
        this['shard_mode'] = shardMode;
    }
    public get shardMode(): string | undefined {
        return this['shard_mode'];
    }
    public withShardNumber(shardNumber: number): GetDatabaseResponseBean {
        this['shard_number'] = shardNumber;
        return this;
    }
    public set shardNumber(shardNumber: number  | undefined) {
        this['shard_number'] = shardNumber;
    }
    public get shardNumber(): number | undefined {
        return this['shard_number'];
    }
    public withShardUnit(shardUnit: number): GetDatabaseResponseBean {
        this['shard_unit'] = shardUnit;
        return this;
    }
    public set shardUnit(shardUnit: number  | undefined) {
        this['shard_unit'] = shardUnit;
    }
    public get shardUnit(): number | undefined {
        return this['shard_unit'];
    }
    public withDataVips(dataVips: Array<string>): GetDatabaseResponseBean {
        this['dataVips'] = dataVips;
        return this;
    }
    public withUsedRds(usedRds: Array<GetDatabaseUsedRds>): GetDatabaseResponseBean {
        this['used_rds'] = usedRds;
        return this;
    }
    public set usedRds(usedRds: Array<GetDatabaseUsedRds>  | undefined) {
        this['used_rds'] = usedRds;
    }
    public get usedRds(): Array<GetDatabaseUsedRds> | undefined {
        return this['used_rds'];
    }
}