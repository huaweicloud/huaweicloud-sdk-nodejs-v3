import { ComputeFlavorGroup } from './ComputeFlavorGroup';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResizeResponse extends SdkResponse {
    private 'flavor_groups'?: Array<ComputeFlavorGroup>;
    public constructor() { 
        super();
    }
    public withFlavorGroups(flavorGroups: Array<ComputeFlavorGroup>): ListFlavorsResizeResponse {
        this['flavor_groups'] = flavorGroups;
        return this;
    }
    public set flavorGroups(flavorGroups: Array<ComputeFlavorGroup>  | undefined) {
        this['flavor_groups'] = flavorGroups;
    }
    public get flavorGroups(): Array<ComputeFlavorGroup> | undefined {
        return this['flavor_groups'];
    }
}