import { FlavorGroupInfo } from './FlavorGroupInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDdmFlavorsResponse extends SdkResponse {
    private 'flavor_groups'?: Array<FlavorGroupInfo>;
    public constructor() { 
        super();
    }
    public withFlavorGroups(flavorGroups: Array<FlavorGroupInfo>): ListDdmFlavorsResponse {
        this['flavor_groups'] = flavorGroups;
        return this;
    }
    public set flavorGroups(flavorGroups: Array<FlavorGroupInfo>  | undefined) {
        this['flavor_groups'] = flavorGroups;
    }
    public get flavorGroups(): Array<FlavorGroupInfo> | undefined {
        return this['flavor_groups'];
    }
}