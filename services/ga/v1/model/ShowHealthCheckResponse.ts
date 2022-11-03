import { HealthCheckDetail } from './HealthCheckDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthCheckResponse extends SdkResponse {
    private 'health_check'?: HealthCheckDetail | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withHealthCheck(healthCheck: HealthCheckDetail): ShowHealthCheckResponse {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: HealthCheckDetail | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck() {
        return this['health_check'];
    }
    public withRequestId(requestId: string): ShowHealthCheckResponse {
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