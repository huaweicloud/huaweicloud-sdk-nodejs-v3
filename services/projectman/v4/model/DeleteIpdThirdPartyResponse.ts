import { DeleteThirdPartyAssociateResponseResult } from './DeleteThirdPartyAssociateResponseResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class DeleteIpdThirdPartyResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: DeleteThirdPartyAssociateResponseResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): DeleteIpdThirdPartyResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): DeleteIpdThirdPartyResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: DeleteThirdPartyAssociateResponseResult): DeleteIpdThirdPartyResponse {
        this['result'] = result;
        return this;
    }
}