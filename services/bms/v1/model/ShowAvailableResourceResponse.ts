import { FlavorResource } from './FlavorResource';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvailableResourceResponse extends SdkResponse {
    private 'availability_zone'?: string;
    public flavors?: Array<FlavorResource>;
    public constructor() { 
        super();
    }
    public withAvailabilityZone(availabilityZone: string): ShowAvailableResourceResponse {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withFlavors(flavors: Array<FlavorResource>): ShowAvailableResourceResponse {
        this['flavors'] = flavors;
        return this;
    }
}