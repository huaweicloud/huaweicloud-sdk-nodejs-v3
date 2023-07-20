import { VersionInfo } from './VersionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public versions?: Array<VersionInfo>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<VersionInfo>): ListApiVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}