import { ApiVersionResponse } from './ApiVersionResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public version?: ApiVersionResponse;
    public constructor() { 
        super();
    }
    public withVersion(version: ApiVersionResponse): ShowApiVersionResponse {
        this['version'] = version;
        return this;
    }
}