import { AppInfoWithBindNum } from './AppInfoWithBindNum';
import { BasePage } from './BasePage';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppsV2Response extends SdkResponse {
    public size?: number;
    public total?: number;
    public apps?: Array<AppInfoWithBindNum>;
    public constructor(size?: number, total?: number) { 
        super();
        this['size'] = size;
        this['total'] = total;
    }
    public withSize(size: number): ListAppsV2Response {
        this['size'] = size;
        return this;
    }
    public withTotal(total: number): ListAppsV2Response {
        this['total'] = total;
        return this;
    }
    public withApps(apps: Array<AppInfoWithBindNum>): ListAppsV2Response {
        this['apps'] = apps;
        return this;
    }
}