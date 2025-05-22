import { ShowProjectWorkHoursResponseBodyWorkHours } from './ShowProjectWorkHoursResponseBodyWorkHours';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowProjectWorkHoursResponse extends SdkResponse {
    private 'work_hours'?: Array<ShowProjectWorkHoursResponseBodyWorkHours>;
    public total?: number;
    public constructor() { 
        super();
    }
    public withWorkHours(workHours: Array<ShowProjectWorkHoursResponseBodyWorkHours>): ShowProjectWorkHoursResponse {
        this['work_hours'] = workHours;
        return this;
    }
    public set workHours(workHours: Array<ShowProjectWorkHoursResponseBodyWorkHours>  | undefined) {
        this['work_hours'] = workHours;
    }
    public get workHours(): Array<ShowProjectWorkHoursResponseBodyWorkHours> | undefined {
        return this['work_hours'];
    }
    public withTotal(total: number): ShowProjectWorkHoursResponse {
        this['total'] = total;
        return this;
    }
}