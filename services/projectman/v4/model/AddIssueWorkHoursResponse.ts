import { AddIssueWorkHoursResponseBodyAddedWorkHours } from './AddIssueWorkHoursResponseBodyAddedWorkHours';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddIssueWorkHoursResponse extends SdkResponse {
    private 'added_work_hours'?: Array<AddIssueWorkHoursResponseBodyAddedWorkHours>;
    public constructor() { 
        super();
    }
    public withAddedWorkHours(addedWorkHours: Array<AddIssueWorkHoursResponseBodyAddedWorkHours>): AddIssueWorkHoursResponse {
        this['added_work_hours'] = addedWorkHours;
        return this;
    }
    public set addedWorkHours(addedWorkHours: Array<AddIssueWorkHoursResponseBodyAddedWorkHours>  | undefined) {
        this['added_work_hours'] = addedWorkHours;
    }
    public get addedWorkHours(): Array<AddIssueWorkHoursResponseBodyAddedWorkHours> | undefined {
        return this['added_work_hours'];
    }
}