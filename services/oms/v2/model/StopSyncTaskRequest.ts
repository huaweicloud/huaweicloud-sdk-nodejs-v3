

export class StopSyncTaskRequest {
    private 'sync_task_id'?: string;
    public constructor(syncTaskId?: string) { 
        this['sync_task_id'] = syncTaskId;
    }
    public withSyncTaskId(syncTaskId: string): StopSyncTaskRequest {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
}