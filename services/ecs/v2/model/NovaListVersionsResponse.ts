import { NovaVersion } from './NovaVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NovaListVersionsResponse extends SdkResponse {
    public versions?: Array<NovaVersion>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<NovaVersion>): NovaListVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}