import { CreateSnapshotResult } from './CreateSnapshotResult';


export class BatchCreateSnapshotResponseResult {
    public success?: Array<CreateSnapshotResult>;
    public failed?: Array<CreateSnapshotResult>;
    public constructor() { 
    }
    public withSuccess(success: Array<CreateSnapshotResult>): BatchCreateSnapshotResponseResult {
        this['success'] = success;
        return this;
    }
    public withFailed(failed: Array<CreateSnapshotResult>): BatchCreateSnapshotResponseResult {
        this['failed'] = failed;
        return this;
    }
}