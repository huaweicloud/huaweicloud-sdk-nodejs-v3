import { ThirdPartyAssociatedResult } from './ThirdPartyAssociatedResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowIpdThirdPartyAssociatedResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: ThirdPartyAssociatedResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): ShowIpdThirdPartyAssociatedResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): ShowIpdThirdPartyAssociatedResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: ThirdPartyAssociatedResult): ShowIpdThirdPartyAssociatedResponse {
        this['result'] = result;
        return this;
    }
}