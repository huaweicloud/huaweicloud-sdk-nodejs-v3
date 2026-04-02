import { GcParameters } from './GcParameters';
import { ScheduleDetails } from './ScheduleDetails';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowGcScheduleResponse extends SdkResponse {
    public schedule?: ScheduleDetails;
    public parameters?: GcParameters;
    public constructor() { 
        super();
    }
    public withSchedule(schedule: ScheduleDetails): ShowGcScheduleResponse {
        this['schedule'] = schedule;
        return this;
    }
    public withParameters(parameters: GcParameters): ShowGcScheduleResponse {
        this['parameters'] = parameters;
        return this;
    }
}