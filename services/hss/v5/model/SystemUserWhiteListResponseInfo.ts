

export class SystemUserWhiteListResponseInfo {
    private 'enterprise_project_name'?: string;
    private 'host_id'?: string;
    private 'host_name'?: string;
    private 'private_ip'?: string;
    private 'public_ip'?: string;
    private 'system_user_name_list'?: Array<string>;
    private 'update_time'?: number;
    public remarks?: string;
    public constructor() { 
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): SystemUserWhiteListResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
    public withHostId(hostId: string): SystemUserWhiteListResponseInfo {
        this['host_id'] = hostId;
        return this;
    }
    public set hostId(hostId: string  | undefined) {
        this['host_id'] = hostId;
    }
    public get hostId(): string | undefined {
        return this['host_id'];
    }
    public withHostName(hostName: string): SystemUserWhiteListResponseInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withPrivateIp(privateIp: string): SystemUserWhiteListResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withPublicIp(publicIp: string): SystemUserWhiteListResponseInfo {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
    public withSystemUserNameList(systemUserNameList: Array<string>): SystemUserWhiteListResponseInfo {
        this['system_user_name_list'] = systemUserNameList;
        return this;
    }
    public set systemUserNameList(systemUserNameList: Array<string>  | undefined) {
        this['system_user_name_list'] = systemUserNameList;
    }
    public get systemUserNameList(): Array<string> | undefined {
        return this['system_user_name_list'];
    }
    public withUpdateTime(updateTime: number): SystemUserWhiteListResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withRemarks(remarks: string): SystemUserWhiteListResponseInfo {
        this['remarks'] = remarks;
        return this;
    }
}