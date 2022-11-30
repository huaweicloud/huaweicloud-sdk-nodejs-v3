import { FuncReservedInstance } from './FuncReservedInstance';
import { PageInfo } from './PageInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListFunctionReservedInstancesResponse extends SdkResponse {
    public reservedinstances?: Array<FuncReservedInstance>;
    private 'page_info'?: PageInfo | undefined;
    public count?: number;
    public constructor() { 
        super();
    }
    public withReservedinstances(reservedinstances: Array<FuncReservedInstance>): ListFunctionReservedInstancesResponse {
        this['reservedinstances'] = reservedinstances;
        return this;
    }
    public withPageInfo(pageInfo: PageInfo): ListFunctionReservedInstancesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
    public withCount(count: number): ListFunctionReservedInstancesResponse {
        this['count'] = count;
        return this;
    }
}