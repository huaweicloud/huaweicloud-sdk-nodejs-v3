

export class ListOfflineKeyAnalysisTaskRequest {
    private 'instance_id'?: string;
    public offset?: number;
    public limit?: number;
    public status?: ListOfflineKeyAnalysisTaskRequestStatusEnum | string;
    public constructor(instanceId?: string) { 
        this['instance_id'] = instanceId;
    }
    public withInstanceId(instanceId: string): ListOfflineKeyAnalysisTaskRequest {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withOffset(offset: number): ListOfflineKeyAnalysisTaskRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListOfflineKeyAnalysisTaskRequest {
        this['limit'] = limit;
        return this;
    }
    public withStatus(status: ListOfflineKeyAnalysisTaskRequestStatusEnum | string): ListOfflineKeyAnalysisTaskRequest {
        this['status'] = status;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListOfflineKeyAnalysisTaskRequestStatusEnum {
    WAITING = 'waiting',
    RUNNING = 'running',
    SUCCESS = 'success',
    FAILED = 'failed'
}
