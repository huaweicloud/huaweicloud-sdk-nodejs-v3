import { AgencyRole } from './AgencyRole';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowAgencyInfoResponse extends SdkResponse {
    private 'is_existed'?: boolean;
    public name?: string;
    public roles?: Array<AgencyRole>;
    public constructor() { 
        super();
    }
    public withIsExisted(isExisted: boolean): ShowAgencyInfoResponse {
        this['is_existed'] = isExisted;
        return this;
    }
    public set isExisted(isExisted: boolean  | undefined) {
        this['is_existed'] = isExisted;
    }
    public get isExisted(): boolean | undefined {
        return this['is_existed'];
    }
    public withName(name: string): ShowAgencyInfoResponse {
        this['name'] = name;
        return this;
    }
    public withRoles(roles: Array<AgencyRole>): ShowAgencyInfoResponse {
        this['roles'] = roles;
        return this;
    }
}