import { PackageOptions } from './PackageOptions';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowClusterConfigurationDetailsResponse extends SdkResponse {
    public responses?: { [key: string]: Array<PackageOptions>; };
    public constructor() { 
        super();
    }
    public withResponses(responses: { [key: string]: Array<PackageOptions>; }): ShowClusterConfigurationDetailsResponse {
        this['responses'] = responses;
        return this;
    }
}