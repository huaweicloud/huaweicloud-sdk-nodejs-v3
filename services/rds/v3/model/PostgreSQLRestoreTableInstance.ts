import { PostgreSQLRestoreDatabase } from './PostgreSQLRestoreDatabase';


export class PostgreSQLRestoreTableInstance {
    private 'restore_time'?: number;
    private 'instance_id'?: string;
    public databases?: Array<PostgreSQLRestoreDatabase>;
    public constructor() { 
    }
    public withRestoreTime(restoreTime: number): PostgreSQLRestoreTableInstance {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withInstanceId(instanceId: string): PostgreSQLRestoreTableInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabases(databases: Array<PostgreSQLRestoreDatabase>): PostgreSQLRestoreTableInstance {
        this['databases'] = databases;
        return this;
    }
}