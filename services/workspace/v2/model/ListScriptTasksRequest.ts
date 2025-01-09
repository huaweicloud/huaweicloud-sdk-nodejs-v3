

export class ListScriptTasksRequest {
    public offset?: number;
    public limit?: number;
    private 'resource_group_id'?: Array<string>;
    private 'script_id'?: string;
    private 'script_name'?: string;
    public status?: string;
    private 'resource_group_type'?: string;
    private 'task_id'?: Array<string>;
    private 'task_type'?: string;
    private 'execute_time_start'?: string;
    private 'execute_time_end'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListScriptTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScriptTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withResourceGroupId(resourceGroupId: Array<string>): ListScriptTasksRequest {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: Array<string>  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): Array<string> | undefined {
        return this['resource_group_id'];
    }
    public withScriptId(scriptId: string): ListScriptTasksRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): ListScriptTasksRequest {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withStatus(status: string): ListScriptTasksRequest {
        this['status'] = status;
        return this;
    }
    public withResourceGroupType(resourceGroupType: string): ListScriptTasksRequest {
        this['resource_group_type'] = resourceGroupType;
        return this;
    }
    public set resourceGroupType(resourceGroupType: string  | undefined) {
        this['resource_group_type'] = resourceGroupType;
    }
    public get resourceGroupType(): string | undefined {
        return this['resource_group_type'];
    }
    public withTaskId(taskId: Array<string>): ListScriptTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string>  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): Array<string> | undefined {
        return this['task_id'];
    }
    public withTaskType(taskType: string): ListScriptTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withExecuteTimeStart(executeTimeStart: string): ListScriptTasksRequest {
        this['execute_time_start'] = executeTimeStart;
        return this;
    }
    public set executeTimeStart(executeTimeStart: string  | undefined) {
        this['execute_time_start'] = executeTimeStart;
    }
    public get executeTimeStart(): string | undefined {
        return this['execute_time_start'];
    }
    public withExecuteTimeEnd(executeTimeEnd: string): ListScriptTasksRequest {
        this['execute_time_end'] = executeTimeEnd;
        return this;
    }
    public set executeTimeEnd(executeTimeEnd: string  | undefined) {
        this['execute_time_end'] = executeTimeEnd;
    }
    public get executeTimeEnd(): string | undefined {
        return this['execute_time_end'];
    }
}