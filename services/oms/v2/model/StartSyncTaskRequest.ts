import { StartSyncTaskReq } from './StartSyncTaskReq';


export class StartSyncTaskRequest {
    private 'sync_task_id'?: string;
    public body?: StartSyncTaskReq;
    public constructor(syncTaskId?: string) { 
        this['sync_task_id'] = syncTaskId;
    }
    public withSyncTaskId(syncTaskId: string): StartSyncTaskRequest {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withBody(body: StartSyncTaskReq): StartSyncTaskRequest {
        this['body'] = body;
        return this;
    }
}