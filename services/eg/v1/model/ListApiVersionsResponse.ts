import { ApiVersionsVersions } from './ApiVersionsVersions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListApiVersionsResponse extends SdkResponse {
    public versions?: Array<ApiVersionsVersions>;
    public constructor() { 
        super();
    }
    public withVersions(versions: Array<ApiVersionsVersions>): ListApiVersionsResponse {
        this['versions'] = versions;
        return this;
    }
}