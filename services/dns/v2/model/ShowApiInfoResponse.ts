import { VersionItem } from './VersionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiInfoResponse extends SdkResponse {
    public version?: VersionItem;
    public constructor() { 
        super();
    }
    public withVersion(version: VersionItem): ShowApiInfoResponse {
        this['version'] = version;
        return this;
    }
}