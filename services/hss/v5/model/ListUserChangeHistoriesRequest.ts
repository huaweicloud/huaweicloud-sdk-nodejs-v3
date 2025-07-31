

export class ListUserChangeHistoriesRequest {
    private 'host_name'?: string;
    private 'host_id'?: string;
    private 'enterprise_project_id'?: string;
    private 'user_name'?: string;
    private 'root_permission'?: boolean;
    private 'private_ip'?: string;
    private 'change_type'?: string;
    public limit?: number;
    public offset?: number;
    private 'start_time'?: number;
    private 'end_time'?: number;
    public constructor() { 
    }
    public withHostName(hostName: string): ListUserChangeHistoriesRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withHostId(hostId: string): ListUserChangeHistoriesRequest {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListUserChangeHistoriesRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withUserName(userName: string): ListUserChangeHistoriesRequest {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withRootPermission(rootPermission: boolean): ListUserChangeHistoriesRequest {
        this['root_permission'] = rootPermission;
        return this;
    }
    public set rootPermission(rootPermission: boolean  | undefined) {
        this['root_permission'] = rootPermission;
    }
    public get rootPermission(): boolean | undefined {
        return this['root_permission'];
    }
    public withPrivateIp(privateIp: string): ListUserChangeHistoriesRequest {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withChangeType(changeType: string): ListUserChangeHistoriesRequest {
        this['change_type'] = changeType;
        return this;
    }
    public set changeType(changeType: string  | undefined) {
        this['change_type'] = changeType;
    }
    public get changeType(): string | undefined {
        return this['change_type'];
    }
    public withLimit(limit: number): ListUserChangeHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListUserChangeHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withStartTime(startTime: number): ListUserChangeHistoriesRequest {
        this['start_time'] = startTime;
        return this;
    }
    public set startTime(startTime: number  | undefined) {
        this['start_time'] = startTime;
    }
    public get startTime(): number | undefined {
        return this['start_time'];
    }
    public withEndTime(endTime: number): ListUserChangeHistoriesRequest {
        this['end_time'] = endTime;
        return this;
    }
    public set endTime(endTime: number  | undefined) {
        this['end_time'] = endTime;
    }
    public get endTime(): number | undefined {
        return this['end_time'];
    }
}