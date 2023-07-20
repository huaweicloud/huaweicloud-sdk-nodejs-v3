import { HealthCheckDetail } from './HealthCheckDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowHealthCheckResponse extends SdkResponse {
    private 'health_check'?: HealthCheckDetail;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withHealthCheck(healthCheck: HealthCheckDetail): ShowHealthCheckResponse {
        this['health_check'] = healthCheck;
        return this;
    }
    public set healthCheck(healthCheck: HealthCheckDetail  | undefined) {
        this['health_check'] = healthCheck;
    }
    public get healthCheck(): HealthCheckDetail | undefined {
        return this['health_check'];
    }
    public withRequestId(requestId: string): ShowHealthCheckResponse {
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