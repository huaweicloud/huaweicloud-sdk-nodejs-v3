import { ApiVersionDetail } from './ApiVersionDetail';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowVersionsResponse extends SdkResponse {
    public versions?: Array<ApiVersionDetail>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ApiVersionDetail>): ShowVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}