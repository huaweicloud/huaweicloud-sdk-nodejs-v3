import { UpdateAiInstanceProtectionResultItem } from './UpdateAiInstanceProtectionResultItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateAiInstanceProtectionResponse extends SdkResponse {
    public results?: Array<UpdateAiInstanceProtectionResultItem>;
    public constructor() { 
        super();
    }
    public withResults(results: Array<UpdateAiInstanceProtectionResultItem>): UpdateAiInstanceProtectionResponse {
        this['results'] = results;
        return this;
    }
}