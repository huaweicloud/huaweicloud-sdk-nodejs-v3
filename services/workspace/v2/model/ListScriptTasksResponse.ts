import { PageResp } from './PageResp';
import { ScriptTaskInfo } from './ScriptTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScriptTasksResponse extends SdkResponse {
    public count?: number;
    private 'script_tasks'?: Array<ScriptTaskInfo>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListScriptTasksResponse {
        this['count'] = count;
        return this;
    }
    public withScriptTasks(scriptTasks: Array<ScriptTaskInfo>): ListScriptTasksResponse {
        this['script_tasks'] = scriptTasks;
        return this;
    }
    public set scriptTasks(scriptTasks: Array<ScriptTaskInfo>  | undefined) {
        this['script_tasks'] = scriptTasks;
    }
    public get scriptTasks(): Array<ScriptTaskInfo> | undefined {
        return this['script_tasks'];
    }
}