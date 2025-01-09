import { ScriptExecutionTask } from './ScriptExecutionTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDesktopPoolsScriptExecTasksResponse extends SdkResponse {
    private 'script_execution_tasks'?: Array<ScriptExecutionTask>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withScriptExecutionTasks(scriptExecutionTasks: Array<ScriptExecutionTask>): ShowDesktopPoolsScriptExecTasksResponse {
        this['script_execution_tasks'] = scriptExecutionTasks;
        return this;
    }
    public set scriptExecutionTasks(scriptExecutionTasks: Array<ScriptExecutionTask>  | undefined) {
        this['script_execution_tasks'] = scriptExecutionTasks;
    }
    public get scriptExecutionTasks(): Array<ScriptExecutionTask> | undefined {
        return this['script_execution_tasks'];
    }
    public withTotalCount(totalCount: number): ShowDesktopPoolsScriptExecTasksResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}