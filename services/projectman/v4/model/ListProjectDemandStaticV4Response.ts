import { DemandStatisticResponseV4 } from './DemandStatisticResponseV4';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProjectDemandStaticV4Response extends SdkResponse {
    private 'demand_statistics'?: Array<DemandStatisticResponseV4>;
    public constructor() { 
        super();
    }
    public withDemandStatistics(demandStatistics: Array<DemandStatisticResponseV4>): ListProjectDemandStaticV4Response {
        this['demand_statistics'] = demandStatistics;
        return this;
    }
    public set demandStatistics(demandStatistics: Array<DemandStatisticResponseV4>  | undefined) {
        this['demand_statistics'] = demandStatistics;
    }
    public get demandStatistics(): Array<DemandStatisticResponseV4> | undefined {
        return this['demand_statistics'];
    }
}