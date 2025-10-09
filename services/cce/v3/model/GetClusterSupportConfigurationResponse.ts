import { PackageOptions } from './PackageOptions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetClusterSupportConfigurationResponse extends SdkResponse {
    public body?: { [key: string]: Array<PackageOptions>; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: Array<PackageOptions>; }): GetClusterSupportConfigurationResponse {
        this['body'] = body;
        return this;
    }
}