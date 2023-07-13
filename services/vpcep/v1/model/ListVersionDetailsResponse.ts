import { VersionObject } from './VersionObject';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListVersionDetailsResponse extends SdkResponse {
    public versions?: Array<VersionObject>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<VersionObject>): ListVersionDetailsResponse {
        this['versions'] = versions;
        return this;
    }
}