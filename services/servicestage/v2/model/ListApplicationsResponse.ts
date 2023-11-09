import { ApplicationView } from './ApplicationView';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsResponse extends SdkResponse {
    public count?: number;
    public applications?: Array<ApplicationView>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListApplicationsResponse {
        this['count'] = count;
        return this;
    }
    public withApplications(applications: Array<ApplicationView>): ListApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
}