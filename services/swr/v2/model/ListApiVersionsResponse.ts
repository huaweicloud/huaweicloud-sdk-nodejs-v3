import { VersionDetail } from './VersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public versions?: Array<VersionDetail>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<VersionDetail>): ListApiVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}