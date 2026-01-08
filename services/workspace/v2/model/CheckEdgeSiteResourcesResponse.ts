import { ResourceRemainderData } from './ResourceRemainderData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CheckEdgeSiteResourcesResponse extends SdkResponse {
    private 'is_enough'?: number;
    private 'resource_remainder'?: Array<ResourceRemainderData>;
    public constructor() { 
        super();
    }
    public withIsEnough(isEnough: number): CheckEdgeSiteResourcesResponse {
        this['is_enough'] = isEnough;
        return this;
    }
    public set isEnough(isEnough: number  | undefined) {
        this['is_enough'] = isEnough;
    }
    public get isEnough(): number | undefined {
        return this['is_enough'];
    }
    public withResourceRemainder(resourceRemainder: Array<ResourceRemainderData>): CheckEdgeSiteResourcesResponse {
        this['resource_remainder'] = resourceRemainder;
        return this;
    }
    public set resourceRemainder(resourceRemainder: Array<ResourceRemainderData>  | undefined) {
        this['resource_remainder'] = resourceRemainder;
    }
    public get resourceRemainder(): Array<ResourceRemainderData> | undefined {
        return this['resource_remainder'];
    }
}