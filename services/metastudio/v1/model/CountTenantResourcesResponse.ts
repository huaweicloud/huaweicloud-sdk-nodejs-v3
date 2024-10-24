import { ResourcesCount } from './ResourcesCount';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CountTenantResourcesResponse extends SdkResponse {
    private 'resources_count'?: Array<ResourcesCount>;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResourcesCount(resourcesCount: Array<ResourcesCount>): CountTenantResourcesResponse {
        this['resources_count'] = resourcesCount;
        return this;
    }
    public set resourcesCount(resourcesCount: Array<ResourcesCount>  | undefined) {
        this['resources_count'] = resourcesCount;
    }
    public get resourcesCount(): Array<ResourcesCount> | undefined {
        return this['resources_count'];
    }
    public withXRequestId(xRequestId: string): CountTenantResourcesResponse {
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