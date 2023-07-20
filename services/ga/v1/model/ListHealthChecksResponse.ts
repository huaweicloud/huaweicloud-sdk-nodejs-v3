import { HealthCheckDetail } from './HealthCheckDetail';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHealthChecksResponse extends SdkResponse {
    private 'health_checks'?: Array<HealthCheckDetail>;
    private 'page_info'?: PageInfo;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withHealthChecks(healthChecks: Array<HealthCheckDetail>): ListHealthChecksResponse {
        this['health_checks'] = healthChecks;
        return this;
    }
    public set healthChecks(healthChecks: Array<HealthCheckDetail>  | undefined) {
        this['health_checks'] = healthChecks;
    }
    public get healthChecks(): Array<HealthCheckDetail> | undefined {
        return this['health_checks'];
    }
    public withPageInfo(pageInfo: PageInfo): ListHealthChecksResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withRequestId(requestId: string): ListHealthChecksResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}