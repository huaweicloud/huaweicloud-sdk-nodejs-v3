import { ApiVersion } from './ApiVersion';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowApiVersionResponse extends SdkResponse {
    public versions?: ApiVersion;
    public version?: ApiVersion;
    public constructor() { 
        super();
    }
    public withVersions(versions: ApiVersion): ShowApiVersionResponse {
        this['versions'] = versions;
        return this;
    }
    public withVersion(version: ApiVersion): ShowApiVersionResponse {
        this['version'] = version;
        return this;
    }
}