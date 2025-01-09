import { ScheduledTasksRecords } from './ScheduledTasksRecords';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTasksRecordsResponse extends SdkResponse {
    private 'tasks_records'?: Array<ScheduledTasksRecords>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTasksRecords(tasksRecords: Array<ScheduledTasksRecords>): ListScheduledTasksRecordsResponse {
        this['tasks_records'] = tasksRecords;
        return this;
    }
    public set tasksRecords(tasksRecords: Array<ScheduledTasksRecords>  | undefined) {
        this['tasks_records'] = tasksRecords;
    }
    public get tasksRecords(): Array<ScheduledTasksRecords> | undefined {
        return this['tasks_records'];
    }
    public withTotalCount(totalCount: number): ListScheduledTasksRecordsResponse {
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