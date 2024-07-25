import { PackageOptions } from './PackageOptions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterSupportConfigurationResponse extends SdkResponse {
    public body?: { [key: string]: Array<PackageOptions>; };
    public constructor() { 
        super();
    }
    public withBody(body: { [key: string]: Array<PackageOptions>; }): ShowClusterSupportConfigurationResponse {
        this['body'] = body;
        return this;
    }
}