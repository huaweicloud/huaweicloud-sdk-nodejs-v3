import { AgencyRoleResult } from './AgencyRoleResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAgencyInfosResponse extends SdkResponse {
    public name?: string;
    private 'is_existed'?: boolean;
    public roles?: Array<AgencyRoleResult>;
    public constructor() { 
        super();
    }
    public withName(name: string): ListAgencyInfosResponse {
        this['name'] = name;
        return this;
    }
    public withIsExisted(isExisted: boolean): ListAgencyInfosResponse {
        this['is_existed'] = isExisted;
        return this;
    }
    public set isExisted(isExisted: boolean  | undefined) {
        this['is_existed'] = isExisted;
    }
    public get isExisted(): boolean | undefined {
        return this['is_existed'];
    }
    public withRoles(roles: Array<AgencyRoleResult>): ListAgencyInfosResponse {
        this['roles'] = roles;
        return this;
    }
}