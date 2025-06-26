import { Authorization } from './Authorization';
import { PageResp } from './PageResp';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppGroupAuthorizationResponse extends SdkResponse {
    public count?: number;
    public authorizations?: Array<Authorization>;
    public constructor() { 
        super();
    }
    public withCount(count: number): ListAppGroupAuthorizationResponse {
        this['count'] = count;
        return this;
    }
    public withAuthorizations(authorizations: Array<Authorization>): ListAppGroupAuthorizationResponse {
        this['authorizations'] = authorizations;
        return this;
    }
}