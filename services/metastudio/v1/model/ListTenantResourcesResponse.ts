import { ResourceItemInfo } from './ResourceItemInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantResourcesResponse extends SdkResponse {
    public resources?: Array<ResourceItemInfo>;
    public count?: number;
    private 'X-Request-Id'?: string;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceItemInfo>): ListTenantResourcesResponse {
        this['resources'] = resources;
        return this;
    }
    public withCount(count: number): ListTenantResourcesResponse {
        this['count'] = count;
        return this;
    }
    public withXRequestId(xRequestId: string): ListTenantResourcesResponse {
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