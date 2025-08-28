import { EngineGroupsInfo } from './EngineGroupsInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListEnginesResponse extends SdkResponse {
    public engineGroups?: Array<EngineGroupsInfo>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withEngineGroups(engineGroups: Array<EngineGroupsInfo>): ListEnginesResponse {
        this['engineGroups'] = engineGroups;
        return this;
    }
    public withOffset(offset: number): ListEnginesResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListEnginesResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ListEnginesResponse {
        this['total'] = total;
        return this;
    }
}