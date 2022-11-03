import { HealthCheckDetail } from './HealthCheckDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthChecksResponse extends SdkResponse {
    private 'health_checks'?: Array<HealthCheckDetail> | undefined;
    private 'page_info'?: PageInfo | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withHealthChecks(healthChecks: Array<HealthCheckDetail>): ListHealthChecksResponse {
        this['health_checks'] = healthChecks;
        return this;
    }
    public set healthChecks(healthChecks: Array<HealthCheckDetail> | undefined) {
        this['health_checks'] = healthChecks;
    }
    public get healthChecks() {
        return this['health_checks'];
    }
    public withPageInfo(pageInfo: PageInfo): ListHealthChecksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListHealthChecksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}