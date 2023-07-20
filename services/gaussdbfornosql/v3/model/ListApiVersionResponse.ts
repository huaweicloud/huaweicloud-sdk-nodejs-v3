import { ApiVersionResponse } from './ApiVersionResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionResponse extends SdkResponse {
    public versions?: Array<ApiVersionResponse>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ApiVersionResponse>): ListApiVersionResponse {
        this['versions'] = versions;
        return this;
    }
}