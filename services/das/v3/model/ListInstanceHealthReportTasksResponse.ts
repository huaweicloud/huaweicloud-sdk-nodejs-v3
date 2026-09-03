import { HealthReportTaskInfo } from './HealthReportTaskInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstanceHealthReportTasksResponse extends SdkResponse {
    public total?: number;
    private 'health_report_task_list'?: Array<HealthReportTaskInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListInstanceHealthReportTasksResponse {
        this['total'] = total;
        return this;
    }
    public withHealthReportTaskList(healthReportTaskList: Array<HealthReportTaskInfo>): ListInstanceHealthReportTasksResponse {
        this['health_report_task_list'] = healthReportTaskList;
        return this;
    }
    public set healthReportTaskList(healthReportTaskList: Array<HealthReportTaskInfo>  | undefined) {
        this['health_report_task_list'] = healthReportTaskList;
    }
    public get healthReportTaskList(): Array<HealthReportTaskInfo> | undefined {
        return this['health_report_task_list'];
    }
}