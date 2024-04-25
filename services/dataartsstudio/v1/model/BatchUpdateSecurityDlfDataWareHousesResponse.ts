import { FgacUpdateResult } from './FgacUpdateResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchUpdateSecurityDlfDataWareHousesResponse extends SdkResponse {
    public results?: Array<FgacUpdateResult>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<FgacUpdateResult>): BatchUpdateSecurityDlfDataWareHousesResponse {
        this['results'] = results;
        return this;
    }
}