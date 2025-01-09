

export class ListScriptRecordsRequest {
    public offset?: number;
    public limit?: number;
    private 'resource_id'?: Array<string>;
    private 'resource_group_id'?: Array<string>;
    private 'script_id'?: Array<string>;
    private 'script_name'?: Array<string>;
    public status?: string;
    private 'is_first_order'?: boolean;
    private 'script_task_id'?: string;
    private 'task_type'?: string;
    private 'show_history'?: boolean;
    private 'execute_time_start'?: string;
    private 'execute_time_end'?: string;
    public constructor() { 
    }
    public withOffset(offset: number): ListScriptRecordsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListScriptRecordsRequest {
        this['limit'] = limit;
        return this;
    }
    public withResourceId(resourceId: Array<string>): ListScriptRecordsRequest {
        this['resource_id'] = resourceId;
        return this;
    }
    public set resourceId(resourceId: Array<string>  | undefined) {
        this['resource_id'] = resourceId;
    }
    public get resourceId(): Array<string> | undefined {
        return this['resource_id'];
    }
    public withResourceGroupId(resourceGroupId: Array<string>): ListScriptRecordsRequest {
        this['resource_group_id'] = resourceGroupId;
        return this;
    }
    public set resourceGroupId(resourceGroupId: Array<string>  | undefined) {
        this['resource_group_id'] = resourceGroupId;
    }
    public get resourceGroupId(): Array<string> | undefined {
        return this['resource_group_id'];
    }
    public withScriptId(scriptId: Array<string>): ListScriptRecordsRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: Array<string>  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): Array<string> | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: Array<string>): ListScriptRecordsRequest {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: Array<string>  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): Array<string> | undefined {
        return this['script_name'];
    }
    public withStatus(status: string): ListScriptRecordsRequest {
        this['status'] = status;
        return this;
    }
    public withIsFirstOrder(isFirstOrder: boolean): ListScriptRecordsRequest {
        this['is_first_order'] = isFirstOrder;
        return this;
    }
    public set isFirstOrder(isFirstOrder: boolean  | undefined) {
        this['is_first_order'] = isFirstOrder;
    }
    public get isFirstOrder(): boolean | undefined {
        return this['is_first_order'];
    }
    public withScriptTaskId(scriptTaskId: string): ListScriptRecordsRequest {
        this['script_task_id'] = scriptTaskId;
        return this;
    }
    public set scriptTaskId(scriptTaskId: string  | undefined) {
        this['script_task_id'] = scriptTaskId;
    }
    public get scriptTaskId(): string | undefined {
        return this['script_task_id'];
    }
    public withTaskType(taskType: string): ListScriptRecordsRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withShowHistory(showHistory: boolean): ListScriptRecordsRequest {
        this['show_history'] = showHistory;
        return this;
    }
    public set showHistory(showHistory: boolean  | undefined) {
        this['show_history'] = showHistory;
    }
    public get showHistory(): boolean | undefined {
        return this['show_history'];
    }
    public withExecuteTimeStart(executeTimeStart: string): ListScriptRecordsRequest {
        this['execute_time_start'] = executeTimeStart;
        return this;
    }
    public set executeTimeStart(executeTimeStart: string  | undefined) {
        this['execute_time_start'] = executeTimeStart;
    }
    public get executeTimeStart(): string | undefined {
        return this['execute_time_start'];
    }
    public withExecuteTimeEnd(executeTimeEnd: string): ListScriptRecordsRequest {
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