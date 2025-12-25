import { InstallationScript } from './InstallationScript';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListInstallationResponse extends SdkResponse {
    public count?: number;
    public records?: Array<InstallationScript>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListInstallationResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<InstallationScript>): ListInstallationResponse {
        this['records'] = records;
        return this;
    }
}