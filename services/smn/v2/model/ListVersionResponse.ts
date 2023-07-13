import { VersionItem } from './VersionItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVersionResponse extends SdkResponse {
    public version?: VersionItem;
    public constructor() { 
        super();
    }
    public withVersion(version: VersionItem): ListVersionResponse {
        this['version'] = version;
        return this;
    }
}