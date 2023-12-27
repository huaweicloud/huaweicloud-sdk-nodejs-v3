import { AgencyAuthorizeInfo } from './AgencyAuthorizeInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAuthorizationResponse extends SdkResponse {
    public authorization?: AgencyAuthorizeInfo;
    public constructor() { 
        super();
    }
    public withAuthorization(authorization: AgencyAuthorizeInfo): ShowAuthorizationResponse {
        this['authorization'] = authorization;
        return this;
    }
}