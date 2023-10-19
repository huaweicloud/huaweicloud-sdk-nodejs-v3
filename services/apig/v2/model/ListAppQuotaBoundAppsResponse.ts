import { AppQuotaAppInfo } from './AppQuotaAppInfo';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppQuotaBoundAppsResponse extends SdkResponse {
    public size?: number;
    public total?: number;
    public apps?: Array<AppQuotaAppInfo>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAppQuotaBoundAppsResponse {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAppQuotaBoundAppsResponse {
        this['total'] = total;
        return this;
    }
    public withApps(apps: Array<AppQuotaAppInfo>): ListAppQuotaBoundAppsResponse {
        this['apps'] = apps;
        return this;
    }
}