

export class BatchConsistencyReq {
    private 'task_id'?: string;
    private 'source_id'?: string;
    private 'source_name'?: string;
    public constructor(taskId?: string, sourceId?: string, sourceName?: string) { 
        this['task_id'] = taskId;
        this['source_id'] = sourceId;
        this['source_name'] = sourceName;
    }
    public withTaskId(taskId: string): BatchConsistencyReq {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withSourceId(sourceId: string): BatchConsistencyReq {
        this['source_id'] = sourceId;
        return this;
    }
    public set sourceId(sourceId: string  | undefined) {
        this['source_id'] = sourceId;
    }
    public get sourceId(): string | undefined {
        return this['source_id'];
    }
    public withSourceName(sourceName: string): BatchConsistencyReq {
        this['source_name'] = sourceName;
        return this;
    }
    public set sourceName(sourceName: string  | undefined) {
        this['source_name'] = sourceName;
    }
    public get sourceName(): string | undefined {
        return this['source_name'];
    }
}