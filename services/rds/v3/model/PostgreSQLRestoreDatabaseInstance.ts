import { PostgreSQLRestoreDatabaseInfo } from './PostgreSQLRestoreDatabaseInfo';


export class PostgreSQLRestoreDatabaseInstance {
    private 'restore_time'?: number;
    private 'instance_id'?: string;
    public databases?: Array<PostgreSQLRestoreDatabaseInfo>;
    public constructor() { 
    }
    public withRestoreTime(restoreTime: number): PostgreSQLRestoreDatabaseInstance {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withInstanceId(instanceId: string): PostgreSQLRestoreDatabaseInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabases(databases: Array<PostgreSQLRestoreDatabaseInfo>): PostgreSQLRestoreDatabaseInstance {
        this['databases'] = databases;
        return this;
    }
}