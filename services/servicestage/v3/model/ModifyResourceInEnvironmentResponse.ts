import { Resource } from './Resource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ModifyResourceInEnvironmentResponse extends SdkResponse {
    public resources?: Array<Resource>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<Resource>): ModifyResourceInEnvironmentResponse {
        this['resources'] = resources;
        return this;
    }
}