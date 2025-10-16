

export class ReplicationUserInfo {
    private 'server_ip'?: string;
    private 'server_port'?: number;
    private 'server_name'?: string;
    private 'login_user_name'?: string;
    private 'login_user_password'?: string;
    public constructor(serverIp?: string, serverPort?: number, serverName?: string, loginUserName?: string, loginUserPassword?: string) { 
        this['server_ip'] = serverIp;
        this['server_port'] = serverPort;
        this['server_name'] = serverName;
        this['login_user_name'] = loginUserName;
        this['login_user_password'] = loginUserPassword;
    }
    public withServerIp(serverIp: string): ReplicationUserInfo {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withServerPort(serverPort: number): ReplicationUserInfo {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: number  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): number | undefined {
        return this['server_port'];
    }
    public withServerName(serverName: string): ReplicationUserInfo {
        this['server_name'] = serverName;
        return this;
    }
    public set serverName(serverName: string  | undefined) {
        this['server_name'] = serverName;
    }
    public get serverName(): string | undefined {
        return this['server_name'];
    }
    public withLoginUserName(loginUserName: string): ReplicationUserInfo {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withLoginUserPassword(loginUserPassword: string): ReplicationUserInfo {
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