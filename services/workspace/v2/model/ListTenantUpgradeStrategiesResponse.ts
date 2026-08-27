import { TenantUpgradeStrategyDetailRsp } from './TenantUpgradeStrategyDetailRsp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTenantUpgradeStrategiesResponse extends SdkResponse {
    private 'total_count'?: number;
    public strategies?: Array<TenantUpgradeStrategyDetailRsp>;
    public constructor() { 
        super();
    }
    public withTotalCount(totalCount: number): ListTenantUpgradeStrategiesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withStrategies(strategies: Array<TenantUpgradeStrategyDetailRsp>): ListTenantUpgradeStrategiesResponse {
        this['strategies'] = strategies;
        return this;
    }
}