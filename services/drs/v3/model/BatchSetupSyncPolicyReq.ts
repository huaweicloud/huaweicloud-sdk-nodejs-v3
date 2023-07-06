import { SyncPolicyReq } from './SyncPolicyReq';


export class BatchSetupSyncPolicyReq {
    public jobs: Array<SyncPolicyReq>;
    public constructor(jobs?: any) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<SyncPolicyReq>): BatchSetupSyncPolicyReq {
        this['jobs'] = jobs;
        return this;
    }
}