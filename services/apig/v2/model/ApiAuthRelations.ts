import { AuthResult } from './AuthResult';


export class ApiAuthRelations {
    private 'api_id'?: string;
    private 'auth_result'?: AuthResult;
    private 'auth_time'?: Date;
    public id?: string;
    private 'app_id'?: string;
    private 'auth_role'?: ApiAuthRelationsAuthRoleEnum | string;
    private 'auth_tunnel'?: ApiAuthRelationsAuthTunnelEnum | string;
    private 'auth_whitelist'?: Array<string>;
    private 'auth_blacklist'?: Array<string>;
    private 'visit_params'?: string;
    public constructor() { 
    }
    public withApiId(apiId: string): ApiAuthRelations {
        this['api_id'] = apiId;
        return this;
    }
    public set apiId(apiId: string  | undefined) {
        this['api_id'] = apiId;
    }
    public get apiId(): string | undefined {
        return this['api_id'];
    }
    public withAuthResult(authResult: AuthResult): ApiAuthRelations {
        this['auth_result'] = authResult;
        return this;
    }
    public set authResult(authResult: AuthResult  | undefined) {
        this['auth_result'] = authResult;
    }
    public get authResult(): AuthResult | undefined {
        return this['auth_result'];
    }
    public withAuthTime(authTime: Date): ApiAuthRelations {
        this['auth_time'] = authTime;
        return this;
    }
    public set authTime(authTime: Date  | undefined) {
        this['auth_time'] = authTime;
    }
    public get authTime(): Date | undefined {
        return this['auth_time'];
    }
    public withId(id: string): ApiAuthRelations {
        this['id'] = id;
        return this;
    }
    public withAppId(appId: string): ApiAuthRelations {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAuthRole(authRole: ApiAuthRelationsAuthRoleEnum | string): ApiAuthRelations {
        this['auth_role'] = authRole;
        return this;
    }
    public set authRole(authRole: ApiAuthRelationsAuthRoleEnum | string  | undefined) {
        this['auth_role'] = authRole;
    }
    public get authRole(): ApiAuthRelationsAuthRoleEnum | string | undefined {
        return this['auth_role'];
    }
    public withAuthTunnel(authTunnel: ApiAuthRelationsAuthTunnelEnum | string): ApiAuthRelations {
        this['auth_tunnel'] = authTunnel;
        return this;
    }
    public set authTunnel(authTunnel: ApiAuthRelationsAuthTunnelEnum | string  | undefined) {
        this['auth_tunnel'] = authTunnel;
    }
    public get authTunnel(): ApiAuthRelationsAuthTunnelEnum | string | undefined {
        return this['auth_tunnel'];
    }
    public withAuthWhitelist(authWhitelist: Array<string>): ApiAuthRelations {
        this['auth_whitelist'] = authWhitelist;
        return this;
    }
    public set authWhitelist(authWhitelist: Array<string>  | undefined) {
        this['auth_whitelist'] = authWhitelist;
    }
    public get authWhitelist(): Array<string> | undefined {
        return this['auth_whitelist'];
    }
    public withAuthBlacklist(authBlacklist: Array<string>): ApiAuthRelations {
        this['auth_blacklist'] = authBlacklist;
        return this;
    }
    public set authBlacklist(authBlacklist: Array<string>  | undefined) {
        this['auth_blacklist'] = authBlacklist;
    }
    public get authBlacklist(): Array<string> | undefined {
        return this['auth_blacklist'];
    }
    public withVisitParams(visitParams: string): ApiAuthRelations {
        this['visit_params'] = visitParams;
        return this;
    }
    public set visitParams(visitParams: string  | undefined) {
        this['visit_params'] = visitParams;
    }
    public get visitParams(): string | undefined {
        return this['visit_params'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ApiAuthRelationsAuthRoleEnum {
    PROVIDER = 'PROVIDER',
    CONSUMER = 'CONSUMER'
}
/**
    * @export
    * @enum {string}
    */
export enum ApiAuthRelationsAuthTunnelEnum {
    NORMAL = 'NORMAL',
    GREEN = 'GREEN'
}
