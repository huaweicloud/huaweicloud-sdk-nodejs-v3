import { WorkflowScheduleResp } from './WorkflowScheduleResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowScheduleListResponse extends SdkResponse {
    public schedules?: Array<WorkflowScheduleResp>;
    public constructor() { 
        super();
    }
    public withSchedules(schedules: Array<WorkflowScheduleResp>): ShowWorkflowScheduleListResponse {
        this['schedules'] = schedules;
        return this;
    }
}