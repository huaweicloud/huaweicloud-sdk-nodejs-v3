import { SyncPolicyReq } from './SyncPolicyReq';


export class BatchSetupSyncPolicyReq {
    public jobs?: Array<SyncPolicyReq>;
    public constructor(jobs?: Array<SyncPolicyReq>) { 
        this['jobs'] = jobs;
    }
    public withJobs(jobs: Array<SyncPolicyReq>): BatchSetupSyncPolicyReq {
        this['jobs'] = jobs;
        return this;
    }
}