

export class ApiAuthBase {
    public id?: string;
    private 'api_id'?: string;
    private 'api_name'?: string;
    private 'group_name'?: string;
    private 'api_type'?: number;
    private 'api_remark'?: string;
    private 'env_id'?: string;
    private 'auth_role'?: string;
    private 'auth_time'?: Date;
    private 'app_name'?: string;
    private 'app_remark'?: string;
    private 'app_type'?: ApiAuthBaseAppTypeEnum | string;
    private 'app_creator'?: string;
    private 'publish_id'?: string;
    private 'group_id'?: string;
    private 'auth_tunnel'?: ApiAuthBaseAuthTunnelEnum | string;
    private 'auth_whitelist'?: Array<string>;
    private 'auth_blacklist'?: Array<string>;
    private 'visit_param'?: string;
    private 'roma_app_type'?: string;
    public tags?: Array<string>;
    public constructor() { 
    }
    public withId(id: string): ApiAuthBase {
        this['id'] = id;
        return this;
    }
    public withApiId(apiId: string): ApiAuthBase {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withApiName(apiName: string): ApiAuthBase {
        this['api_name'] = apiName;
        return this;
    }
    public set apiName(apiName: string  | undefined) {
        this['api_name'] = apiName;
    }
    public get apiName(): string | undefined {
        return this['api_name'];
    }
    public withGroupName(groupName: string): ApiAuthBase {
        this['group_name'] = groupName;
        return this;
    }
    public set groupName(groupName: string  | undefined) {
        this['group_name'] = groupName;
    }
    public get groupName(): string | undefined {
        return this['group_name'];
    }
    public withApiType(apiType: number): ApiAuthBase {
        this['api_type'] = apiType;
        return this;
    }
    public set apiType(apiType: number  | undefined) {
        this['api_type'] = apiType;
    }
    public get apiType(): number | undefined {
        return this['api_type'];
    }
    public withApiRemark(apiRemark: string): ApiAuthBase {
        this['api_remark'] = apiRemark;
        return this;
    }
    public set apiRemark(apiRemark: string  | undefined) {
        this['api_remark'] = apiRemark;
    }
    public get apiRemark(): string | undefined {
        return this['api_remark'];
    }
    public withEnvId(envId: string): ApiAuthBase {
        this['env_id'] = envId;
        return this;
    }
    public set envId(envId: string  | undefined) {
        this['env_id'] = envId;
    }
    public get envId(): string | undefined {
        return this['env_id'];
    }
    public withAuthRole(authRole: string): ApiAuthBase {
        this['auth_role'] = authRole;
        return this;
    }
    public set authRole(authRole: string  | undefined) {
        this['auth_role'] = authRole;
    }
    public get authRole(): string | undefined {
        return this['auth_role'];
    }
    public withAuthTime(authTime: Date): ApiAuthBase {
        this['auth_time'] = authTime;
        return this;
    }
    public set authTime(authTime: Date  | undefined) {
        this['auth_time'] = authTime;
    }
    public get authTime(): Date | undefined {
        return this['auth_time'];
    }
    public withAppName(appName: string): ApiAuthBase {
        this['app_name'] = appName;
        return this;
    }
    public set appName(appName: string  | undefined) {
        this['app_name'] = appName;
    }
    public get appName(): string | undefined {
        return this['app_name'];
    }
    public withAppRemark(appRemark: string): ApiAuthBase {
        this['app_remark'] = appRemark;
        return this;
    }
    public set appRemark(appRemark: string  | undefined) {
        this['app_remark'] = appRemark;
    }
    public get appRemark(): string | undefined {
        return this['app_remark'];
    }
    public withAppType(appType: ApiAuthBaseAppTypeEnum | string): ApiAuthBase {
        this['app_type'] = appType;
        return this;
    }
    public set appType(appType: ApiAuthBaseAppTypeEnum | string  | undefined) {
        this['app_type'] = appType;
    }
    public get appType(): ApiAuthBaseAppTypeEnum | string | undefined {
        return this['app_type'];
    }
    public withAppCreator(appCreator: string): ApiAuthBase {
        this['app_creator'] = appCreator;
        return this;
    }
    public set appCreator(appCreator: string  | undefined) {
        this['app_creator'] = appCreator;
    }
    public get appCreator(): string | undefined {
        return this['app_creator'];
    }
    public withPublishId(publishId: string): ApiAuthBase {
        this['publish_id'] = publishId;
        return this;
    }
    public set publishId(publishId: string  | undefined) {
        this['publish_id'] = publishId;
    }
    public get publishId(): string | undefined {
        return this['publish_id'];
    }
    public withGroupId(groupId: string): ApiAuthBase {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withAuthTunnel(authTunnel: ApiAuthBaseAuthTunnelEnum | string): ApiAuthBase {
        this['auth_tunnel'] = authTunnel;
        return this;
    }
    public set authTunnel(authTunnel: ApiAuthBaseAuthTunnelEnum | string  | undefined) {
        this['auth_tunnel'] = authTunnel;
    }
    public get authTunnel(): ApiAuthBaseAuthTunnelEnum | string | undefined {
        return this['auth_tunnel'];
    }
    public withAuthWhitelist(authWhitelist: Array<string>): ApiAuthBase {
        this['auth_whitelist'] = authWhitelist;
        return this;
    }
    public set authWhitelist(authWhitelist: Array<string>  | undefined) {
        this['auth_whitelist'] = authWhitelist;
    }
    public get authWhitelist(): Array<string> | undefined {
        return this['auth_whitelist'];
    }
    public withAuthBlacklist(authBlacklist: Array<string>): ApiAuthBase {
        this['auth_blacklist'] = authBlacklist;
        return this;
    }
    public set authBlacklist(authBlacklist: Array<string>  | undefined) {
        this['auth_blacklist'] = authBlacklist;
    }
    public get authBlacklist(): Array<string> | undefined {
        return this['auth_blacklist'];
    }
    public withVisitParam(visitParam: string): ApiAuthBase {
        this['visit_param'] = visitParam;
        return this;
    }
    public set visitParam(visitParam: string  | undefined) {
        this['visit_param'] = visitParam;
    }
    public get visitParam(): string | undefined {
        return this['visit_param'];
    }
    public withRomaAppType(romaAppType: string): ApiAuthBase {
        this['roma_app_type'] = romaAppType;
        return this;
    }
    public set romaAppType(romaAppType: string  | undefined) {
        this['roma_app_type'] = romaAppType;
    }
    public get romaAppType(): string | undefined {
        return this['roma_app_type'];
    }
    public withTags(tags: Array<string>): ApiAuthBase {
        this['tags'] = tags;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiAuthBaseAppTypeEnum {
    APIG = 'apig',
    ROMA = 'roma'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiAuthBaseAuthTunnelEnum {
    NORMAL = 'NORMAL',
    GREEN = 'GREEN'
}
