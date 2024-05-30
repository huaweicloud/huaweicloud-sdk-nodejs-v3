import { ResetLinkAttributeAndStandardResultData } from './ResetLinkAttributeAndStandardResultData';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ResetLinkAttributeAndStandardResponse extends SdkResponse {
    public data?: ResetLinkAttributeAndStandardResultData;
    public constructor() { 
        super();
    }
    public withData(data: ResetLinkAttributeAndStandardResultData): ResetLinkAttributeAndStandardResponse {
        this['data'] = data;
        return this;
    }
}