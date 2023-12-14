import { RestoreDatabaseInfo } from './RestoreDatabaseInfo';


export class RestoreDatabaseInstance {
    private 'restore_time'?: number;
    private 'instance_id'?: string;
    public databases?: Array<RestoreDatabaseInfo>;
    public constructor(restoreTime?: number, instanceId?: string, databases?: Array<RestoreDatabaseInfo>) { 
        this['restore_time'] = restoreTime;
        this['instance_id'] = instanceId;
        this['databases'] = databases;
    }
    public withRestoreTime(restoreTime: number): RestoreDatabaseInstance {
        this['restore_time'] = restoreTime;
        return this;
    }
    public set restoreTime(restoreTime: number  | undefined) {
        this['restore_time'] = restoreTime;
    }
    public get restoreTime(): number | undefined {
        return this['restore_time'];
    }
    public withInstanceId(instanceId: string): RestoreDatabaseInstance {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withDatabases(databases: Array<RestoreDatabaseInfo>): RestoreDatabaseInstance {
        this['databases'] = databases;
        return this;
    }
}