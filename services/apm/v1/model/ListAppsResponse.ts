import { AppNodeModel } from './AppNodeModel';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsResponse extends SdkResponse {
    public apps?: Array<AppNodeModel>;
    public constructor() { 
        super();
    }
    public withApps(apps: Array<AppNodeModel>): ListAppsResponse {
        this['apps'] = apps;
        return this;
    }
}