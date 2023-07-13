import { ObjectAuthority } from './ObjectAuthority';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDatabaseAuthorityResponse extends SdkResponse {
    public authorities?: Array<ObjectAuthority>;
    public constructor() { 
        super();
    }
    public withAuthorities(authorities: Array<ObjectAuthority>): ShowDatabaseAuthorityResponse {
        this['authorities'] = authorities;
        return this;
    }
}