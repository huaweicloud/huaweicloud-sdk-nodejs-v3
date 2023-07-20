import { AppComponentDao } from './AppComponentDao';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class StartDeployTaskResponse extends SdkResponse {
    public id?: string;
    private 'task_id'?: string;
    private 'job_name'?: string;
    private 'app_component_list'?: Array<AppComponentDao>;
    public constructor() { 
        super();
    }
    public withId(id: string): StartDeployTaskResponse {
        this['id'] = id;
        return this;
    }
    public withTaskId(taskId: string): StartDeployTaskResponse {
        this['task_id'] = taskId;
        return this;
    }
    public set taskId(taskId: string  | undefined) {
        this['task_id'] = taskId;
    }
    public get taskId(): string | undefined {
        return this['task_id'];
    }
    public withJobName(jobName: string): StartDeployTaskResponse {
        this['job_name'] = jobName;
        return this;
    }
    public set jobName(jobName: string  | undefined) {
        this['job_name'] = jobName;
    }
    public get jobName(): string | undefined {
        return this['job_name'];
    }
    public withAppComponentList(appComponentList: Array<AppComponentDao>): StartDeployTaskResponse {
        this['app_component_list'] = appComponentList;
        return this;
    }
    public set appComponentList(appComponentList: Array<AppComponentDao>  | undefined) {
        this['app_component_list'] = appComponentList;
    }
    public get appComponentList(): Array<AppComponentDao> | undefined {
        return this['app_component_list'];
    }
}