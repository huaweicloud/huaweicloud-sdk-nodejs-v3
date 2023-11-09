import { AuthorizationVO } from './AuthorizationVO';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAuthorizationsResponse extends SdkResponse {
    public authorizations?: Array<AuthorizationVO>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAuthorizations(authorizations: Array<AuthorizationVO>): ListAuthorizationsResponse {
        this['authorizations'] = authorizations;
        return this;
    }
    public withCount(count: number): ListAuthorizationsResponse {
        this['count'] = count;
        return this;
    }
}