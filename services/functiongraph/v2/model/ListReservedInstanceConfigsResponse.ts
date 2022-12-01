import { PageInfo } from './PageInfo';
import { ReservedInstanceConfigs } from './ReservedInstanceConfigs';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListReservedInstanceConfigsResponse extends SdkResponse {
    public reservedinstances?: Array<ReservedInstanceConfigs>;
    private 'page_info'?: PageInfo | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withReservedinstances(reservedinstances: Array<ReservedInstanceConfigs>): ListReservedInstanceConfigsResponse {
        this['reservedinstances'] = reservedinstances;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListReservedInstanceConfigsResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withCount(count: number): ListReservedInstanceConfigsResponse {
        this['count'] = count;
        return this;
    }
}