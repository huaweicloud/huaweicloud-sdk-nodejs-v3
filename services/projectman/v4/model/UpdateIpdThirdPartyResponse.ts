import { UpdateThirdPartyAssociateResponseResult } from './UpdateThirdPartyAssociateResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateIpdThirdPartyResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: UpdateThirdPartyAssociateResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): UpdateIpdThirdPartyResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): UpdateIpdThirdPartyResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: UpdateThirdPartyAssociateResponseResult): UpdateIpdThirdPartyResponse {
        this['result'] = result;
        return this;
    }
}