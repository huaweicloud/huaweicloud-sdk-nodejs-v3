import { ResourceUsageInfo } from './ResourceUsageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowResourceUsageResponse extends SdkResponse {
    public resources?: Array<ResourceUsageInfo>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceUsageInfo>): ShowResourceUsageResponse {
        this['resources'] = resources;
        return this;
    }
    public withXRequestId(xRequestId: string): ShowResourceUsageResponse {
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