import { ApiAuthRelations } from './ApiAuthRelations';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateAuthorizingAppsV2Response extends SdkResponse {
    public auths?: Array<ApiAuthRelations>;
    public constructor() { 
        super();
    }
    public withAuths(auths: Array<ApiAuthRelations>): CreateAuthorizingAppsV2Response {
        this['auths'] = auths;
        return this;
    }
}