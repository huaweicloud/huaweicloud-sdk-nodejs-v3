import { AnalysisScript } from './AnalysisScript';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAnalysisScriptsResponse extends SdkResponse {
    public count?: number;
    public records?: Array<AnalysisScript>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAnalysisScriptsResponse {
        this['count'] = count;
        return this;
    }
    public withRecords(records: Array<AnalysisScript>): ListAnalysisScriptsResponse {
        this['records'] = records;
        return this;
    }
}