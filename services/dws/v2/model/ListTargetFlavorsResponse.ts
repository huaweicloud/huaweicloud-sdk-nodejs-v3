import { FlavorInfoResponse } from './FlavorInfoResponse';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTargetFlavorsResponse extends SdkResponse {
    public count?: number;
    public flavors?: Array<FlavorInfoResponse>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListTargetFlavorsResponse {
        this['count'] = count;
        return this;
    }
    public withFlavors(flavors: Array<FlavorInfoResponse>): ListTargetFlavorsResponse {
        this['flavors'] = flavors;
        return this;
    }
}