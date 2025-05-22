import { WorkHoursType } from './WorkHoursType';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectWorkHoursTypeResponse extends SdkResponse {
    private 'work_hours_types'?: Array<WorkHoursType>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withWorkHoursTypes(workHoursTypes: Array<WorkHoursType>): ListProjectWorkHoursTypeResponse {
        this['work_hours_types'] = workHoursTypes;
        return this;
    }
    public set workHoursTypes(workHoursTypes: Array<WorkHoursType>  | undefined) {
        this['work_hours_types'] = workHoursTypes;
    }
    public get workHoursTypes(): Array<WorkHoursType> | undefined {
        return this['work_hours_types'];
    }
    public withTotal(total: number): ListProjectWorkHoursTypeResponse {
        this['total'] = total;
        return this;
    }
}