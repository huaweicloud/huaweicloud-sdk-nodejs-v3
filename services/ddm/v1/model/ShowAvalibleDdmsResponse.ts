import { DDMInstance4Restore } from './DDMInstance4Restore';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAvalibleDdmsResponse extends SdkResponse {
    public instances?: Array<DDMInstance4Restore>;
    public offset?: number;
    public limit?: number;
    public total?: number;
    public constructor() { 
        super();
    }
    public withInstances(instances: Array<DDMInstance4Restore>): ShowAvalibleDdmsResponse {
        this['instances'] = instances;
        return this;
    }
    public withOffset(offset: number): ShowAvalibleDdmsResponse {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowAvalibleDdmsResponse {
        this['limit'] = limit;
        return this;
    }
    public withTotal(total: number): ShowAvalibleDdmsResponse {
        this['total'] = total;
        return this;
    }
}