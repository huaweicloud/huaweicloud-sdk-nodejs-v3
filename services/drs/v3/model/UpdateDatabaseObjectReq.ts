import { DatabaseInfo } from './DatabaseInfo';


export class UpdateDatabaseObjectReq {
    private 'job_id': string | undefined;
    public selected?: boolean;
    private 'sync_database'?: boolean | undefined;
    public job?: Array<DatabaseInfo>;
    public constructor(jobId?: any) { 
        this['job_id'] = jobId;
    }
    public withJobId(jobId: string): UpdateDatabaseObjectReq {
        this['job_id'] = jobId;
        return this;
    }
    public set jobId(jobId: string | undefined) {
        this['job_id'] = jobId;
    }
    public get jobId() {
        return this['job_id'];
    }
    public withSelected(selected: boolean): UpdateDatabaseObjectReq {
        this['selected'] = selected;
        return this;
    }
    public withSyncDatabase(syncDatabase: boolean): UpdateDatabaseObjectReq {
        this['sync_database'] = syncDatabase;
        return this;
    }
    public set syncDatabase(syncDatabase: boolean | undefined) {
        this['sync_database'] = syncDatabase;
    }
    public get syncDatabase() {
        return this['sync_database'];
    }
    public withJob(job: Array<DatabaseInfo>): UpdateDatabaseObjectReq {
        this['job'] = job;
        return this;
    }
}