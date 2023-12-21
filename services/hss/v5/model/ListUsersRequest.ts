

export class ListUsersRequest {
    private 'host_id'?: string;
    private 'user_name'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'login_permission'?: boolean;
    private 'root_permission'?: boolean;
    private 'user_group'?: string;
    private 'enterprise_project_id'?: string;
    public limit?: number;
    public offset?: number;
    public category?: string;
    private 'part_match'?: boolean;
    public constructor() { 
    }
    public withHostId(hostId: string): ListUsersRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
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
    public withHostName(hostName: string): ListUsersRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): ListUsersRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLoginPermission(loginPermission: boolean): ListUsersRequest {
        this['login_permission'] = loginPermission;
        return this;
    }
    public set loginPermission(loginPermission: boolean  | undefined) {
        this['login_permission'] = loginPermission;
    }
    public get loginPermission(): boolean | undefined {
        return this['login_permission'];
    }
    public withRootPermission(rootPermission: boolean): ListUsersRequest {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: boolean  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): boolean | undefined {
        return this['root_permission'];
    }
    public withUserGroup(userGroup: string): ListUsersRequest {
        this['user_group'] = userGroup;
        return this;
    }
    public set userGroup(userGroup: string  | undefined) {
        this['user_group'] = userGroup;
    }
    public get userGroup(): string | undefined {
        return this['user_group'];
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
    public withLimit(limit: number): ListUsersRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListUsersRequest {
        this['offset'] = offset;
        return this;
    }
    public withCategory(category: string): ListUsersRequest {
        this['category'] = category;
        return this;
    }
    public withPartMatch(partMatch: boolean): ListUsersRequest {
        this['part_match'] = partMatch;
        return this;
    }
    public set partMatch(partMatch: boolean  | undefined) {
        this['part_match'] = partMatch;
    }
    public get partMatch(): boolean | undefined {
        return this['part_match'];
    }
}