import { GaussDBListDatabaseRoles } from './GaussDBListDatabaseRoles';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDatabaseRolesResponse extends SdkResponse {
    public roles?: Array<GaussDBListDatabaseRoles>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withRoles(roles: Array<GaussDBListDatabaseRoles>): ListDatabaseRolesResponse {
        this['roles'] = roles;
        return this;
    }
    public withTotalCount(totalCount: number): ListDatabaseRolesResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}