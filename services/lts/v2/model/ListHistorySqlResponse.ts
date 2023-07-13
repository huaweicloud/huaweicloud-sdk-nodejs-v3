import { QuertHistorySQLResultsBody } from './QuertHistorySQLResultsBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistorySqlResponse extends SdkResponse {
    public results?: Array<QuertHistorySQLResultsBody>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<QuertHistorySQLResultsBody>): ListHistorySqlResponse {
        this['results'] = results;
        return this;
    }
}