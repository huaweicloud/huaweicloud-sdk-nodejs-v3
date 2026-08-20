import { IssuesAssociationRespResult } from './IssuesAssociationRespResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class AssociateIpdThirdPartyResponse extends SdkResponse {
    public status?: string;
    public message?: string;
    public result?: IssuesAssociationRespResult;
    public constructor() { 
        super();
    }
    public withStatus(status: string): AssociateIpdThirdPartyResponse {
        this['status'] = status;
        return this;
    }
    public withMessage(message: string): AssociateIpdThirdPartyResponse {
        this['message'] = message;
        return this;
    }
    public withResult(result: IssuesAssociationRespResult): AssociateIpdThirdPartyResponse {
        this['result'] = result;
        return this;
    }
}