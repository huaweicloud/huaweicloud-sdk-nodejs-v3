import { ExecuteScheduleObj } from './ExecuteScheduleObj';
import { GcParameters } from './GcParameters';


export class ExecuteScheduleRequestBody {
    public schedule?: ExecuteScheduleObj;
    public parameters?: GcParameters;
    public constructor(schedule?: ExecuteScheduleObj, parameters?: GcParameters) { 
        this['schedule'] = schedule;
        this['parameters'] = parameters;
    }
    public withSchedule(schedule: ExecuteScheduleObj): ExecuteScheduleRequestBody {
        this['schedule'] = schedule;
        return this;
    }
    public withParameters(parameters: GcParameters): ExecuteScheduleRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}