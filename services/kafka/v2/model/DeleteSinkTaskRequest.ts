

export class DeleteSinkTaskRequest {
    private 'connector_id'?: string;
    private 'task_id'?: string;
    public constructor(connectorId?: string, taskId?: string) { 
        this['connector_id'] = connectorId;
        this['task_id'] = taskId;
    }
    public withConnectorId(connectorId: string): DeleteSinkTaskRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string  | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId(): string | undefined {
        return this['connector_id'];
    }
    public withTaskId(taskId: string): DeleteSinkTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
}