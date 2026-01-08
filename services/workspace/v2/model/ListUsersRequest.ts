

export class ListUsersRequest {
    private 'user_name'?: string;
    private 'user_names'?: Array<string>;
    public limit?: string;
    public offset?: string;
    public description?: string;
    private 'active_type'?: string;
    private 'group_name'?: string;
    private 'share_space_subscription'?: boolean;
    private 'share_space_desktops'?: boolean;
    private 'is_query_total_desktops'?: boolean;
    private 'enterprise_project_id'?: string;
    public domain?: string;
    public constructor() { 
    }
    public withUserName(userName: string): ListUsersRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withUserNames(userNames: Array<string>): ListUsersRequest {
        this['user_names'] = userNames;
        return this;
    }
    public set userNames(userNames: Array<string>  | undefined) {
        this['user_names'] = userNames;
    }
    public get userNames(): Array<string> | undefined {
        return this['user_names'];
    }
    public withLimit(limit: string): ListUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: string): ListUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withDescription(description: string): ListUsersRequest {
        this['description'] = description;
        return this;
    }
    public withActiveType(activeType: string): ListUsersRequest {
        this['active_type'] = activeType;
        return this;
    }
    public set activeType(activeType: string  | undefined) {
        this['active_type'] = activeType;
    }
    public get activeType(): string | undefined {
        return this['active_type'];
    }
    public withGroupName(groupName: string): ListUsersRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withShareSpaceSubscription(shareSpaceSubscription: boolean): ListUsersRequest {
        this['share_space_subscription'] = shareSpaceSubscription;
        return this;
    }
    public set shareSpaceSubscription(shareSpaceSubscription: boolean  | undefined) {
        this['share_space_subscription'] = shareSpaceSubscription;
    }
    public get shareSpaceSubscription(): boolean | undefined {
        return this['share_space_subscription'];
    }
    public withShareSpaceDesktops(shareSpaceDesktops: boolean): ListUsersRequest {
        this['share_space_desktops'] = shareSpaceDesktops;
        return this;
    }
    public set shareSpaceDesktops(shareSpaceDesktops: boolean  | undefined) {
        this['share_space_desktops'] = shareSpaceDesktops;
    }
    public get shareSpaceDesktops(): boolean | undefined {
        return this['share_space_desktops'];
    }
    public withIsQueryTotalDesktops(isQueryTotalDesktops: boolean): ListUsersRequest {
        this['is_query_total_desktops'] = isQueryTotalDesktops;
        return this;
    }
    public set isQueryTotalDesktops(isQueryTotalDesktops: boolean  | undefined) {
        this['is_query_total_desktops'] = isQueryTotalDesktops;
    }
    public get isQueryTotalDesktops(): boolean | undefined {
        return this['is_query_total_desktops'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListUsersRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withDomain(domain: string): ListUsersRequest {
        this['domain'] = domain;
        return this;
    }
}