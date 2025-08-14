
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class GetIdentityStoreSummaryResponse extends SdkResponse {
    public users?: number;
    private 'users_quota'?: number;
    public groups?: number;
    private 'groups_quota'?: number;
    public constructor() { 
        super();
    }
    public withUsers(users: number): GetIdentityStoreSummaryResponse {
        this['users'] = users;
        return this;
    }
    public withUsersQuota(usersQuota: number): GetIdentityStoreSummaryResponse {
        this['users_quota'] = usersQuota;
        return this;
    }
    public set usersQuota(usersQuota: number  | undefined) {
        this['users_quota'] = usersQuota;
    }
    public get usersQuota(): number | undefined {
        return this['users_quota'];
    }
    public withGroups(groups: number): GetIdentityStoreSummaryResponse {
        this['groups'] = groups;
        return this;
    }
    public withGroupsQuota(groupsQuota: number): GetIdentityStoreSummaryResponse {
        this['groups_quota'] = groupsQuota;
        return this;
    }
    public set groupsQuota(groupsQuota: number  | undefined) {
        this['groups_quota'] = groupsQuota;
    }
    public get groupsQuota(): number | undefined {
        return this['groups_quota'];
    }
}