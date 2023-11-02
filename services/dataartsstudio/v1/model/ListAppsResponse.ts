import { AppReturnDTO } from './AppReturnDTO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    public total?: number;
    public apps?: Array<AppReturnDTO>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListAppsResponse {
        this['total'] = total;
        return this;
    }
    public withApps(apps: Array<AppReturnDTO>): ListAppsResponse {
        this['apps'] = apps;
        return this;
    }
}