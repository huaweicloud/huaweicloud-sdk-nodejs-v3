import { ScheduledTasksRecordsDetails } from './ScheduledTasksRecordsDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListScheduledTasksRecordsDetailsResponse extends SdkResponse {
    private 'tasks_records_details'?: Array<ScheduledTasksRecordsDetails>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTasksRecordsDetails(tasksRecordsDetails: Array<ScheduledTasksRecordsDetails>): ListScheduledTasksRecordsDetailsResponse {
        this['tasks_records_details'] = tasksRecordsDetails;
        return this;
    }
    public set tasksRecordsDetails(tasksRecordsDetails: Array<ScheduledTasksRecordsDetails>  | undefined) {
        this['tasks_records_details'] = tasksRecordsDetails;
    }
    public get tasksRecordsDetails(): Array<ScheduledTasksRecordsDetails> | undefined {
        return this['tasks_records_details'];
    }
    public withTotalCount(totalCount: number): ListScheduledTasksRecordsDetailsResponse {
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