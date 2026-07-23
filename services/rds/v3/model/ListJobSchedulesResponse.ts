import { JobScheduleInfo } from './JobScheduleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListJobSchedulesResponse extends SdkResponse {
    public schedules?: Array<JobScheduleInfo>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withSchedules(schedules: Array<JobScheduleInfo>): ListJobSchedulesResponse {
        this['schedules'] = schedules;
        return this;
    }
    public withTotalCount(totalCount: number): ListJobSchedulesResponse {
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