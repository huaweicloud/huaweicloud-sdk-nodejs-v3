

export class ListOperationalTaskDetailRequest {
    private 'cluster_id'?: string;
    public category?: string;
    private 'task_id'?: string;
    public status?: string;
    private 'start_time'?: string;
    private 'end_time'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(clusterId?: string) { 
        this['cluster_id'] = clusterId;
    }
    public withClusterId(clusterId: string): ListOperationalTaskDetailRequest {
        this['cluster_id'] = clusterId;
        return this;
    }
    public set clusterId(clusterId: string  | undefined) {
        this['cluster_id'] = clusterId;
    }
    public get clusterId(): string | undefined {
        return this['cluster_id'];
    }
    public withCategory(category: string): ListOperationalTaskDetailRequest {
        this['category'] = category;
        return this;
    }
    public withTaskId(taskId: string): ListOperationalTaskDetailRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withStatus(status: string): ListOperationalTaskDetailRequest {
        this['status'] = status;
        return this;
    }
    public withStartTime(startTime: string): ListOperationalTaskDetailRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: string  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): string | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: string): ListOperationalTaskDetailRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: string  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): string | undefined {
        return this['end_time'];
    }
    public withLimit(limit: number): ListOperationalTaskDetailRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListOperationalTaskDetailRequest {
        this['offset'] = offset;
        return this;
    }
}