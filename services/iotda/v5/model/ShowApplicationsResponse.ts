import { ApplicationDTO } from './ApplicationDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationsResponse extends SdkResponse {
    public applications?: Array<ApplicationDTO>;
    public constructor() { 
        super();
    }
    public withApplications(applications: Array<ApplicationDTO>): ShowApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
}