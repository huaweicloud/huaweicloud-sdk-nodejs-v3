import { ResourceEntity } from './ResourceEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AddResourcesToGroupResponse extends SdkResponse {
    public resources?: Array<ResourceEntity>;
    public constructor() { 
        super();
    }
    public withResources(resources: Array<ResourceEntity>): AddResourcesToGroupResponse {
        this['resources'] = resources;
        return this;
    }
}