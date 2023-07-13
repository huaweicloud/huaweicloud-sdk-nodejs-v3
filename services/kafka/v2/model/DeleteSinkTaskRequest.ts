

export class DeleteSinkTaskRequest {
    private 'connector_id': string | undefined;
    private 'task_id': string | undefined;
    public constructor(connectorId?: any, taskId?: any) { 
        this['connector_id'] = connectorId;
        this['task_id'] = taskId;
    }
    public withConnectorId(connectorId: string): DeleteSinkTaskRequest {
        this['connector_id'] = connectorId;
        return this;
    }
    public set connectorId(connectorId: string | undefined) {
        this['connector_id'] = connectorId;
    }
    public get connectorId() {
        return this['connector_id'];
    }
    public withTaskId(taskId: string): DeleteSinkTaskRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId() {
        return this['task_id'];
    }
}