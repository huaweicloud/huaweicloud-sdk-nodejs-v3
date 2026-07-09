import { DbDataStore } from './DbDataStore';
import { DbUser } from './DbUser';


export class DataResourceHead {
    public alias?: string;
    public datastore?: DbDataStore;
    private 'db_ip'?: string;
    private 'db_name'?: string;
    private 'db_port'?: string;
    private 'db_user_list'?: Array<DbUser>;
    public provider?: string;
    private 'rds_id'?: string;
    public status?: string;
    public type?: string;
    public constructor() { 
    }
    public withAlias(alias: string): DataResourceHead {
        this['alias'] = alias;
        return this;
    }
    public withDatastore(datastore: DbDataStore): DataResourceHead {
        this['datastore'] = datastore;
        return this;
    }
    public withDbIp(dbIp: string): DataResourceHead {
        this['db_ip'] = dbIp;
        return this;
    }
    public set dbIp(dbIp: string  | undefined) {
        this['db_ip'] = dbIp;
    }
    public get dbIp(): string | undefined {
        return this['db_ip'];
    }
    public withDbName(dbName: string): DataResourceHead {
        this['db_name'] = dbName;
        return this;
    }
    public set dbName(dbName: string  | undefined) {
        this['db_name'] = dbName;
    }
    public get dbName(): string | undefined {
        return this['db_name'];
    }
    public withDbPort(dbPort: string): DataResourceHead {
        this['db_port'] = dbPort;
        return this;
    }
    public set dbPort(dbPort: string  | undefined) {
        this['db_port'] = dbPort;
    }
    public get dbPort(): string | undefined {
        return this['db_port'];
    }
    public withDbUserList(dbUserList: Array<DbUser>): DataResourceHead {
        this['db_user_list'] = dbUserList;
        return this;
    }
    public set dbUserList(dbUserList: Array<DbUser>  | undefined) {
        this['db_user_list'] = dbUserList;
    }
    public get dbUserList(): Array<DbUser> | undefined {
        return this['db_user_list'];
    }
    public withProvider(provider: string): DataResourceHead {
        this['provider'] = provider;
        return this;
    }
    public withRdsId(rdsId: string): DataResourceHead {
        this['rds_id'] = rdsId;
        return this;
    }
    public set rdsId(rdsId: string  | undefined) {
        this['rds_id'] = rdsId;
    }
    public get rdsId(): string | undefined {
        return this['rds_id'];
    }
    public withStatus(status: string): DataResourceHead {
        this['status'] = status;
        return this;
    }
    public withType(type: string): DataResourceHead {
        this['type'] = type;
        return this;
    }
}