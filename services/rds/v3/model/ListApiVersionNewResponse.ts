import { ApiVersion } from './ApiVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionNewResponse extends SdkResponse {
    public versions?: Array<ApiVersion>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ApiVersion>): ListApiVersionNewResponse {
        this['versions'] = versions;
        return this;
    }
}