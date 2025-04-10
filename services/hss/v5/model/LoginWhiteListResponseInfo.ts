

export class LoginWhiteListResponseInfo {
    private 'private_ip'?: string;
    private 'login_ip'?: string;
    private 'login_user_name'?: string;
    private 'update_time'?: number;
    public remarks?: string;
    private 'enterprise_project_name'?: string;
    public constructor() { 
    }
    public withPrivateIp(privateIp: string): LoginWhiteListResponseInfo {
        this['private_ip'] = privateIp;
        return this;
    }
    public set privateIp(privateIp: string  | undefined) {
        this['private_ip'] = privateIp;
    }
    public get privateIp(): string | undefined {
        return this['private_ip'];
    }
    public withLoginIp(loginIp: string): LoginWhiteListResponseInfo {
        this['login_ip'] = loginIp;
        return this;
    }
    public set loginIp(loginIp: string  | undefined) {
        this['login_ip'] = loginIp;
    }
    public get loginIp(): string | undefined {
        return this['login_ip'];
    }
    public withLoginUserName(loginUserName: string): LoginWhiteListResponseInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withUpdateTime(updateTime: number): LoginWhiteListResponseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: number  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): number | undefined {
        return this['update_time'];
    }
    public withRemarks(remarks: string): LoginWhiteListResponseInfo {
        this['remarks'] = remarks;
        return this;
    }
    public withEnterpriseProjectName(enterpriseProjectName: string): LoginWhiteListResponseInfo {
        this['enterprise_project_name'] = enterpriseProjectName;
        return this;
    }
    public set enterpriseProjectName(enterpriseProjectName: string  | undefined) {
        this['enterprise_project_name'] = enterpriseProjectName;
    }
    public get enterpriseProjectName(): string | undefined {
        return this['enterprise_project_name'];
    }
}