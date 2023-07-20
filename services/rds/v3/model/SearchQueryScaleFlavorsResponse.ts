import { Computes } from './Computes';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchQueryScaleFlavorsResponse extends SdkResponse {
    private 'compute_flavor_groups'?: Array<Computes>;
    public constructor() { 
        super();
    }
    public withComputeFlavorGroups(computeFlavorGroups: Array<Computes>): SearchQueryScaleFlavorsResponse {
        this['compute_flavor_groups'] = computeFlavorGroups;
        return this;
    }
    public set computeFlavorGroups(computeFlavorGroups: Array<Computes>  | undefined) {
        this['compute_flavor_groups'] = computeFlavorGroups;
    }
    public get computeFlavorGroups(): Array<Computes> | undefined {
        return this['compute_flavor_groups'];
    }
}