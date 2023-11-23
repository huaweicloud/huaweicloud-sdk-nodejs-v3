

export class ShowSyncTaskRequest {
    private 'sync_task_id'?: string;
    private 'query_time'?: string;
    public constructor(syncTaskId?: string, queryTime?: string) { 
        this['sync_task_id'] = syncTaskId;
        this['query_time'] = queryTime;
    }
    public withSyncTaskId(syncTaskId: string): ShowSyncTaskRequest {
        this['sync_task_id'] = syncTaskId;
        return this;
    }
    public set syncTaskId(syncTaskId: string  | undefined) {
        this['sync_task_id'] = syncTaskId;
    }
    public get syncTaskId(): string | undefined {
        return this['sync_task_id'];
    }
    public withQueryTime(queryTime: string): ShowSyncTaskRequest {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: string  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): string | undefined {
        return this['query_time'];
    }
}