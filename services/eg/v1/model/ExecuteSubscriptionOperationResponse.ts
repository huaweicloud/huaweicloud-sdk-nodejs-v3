import { SubscriptionOperateRespEvents } from './SubscriptionOperateRespEvents';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ExecuteSubscriptionOperationResponse extends SdkResponse {
    private 'failed_count'?: number;
    public events?: Array<SubscriptionOperateRespEvents>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFailedCount(failedCount: number): ExecuteSubscriptionOperationResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withEvents(events: Array<SubscriptionOperateRespEvents>): ExecuteSubscriptionOperationResponse {
        this['events'] = events;
        return this;
    }
    public withXRequestId(xRequestId: string): ExecuteSubscriptionOperationResponse {
        this['X-Request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-Request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-Request-Id'];
    }
}