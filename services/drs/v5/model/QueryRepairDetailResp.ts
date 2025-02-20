import { QueryRepairDetailRespRepairDetails } from './QueryRepairDetailRespRepairDetails';


export class QueryRepairDetailResp {
    public count?: number;
    private 'repair_details'?: Array<QueryRepairDetailRespRepairDetails>;
    public constructor() { 
    }
    public withCount(count: number): QueryRepairDetailResp {
        this['count'] = count;
        return this;
    }
    public withRepairDetails(repairDetails: Array<QueryRepairDetailRespRepairDetails>): QueryRepairDetailResp {
        this['repair_details'] = repairDetails;
        return this;
    }
    public set repairDetails(repairDetails: Array<QueryRepairDetailRespRepairDetails>  | undefined) {
        this['repair_details'] = repairDetails;
    }
    public get repairDetails(): Array<QueryRepairDetailRespRepairDetails> | undefined {
        return this['repair_details'];
    }
}