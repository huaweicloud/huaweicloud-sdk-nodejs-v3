import { UserPolicyResponeEntity } from './UserPolicyResponeEntity';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListUserPoliciesResponse extends SdkResponse {
    private 'user_name'?: string;
    public total?: number;
    public policies?: Array<UserPolicyResponeEntity>;
    public constructor() { 
        super();
    }
    public withUserName(userName: string): ListUserPoliciesResponse {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withTotal(total: number): ListUserPoliciesResponse {
        this['total'] = total;
        return this;
    }
    public withPolicies(policies: Array<UserPolicyResponeEntity>): ListUserPoliciesResponse {
        this['policies'] = policies;
        return this;
    }
}