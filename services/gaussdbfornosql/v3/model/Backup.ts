import { Datastore } from './Datastore';
import { QueryDatabaseTableInfo } from './QueryDatabaseTableInfo';


export class Backup {
    public id?: string;
    public description?: string;
    private 'instance_id'?: string;
    private 'instance_name'?: string;
    public datastore?: Datastore;
    public name?: string;
    public type?: string;
    public size?: number;
    public status?: string;
    private 'begin_time'?: string;
    private 'end_time'?: string;
    private 'database_tables'?: Array<QueryDatabaseTableInfo>;
    public constructor(id?: string, description?: string, instanceId?: string, instanceName?: string, datastore?: Datastore, name?: string, type?: string, size?: number, status?: string, beginTime?: string, endTime?: string) { 
        this['id'] = id;
        this['description'] = description;
        this['instance_id'] = instanceId;
        this['instance_name'] = instanceName;
        this['datastore'] = datastore;
        this['name'] = name;
        this['type'] = type;
        this['size'] = size;
        this['status'] = status;
        this['begin_time'] = beginTime;
        this['end_time'] = endTime;
    }
    public withId(id: string): Backup {
        this['id'] = id;
        return this;
    }
    public withDescription(description: string): Backup {
        this['description'] = description;
        return this;
    }
    public withInstanceId(instanceId: string): Backup {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceName(instanceName: string): Backup {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withDatastore(datastore: Datastore): Backup {
        this['datastore'] = datastore;
        return this;
    }
    public withName(name: string): Backup {
        this['name'] = name;
        return this;
    }
    public withType(type: string): Backup {
        this['type'] = type;
        return this;
    }
    public withSize(size: number): Backup {
        this['size'] = size;
        return this;
    }
    public withStatus(status: string): Backup {
        this['status'] = status;
        return this;
    }
    public withBeginTime(beginTime: string): Backup {
        this['begin_time'] = beginTime;
        return this;
    }
    public set beginTime(beginTime: string  | undefined) {
        this['begin_time'] = beginTime;
    }
    public get beginTime(): string | undefined {
        return this['begin_time'];
    }
    public withEndTime(endTime: string): Backup {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withDatabaseTables(databaseTables: Array<QueryDatabaseTableInfo>): Backup {
        this['database_tables'] = databaseTables;
        return this;
    }
    public set databaseTables(databaseTables: Array<QueryDatabaseTableInfo>  | undefined) {
        this['database_tables'] = databaseTables;
    }
    public get databaseTables(): Array<QueryDatabaseTableInfo> | undefined {
        return this['database_tables'];
    }
}