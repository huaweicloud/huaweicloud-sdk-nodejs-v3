

export class ValidateConnectionUserInfo {
    private 'server_ip'?: string;
    private 'server_port'?: number;
    private 'login_user_name'?: string;
    private 'login_user_password'?: string;
    public constructor() { 
    }
    public withServerIp(serverIp: string): ValidateConnectionUserInfo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withServerPort(serverPort: number): ValidateConnectionUserInfo {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: number  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): number | undefined {
        return this['server_port'];
    }
    public withLoginUserName(loginUserName: string): ValidateConnectionUserInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withLoginUserPassword(loginUserPassword: string): ValidateConnectionUserInfo {
        this['login_user_password'] = loginUserPassword;
        return this;
    }
    public set loginUserPassword(loginUserPassword: string  | undefined) {
        this['login_user_password'] = loginUserPassword;
    }
    public get loginUserPassword(): string | undefined {
        return this['login_user_password'];
    }
}