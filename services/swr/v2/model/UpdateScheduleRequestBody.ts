import { GcParameters } from './GcParameters';
import { ScheduleObj } from './ScheduleObj';


export class UpdateScheduleRequestBody {
    public schedule?: ScheduleObj;
    public parameters?: GcParameters;
    public constructor(schedule?: ScheduleObj) { 
        this['schedule'] = schedule;
    }
    public withSchedule(schedule: ScheduleObj): UpdateScheduleRequestBody {
        this['schedule'] = schedule;
        return this;
    }
    public withParameters(parameters: GcParameters): UpdateScheduleRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}