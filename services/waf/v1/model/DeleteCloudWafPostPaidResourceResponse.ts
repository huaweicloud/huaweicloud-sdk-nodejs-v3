import { ResourceResponse } from './ResourceResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteCloudWafPostPaidResourceResponse extends SdkResponse {
    public type?: number;
    public resources?: Array<ResourceResponse>;
    public isNewUser?: boolean;
    public constructor() { 
        super();
    }
    public withType(type: number): DeleteCloudWafPostPaidResourceResponse {
        this['type'] = type;
        return this;
    }
    public withResources(resources: Array<ResourceResponse>): DeleteCloudWafPostPaidResourceResponse {
        this['resources'] = resources;
        return this;
    }
    public withIsNewUser(isNewUser: boolean): DeleteCloudWafPostPaidResourceResponse {
        this['isNewUser'] = isNewUser;
        return this;
    }
}