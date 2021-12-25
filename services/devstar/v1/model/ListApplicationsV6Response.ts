import { ApplicationV3 } from './ApplicationV3';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsV6Response extends SdkResponse {
    public applications?: Array<ApplicationV3>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withApplications(applications: Array<ApplicationV3>): ListApplicationsV6Response {
        this['applications'] = applications;
        return this;
    }
    public withCount(count: number): ListApplicationsV6Response {
        this['count'] = count;
        return this;
    }
}