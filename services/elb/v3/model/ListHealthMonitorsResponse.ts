import { HealthMonitor } from './HealthMonitor';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthMonitorsResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public healthmonitors?: Array<HealthMonitor>;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListHealthMonitorsResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListHealthMonitorsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withHealthmonitors(healthmonitors: Array<HealthMonitor>): ListHealthMonitorsResponse {
        this['healthmonitors'] = healthmonitors;
        return this;
    }
}