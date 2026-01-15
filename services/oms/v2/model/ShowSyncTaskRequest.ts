

export class ShowSyncTaskRequest {
    private 'sync_task_id'?: string;
    private 'query_time'?: number;
    public constructor(syncTaskId?: string, queryTime?: number) { 
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
    public withQueryTime(queryTime: number): ShowSyncTaskRequest {
        this['query_time'] = queryTime;
        return this;
    }
    public set queryTime(queryTime: number  | undefined) {
        this['query_time'] = queryTime;
    }
    public get queryTime(): number | undefined {
        return this['query_time'];
    }
}