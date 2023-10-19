import { AppQuotaAppInfo } from './AppQuotaAppInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppQuotaBindableAppsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public apps?: Array<AppQuotaAppInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAppQuotaBindableAppsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAppQuotaBindableAppsResponse {
        this['total'] = total;
        return this;
    }
    public withApps(apps: Array<AppQuotaAppInfo>): ListAppQuotaBindableAppsResponse {
        this['apps'] = apps;
        return this;
    }
}