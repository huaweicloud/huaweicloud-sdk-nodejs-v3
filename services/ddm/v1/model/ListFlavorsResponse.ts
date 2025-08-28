import { ComputeFlavorGroupsInfo } from './ComputeFlavorGroupsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFlavorsResponse extends SdkResponse {
    public computeFlavorGroups?: Array<ComputeFlavorGroupsInfo>;
    public constructor() { 
        super();
    }
    public withComputeFlavorGroups(computeFlavorGroups: Array<ComputeFlavorGroupsInfo>): ListFlavorsResponse {
        this['computeFlavorGroups'] = computeFlavorGroups;
        return this;
    }
}