import { PageInfo } from './PageInfo';
import { ReservedInstanceConfigs } from './ReservedInstanceConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReservedInstanceConfigsResponse extends SdkResponse {
    private 'reserved_instances'?: Array<ReservedInstanceConfigs>;
    private 'page_info'?: PageInfo;
    public count?: number;
    public constructor() { 
        super();
    }
    public withReservedInstances(reservedInstances: Array<ReservedInstanceConfigs>): ListReservedInstanceConfigsResponse {
        this['reserved_instances'] = reservedInstances;
        return this;
    }
    public set reservedInstances(reservedInstances: Array<ReservedInstanceConfigs>  | undefined) {
        this['reserved_instances'] = reservedInstances;
    }
    public get reservedInstances(): Array<ReservedInstanceConfigs> | undefined {
        return this['reserved_instances'];
    }
    public withPageInfo(pageInfo: PageInfo): ListReservedInstanceConfigsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
    public withCount(count: number): ListReservedInstanceConfigsResponse {
        this['count'] = count;
        return this;
    }
}