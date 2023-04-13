import { ResourceResponse } from './ResourceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateCloudWafPostPaidResourceResponse extends SdkResponse {
    public type?: number;
    public resources?: Array<ResourceResponse>;
    public isNewUser?: boolean;
    public constructor() { 
        super();
    }
    public withType(type: number): CreateCloudWafPostPaidResourceResponse {
        this['type'] = type;
        return this;
    }
    public withResources(resources: Array<ResourceResponse>): CreateCloudWafPostPaidResourceResponse {
        this['resources'] = resources;
        return this;
    }
    public withIsNewUser(isNewUser: boolean): CreateCloudWafPostPaidResourceResponse {
        this['isNewUser'] = isNewUser;
        return this;
    }
}