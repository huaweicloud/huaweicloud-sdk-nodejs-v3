import { SyncObjectReq } from './SyncObjectReq';


export class CreateSyncEventsRequest {
    private 'sync_task_id'?: string;
    public body?: SyncObjectReq;
    public constructor(syncTaskId?: string) { 
        this['sync_task_id'] = syncTaskId;
    }
    public withSyncTaskId(syncTaskId: string): CreateSyncEventsRequest {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withBody(body: SyncObjectReq): CreateSyncEventsRequest {
        this['body'] = body;
        return this;
    }
}