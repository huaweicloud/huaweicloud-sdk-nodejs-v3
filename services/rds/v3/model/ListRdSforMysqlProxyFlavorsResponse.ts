import { MysqlProxyFlavorsResponseComputeFlavorGroups } from './MysqlProxyFlavorsResponseComputeFlavorGroups';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRdSforMysqlProxyFlavorsResponse extends SdkResponse {
    private 'compute_flavor_groups'?: Array<MysqlProxyFlavorsResponseComputeFlavorGroups>;
    public constructor() { 
        super();
    }
    public withComputeFlavorGroups(computeFlavorGroups: Array<MysqlProxyFlavorsResponseComputeFlavorGroups>): ListRdSforMysqlProxyFlavorsResponse {
        this['compute_flavor_groups'] = computeFlavorGroups;
        return this;
    }
    public set computeFlavorGroups(computeFlavorGroups: Array<MysqlProxyFlavorsResponseComputeFlavorGroups>  | undefined) {
        this['compute_flavor_groups'] = computeFlavorGroups;
    }
    public get computeFlavorGroups(): Array<MysqlProxyFlavorsResponseComputeFlavorGroups> | undefined {
        return this['compute_flavor_groups'];
    }
}