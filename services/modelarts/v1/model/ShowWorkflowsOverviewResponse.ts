
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowWorkflowsOverviewResponse extends SdkResponse {
    public total?: number;
    public stat?: { [key: string]: number; };
    public constructor() { 
        super();
    }
    public withTotal(total: number): ShowWorkflowsOverviewResponse {
        this['total'] = total;
        return this;
    }
    public withStat(stat: { [key: string]: number; }): ShowWorkflowsOverviewResponse {
        this['stat'] = stat;
        return this;
    }
}