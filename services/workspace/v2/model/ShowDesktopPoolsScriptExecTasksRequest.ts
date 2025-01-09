

export class ShowDesktopPoolsScriptExecTasksRequest {
    private 'desktop_pool_id'?: string;
    private 'script_id'?: string;
    private 'script_name'?: string;
    public status?: string;
    private 'task_type'?: string;
    public offset?: number;
    public limit?: number;
    private 'execute_time_start'?: string;
    private 'execute_time_end'?: string;
    private 'task_id'?: Array<string>;
    public constructor() { 
    }
    public withDesktopPoolId(desktopPoolId: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['desktop_pool_id'] = desktopPoolId;
        return this;
    }
    public set desktopPoolId(desktopPoolId: string  | undefined) {
        this['desktop_pool_id'] = desktopPoolId;
    }
    public get desktopPoolId(): string | undefined {
        return this['desktop_pool_id'];
    }
    public withScriptId(scriptId: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['script_id'] = scriptId;
        return this;
    }
    public set scriptId(scriptId: string  | undefined) {
        this['script_id'] = scriptId;
    }
    public get scriptId(): string | undefined {
        return this['script_id'];
    }
    public withScriptName(scriptName: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['script_name'] = scriptName;
        return this;
    }
    public set scriptName(scriptName: string  | undefined) {
        this['script_name'] = scriptName;
    }
    public get scriptName(): string | undefined {
        return this['script_name'];
    }
    public withStatus(status: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['status'] = status;
        return this;
    }
    public withTaskType(taskType: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['task_type'] = taskType;
        return this;
    }
    public set taskType(taskType: string  | undefined) {
        this['task_type'] = taskType;
    }
    public get taskType(): string | undefined {
        return this['task_type'];
    }
    public withOffset(offset: number): ShowDesktopPoolsScriptExecTasksRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowDesktopPoolsScriptExecTasksRequest {
        this['limit'] = limit;
        return this;
    }
    public withExecuteTimeStart(executeTimeStart: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['execute_time_start'] = executeTimeStart;
        return this;
    }
    public set executeTimeStart(executeTimeStart: string  | undefined) {
        this['execute_time_start'] = executeTimeStart;
    }
    public get executeTimeStart(): string | undefined {
        return this['execute_time_start'];
    }
    public withExecuteTimeEnd(executeTimeEnd: string): ShowDesktopPoolsScriptExecTasksRequest {
        this['execute_time_end'] = executeTimeEnd;
        return this;
    }
    public set executeTimeEnd(executeTimeEnd: string  | undefined) {
        this['execute_time_end'] = executeTimeEnd;
    }
    public get executeTimeEnd(): string | undefined {
        return this['execute_time_end'];
    }
    public withTaskId(taskId: Array<string>): ShowDesktopPoolsScriptExecTasksRequest {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: Array<string>  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): Array<string> | undefined {
        return this['task_id'];
    }
}