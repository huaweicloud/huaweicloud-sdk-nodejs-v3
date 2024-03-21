import { HouseholdRegisterResult } from './HouseholdRegisterResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class RecognizeHouseholdRegisterResponse extends SdkResponse {
    public result?: Array<HouseholdRegisterResult>;
    public constructor() { 
        super();
    }
    public withResult(result: Array<HouseholdRegisterResult>): RecognizeHouseholdRegisterResponse {
        this['result'] = result;
        return this;
    }
}