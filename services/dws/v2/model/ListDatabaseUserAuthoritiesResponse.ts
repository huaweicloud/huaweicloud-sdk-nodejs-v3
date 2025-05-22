import { GrantAuthority } from './GrantAuthority';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseUserAuthoritiesResponse extends SdkResponse {
    private 'authority_list'?: Array<GrantAuthority>;
    public count?: number;
    public constructor() { 
        super();
    }
    public withAuthorityList(authorityList: Array<GrantAuthority>): ListDatabaseUserAuthoritiesResponse {
        this['authority_list'] = authorityList;
        return this;
    }
    public set authorityList(authorityList: Array<GrantAuthority>  | undefined) {
        this['authority_list'] = authorityList;
    }
    public get authorityList(): Array<GrantAuthority> | undefined {
        return this['authority_list'];
    }
    public withCount(count: number): ListDatabaseUserAuthoritiesResponse {
        this['count'] = count;
        return this;
    }
}