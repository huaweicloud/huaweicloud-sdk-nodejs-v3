import { TaskSuccessRate } from './TaskSuccessRate';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTaskSuccessRateResponse extends SdkResponse {
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'start_date'?: string;
    private 'end_date'?: string;
    private 'tasks_success_rate'?: Array<TaskSuccessRate>;
    public constructor() { 
        super();
    }
    public withProjectId(projectId: string): ListTaskSuccessRateResponse {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): ListTaskSuccessRateResponse {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withStartDate(startDate: string): ListTaskSuccessRateResponse {
        this['start_date'] = startDate;
        return this;
    }
    public set startDate(startDate: string  | undefined) {
        this['start_date'] = startDate;
    }
    public get startDate(): string | undefined {
        return this['start_date'];
    }
    public withEndDate(endDate: string): ListTaskSuccessRateResponse {
        this['end_date'] = endDate;
        return this;
    }
    public set endDate(endDate: string  | undefined) {
        this['end_date'] = endDate;
    }
    public get endDate(): string | undefined {
        return this['end_date'];
    }
    public withTasksSuccessRate(tasksSuccessRate: Array<TaskSuccessRate>): ListTaskSuccessRateResponse {
        this['tasks_success_rate'] = tasksSuccessRate;
        return this;
    }
    public set tasksSuccessRate(tasksSuccessRate: Array<TaskSuccessRate>  | undefined) {
        this['tasks_success_rate'] = tasksSuccessRate;
    }
    public get tasksSuccessRate(): Array<TaskSuccessRate> | undefined {
        return this['tasks_success_rate'];
    }
}