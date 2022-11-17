import { ApplicationItem } from './ApplicationItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApplicationsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'application_count'?: number | undefined;
    public applications?: Array<ApplicationItem>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListApplicationsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withApplicationCount(applicationCount: number): ListApplicationsResponse {
        this['application_count'] = applicationCount;
        return this;
    }
    public set applicationCount(applicationCount: number | undefined) {
        this['application_count'] = applicationCount;
    }
    public get applicationCount() {
        return this['application_count'];
    }
    public withApplications(applications: Array<ApplicationItem>): ListApplicationsResponse {
        this['applications'] = applications;
        return this;
    }
}