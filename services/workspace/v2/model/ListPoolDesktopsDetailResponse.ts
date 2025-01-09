import { PoolDesktopsDetailInfo } from './PoolDesktopsDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolDesktopsDetailResponse extends SdkResponse {
    private 'pool_desktops'?: Array<PoolDesktopsDetailInfo>;
    private 'total_count'?: number;
    private 'on_demand_desktops_num'?: number;
    private 'period_desktops_num'?: number;
    public constructor() { 
        super();
    }
    public withPoolDesktops(poolDesktops: Array<PoolDesktopsDetailInfo>): ListPoolDesktopsDetailResponse {
        this['pool_desktops'] = poolDesktops;
        return this;
    }
    public set poolDesktops(poolDesktops: Array<PoolDesktopsDetailInfo>  | undefined) {
        this['pool_desktops'] = poolDesktops;
    }
    public get poolDesktops(): Array<PoolDesktopsDetailInfo> | undefined {
        return this['pool_desktops'];
    }
    public withTotalCount(totalCount: number): ListPoolDesktopsDetailResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withOnDemandDesktopsNum(onDemandDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['on_demand_desktops_num'] = onDemandDesktopsNum;
        return this;
    }
    public set onDemandDesktopsNum(onDemandDesktopsNum: number  | undefined) {
        this['on_demand_desktops_num'] = onDemandDesktopsNum;
    }
    public get onDemandDesktopsNum(): number | undefined {
        return this['on_demand_desktops_num'];
    }
    public withPeriodDesktopsNum(periodDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['period_desktops_num'] = periodDesktopsNum;
        return this;
    }
    public set periodDesktopsNum(periodDesktopsNum: number  | undefined) {
        this['period_desktops_num'] = periodDesktopsNum;
    }
    public get periodDesktopsNum(): number | undefined {
        return this['period_desktops_num'];
    }
}