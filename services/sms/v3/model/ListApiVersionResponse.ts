import { Version } from './Version';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionResponse extends SdkResponse {
    public versions?: Array<Version>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<Version>): ListApiVersionResponse {
        this['versions'] = versions;
        return this;
    }
}