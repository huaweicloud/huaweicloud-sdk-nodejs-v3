import { ApiVersion } from './ApiVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public version?: ApiVersion;
    public constructor() { 
        super();
    }
    public withVersion(version: ApiVersion): ShowApiVersionResponse {
        this['version'] = version;
        return this;
    }
}