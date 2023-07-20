import { App } from './App';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    public count?: number;
    public apps?: Array<App>;
    private 'X-request-Id'?: string;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppsResponse {
        this['count'] = count;
        return this;
    }
    public withApps(apps: Array<App>): ListAppsResponse {
        this['apps'] = apps;
        return this;
    }
    public withXRequestId(xRequestId: string): ListAppsResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-Id'];
    }
}