import { Application } from './Application';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApplicationsResponse extends SdkResponse {
    public count?: number;
    public applications?: Array<Application>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ShowApplicationsResponse {
        this['count'] = count;
        return this;
    }
    public withApplications(applications: Array<Application>): ShowApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
}