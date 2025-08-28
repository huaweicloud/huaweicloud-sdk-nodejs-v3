import { HealthReportTask } from './HealthReportTask';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthReportTaskResponse extends SdkResponse {
    public total?: number;
    private 'health_report_task_list'?: Array<HealthReportTask>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHealthReportTaskResponse {
        this['total'] = total;
        return this;
    }
    public withHealthReportTaskList(healthReportTaskList: Array<HealthReportTask>): ListHealthReportTaskResponse {
        this['health_report_task_list'] = healthReportTaskList;
        return this;
    }
    public set healthReportTaskList(healthReportTaskList: Array<HealthReportTask>  | undefined) {
        this['health_report_task_list'] = healthReportTaskList;
    }
    public get healthReportTaskList(): Array<HealthReportTask> | undefined {
        return this['health_report_task_list'];
    }
}