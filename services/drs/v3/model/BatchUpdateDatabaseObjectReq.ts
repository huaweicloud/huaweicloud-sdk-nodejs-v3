import { UpdateDatabaseObjectReq } from './UpdateDatabaseObjectReq';


export class BatchUpdateDatabaseObjectReq {
    public jobs: Array<UpdateDatabaseObjectReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<UpdateDatabaseObjectReq>): BatchUpdateDatabaseObjectReq {
        this['jobs'] = jobs;
        return this;
    }
}