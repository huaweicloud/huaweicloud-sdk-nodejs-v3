import { InconsistentTypeEnum } from './InconsistentTypeEnum';
import { PoolDesktopsDetailInfo } from './PoolDesktopsDetailInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoolDesktopsDetailResponse extends SdkResponse {
    private 'pool_desktops'?: Array<PoolDesktopsDetailInfo>;
    private 'total_count'?: number;
    private 'on_demand_desktops_num'?: number;
    private 'period_desktops_num'?: number;
    private 'on_demand_free_image_desktops_num'?: number;
    private 'on_demand_charge_image_desktops_num'?: number;
    private 'period_free_image_desktops_num'?: number;
    private 'period_charge_image_desktops_num'?: number;
    private 'inconsistent_type'?: InconsistentTypeEnum;
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
    public withOnDemandFreeImageDesktopsNum(onDemandFreeImageDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['on_demand_free_image_desktops_num'] = onDemandFreeImageDesktopsNum;
        return this;
    }
    public set onDemandFreeImageDesktopsNum(onDemandFreeImageDesktopsNum: number  | undefined) {
        this['on_demand_free_image_desktops_num'] = onDemandFreeImageDesktopsNum;
    }
    public get onDemandFreeImageDesktopsNum(): number | undefined {
        return this['on_demand_free_image_desktops_num'];
    }
    public withOnDemandChargeImageDesktopsNum(onDemandChargeImageDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['on_demand_charge_image_desktops_num'] = onDemandChargeImageDesktopsNum;
        return this;
    }
    public set onDemandChargeImageDesktopsNum(onDemandChargeImageDesktopsNum: number  | undefined) {
        this['on_demand_charge_image_desktops_num'] = onDemandChargeImageDesktopsNum;
    }
    public get onDemandChargeImageDesktopsNum(): number | undefined {
        return this['on_demand_charge_image_desktops_num'];
    }
    public withPeriodFreeImageDesktopsNum(periodFreeImageDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['period_free_image_desktops_num'] = periodFreeImageDesktopsNum;
        return this;
    }
    public set periodFreeImageDesktopsNum(periodFreeImageDesktopsNum: number  | undefined) {
        this['period_free_image_desktops_num'] = periodFreeImageDesktopsNum;
    }
    public get periodFreeImageDesktopsNum(): number | undefined {
        return this['period_free_image_desktops_num'];
    }
    public withPeriodChargeImageDesktopsNum(periodChargeImageDesktopsNum: number): ListPoolDesktopsDetailResponse {
        this['period_charge_image_desktops_num'] = periodChargeImageDesktopsNum;
        return this;
    }
    public set periodChargeImageDesktopsNum(periodChargeImageDesktopsNum: number  | undefined) {
        this['period_charge_image_desktops_num'] = periodChargeImageDesktopsNum;
    }
    public get periodChargeImageDesktopsNum(): number | undefined {
        return this['period_charge_image_desktops_num'];
    }
    public withInconsistentType(inconsistentType: InconsistentTypeEnum): ListPoolDesktopsDetailResponse {
        this['inconsistent_type'] = inconsistentType;
        return this;
    }
    public set inconsistentType(inconsistentType: InconsistentTypeEnum  | undefined) {
        this['inconsistent_type'] = inconsistentType;
    }
    public get inconsistentType(): InconsistentTypeEnum | undefined {
        return this['inconsistent_type'];
    }
}