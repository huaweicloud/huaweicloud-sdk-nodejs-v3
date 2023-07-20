import { VersionInfo } from './VersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public version?: VersionInfo;
    public constructor() { 
        super();
    }
    public withVersion(version: VersionInfo): ShowApiVersionResponse {
        this['version'] = version;
        return this;
    }
}