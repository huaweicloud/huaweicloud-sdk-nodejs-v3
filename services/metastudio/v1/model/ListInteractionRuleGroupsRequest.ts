

export class ListInteractionRuleGroupsRequest {
    private 'Authorization'?: string;
    private 'X-Sdk-Date'?: string;
    private 'X-Project-Id'?: string;
    private 'X-App-UserId'?: string;
    public offset?: number;
    public limit?: number;
    private 'create_since'?: string;
    private 'create_until'?: string;
    private 'group_name'?: string;
    public constructor() { 
    }
    public withAuthorization(authorization: string): ListInteractionRuleGroupsRequest {
        this['Authorization'] = authorization;
        return this;
    }
    public set authorization(authorization: string  | undefined) {
        this['Authorization'] = authorization;
    }
    public get authorization(): string | undefined {
        return this['Authorization'];
    }
    public withXSdkDate(xSdkDate: string): ListInteractionRuleGroupsRequest {
        this['X-Sdk-Date'] = xSdkDate;
        return this;
    }
    public set xSdkDate(xSdkDate: string  | undefined) {
        this['X-Sdk-Date'] = xSdkDate;
    }
    public get xSdkDate(): string | undefined {
        return this['X-Sdk-Date'];
    }
    public withXProjectId(xProjectId: string): ListInteractionRuleGroupsRequest {
        this['X-Project-Id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['X-Project-Id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['X-Project-Id'];
    }
    public withXAppUserId(xAppUserId: string): ListInteractionRuleGroupsRequest {
        this['X-App-UserId'] = xAppUserId;
        return this;
    }
    public set xAppUserId(xAppUserId: string  | undefined) {
        this['X-App-UserId'] = xAppUserId;
    }
    public get xAppUserId(): string | undefined {
        return this['X-App-UserId'];
    }
    public withOffset(offset: number): ListInteractionRuleGroupsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInteractionRuleGroupsRequest {
        this['limit'] = limit;
        return this;
    }
    public withCreateSince(createSince: string): ListInteractionRuleGroupsRequest {
        this['create_since'] = createSince;
        return this;
    }
    public set createSince(createSince: string  | undefined) {
        this['create_since'] = createSince;
    }
    public get createSince(): string | undefined {
        return this['create_since'];
    }
    public withCreateUntil(createUntil: string): ListInteractionRuleGroupsRequest {
        this['create_until'] = createUntil;
        return this;
    }
    public set createUntil(createUntil: string  | undefined) {
        this['create_until'] = createUntil;
    }
    public get createUntil(): string | undefined {
        return this['create_until'];
    }
    public withGroupName(groupName: string): ListInteractionRuleGroupsRequest {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
}