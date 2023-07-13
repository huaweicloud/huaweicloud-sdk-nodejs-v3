import { VersionResult } from './VersionResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionResponse extends SdkResponse {
    public versions?: Array<VersionResult>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<VersionResult>): ListApiVersionResponse {
        this['versions'] = versions;
        return this;
    }
}