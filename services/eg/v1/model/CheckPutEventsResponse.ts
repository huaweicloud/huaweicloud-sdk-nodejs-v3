import { CheckPutEventsResult } from './CheckPutEventsResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckPutEventsResponse extends SdkResponse {
    private 'failed_count'?: number;
    public sources?: Array<CheckPutEventsResult>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withFailedCount(failedCount: number): CheckPutEventsResponse {
        this['failed_count'] = failedCount;
        return this;
    }
    public set failedCount(failedCount: number  | undefined) {
        this['failed_count'] = failedCount;
    }
    public get failedCount(): number | undefined {
        return this['failed_count'];
    }
    public withSources(sources: Array<CheckPutEventsResult>): CheckPutEventsResponse {
        this['sources'] = sources;
        return this;
    }
    public withXRequestId(xRequestId: string): CheckPutEventsResponse {
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