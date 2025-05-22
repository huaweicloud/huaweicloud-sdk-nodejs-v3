import { GrantAuthority } from './GrantAuthority';


export class UserAuthorityReq {
    public name?: string;
    public type?: string;
    public login?: boolean;
    public password?: string;
    private 'system_admin'?: boolean;
    private 'logical_cluster'?: string;
    private 'password_disable'?: boolean;
    private 'create_role'?: boolean;
    private 'create_db'?: boolean;
    public inherit?: boolean;
    private 'conn_limit'?: number;
    private 'grant_members'?: Array<string>;
    private 'grant_list'?: Array<GrantAuthority>;
    public desc?: string;
    public constructor(name?: string, type?: string) { 
        this['name'] = name;
        this['type'] = type;
    }
    public withName(name: string): UserAuthorityReq {
        this['name'] = name;
        return this;
    }
    public withType(type: string): UserAuthorityReq {
        this['type'] = type;
        return this;
    }
    public withLogin(login: boolean): UserAuthorityReq {
        this['login'] = login;
        return this;
    }
    public withPassword(password: string): UserAuthorityReq {
        this['password'] = password;
        return this;
    }
    public withSystemAdmin(systemAdmin: boolean): UserAuthorityReq {
        this['system_admin'] = systemAdmin;
        return this;
    }
    public set systemAdmin(systemAdmin: boolean  | undefined) {
        this['system_admin'] = systemAdmin;
    }
    public get systemAdmin(): boolean | undefined {
        return this['system_admin'];
    }
    public withLogicalCluster(logicalCluster: string): UserAuthorityReq {
        this['logical_cluster'] = logicalCluster;
        return this;
    }
    public set logicalCluster(logicalCluster: string  | undefined) {
        this['logical_cluster'] = logicalCluster;
    }
    public get logicalCluster(): string | undefined {
        return this['logical_cluster'];
    }
    public withPasswordDisable(passwordDisable: boolean): UserAuthorityReq {
        this['password_disable'] = passwordDisable;
        return this;
    }
    public set passwordDisable(passwordDisable: boolean  | undefined) {
        this['password_disable'] = passwordDisable;
    }
    public get passwordDisable(): boolean | undefined {
        return this['password_disable'];
    }
    public withCreateRole(createRole: boolean): UserAuthorityReq {
        this['create_role'] = createRole;
        return this;
    }
    public set createRole(createRole: boolean  | undefined) {
        this['create_role'] = createRole;
    }
    public get createRole(): boolean | undefined {
        return this['create_role'];
    }
    public withCreateDb(createDb: boolean): UserAuthorityReq {
        this['create_db'] = createDb;
        return this;
    }
    public set createDb(createDb: boolean  | undefined) {
        this['create_db'] = createDb;
    }
    public get createDb(): boolean | undefined {
        return this['create_db'];
    }
    public withInherit(inherit: boolean): UserAuthorityReq {
        this['inherit'] = inherit;
        return this;
    }
    public withConnLimit(connLimit: number): UserAuthorityReq {
        this['conn_limit'] = connLimit;
        return this;
    }
    public set connLimit(connLimit: number  | undefined) {
        this['conn_limit'] = connLimit;
    }
    public get connLimit(): number | undefined {
        return this['conn_limit'];
    }
    public withGrantMembers(grantMembers: Array<string>): UserAuthorityReq {
        this['grant_members'] = grantMembers;
        return this;
    }
    public set grantMembers(grantMembers: Array<string>  | undefined) {
        this['grant_members'] = grantMembers;
    }
    public get grantMembers(): Array<string> | undefined {
        return this['grant_members'];
    }
    public withGrantList(grantList: Array<GrantAuthority>): UserAuthorityReq {
        this['grant_list'] = grantList;
        return this;
    }
    public set grantList(grantList: Array<GrantAuthority>  | undefined) {
        this['grant_list'] = grantList;
    }
    public get grantList(): Array<GrantAuthority> | undefined {
        return this['grant_list'];
    }
    public withDesc(desc: string): UserAuthorityReq {
        this['desc'] = desc;
        return this;
    }
}