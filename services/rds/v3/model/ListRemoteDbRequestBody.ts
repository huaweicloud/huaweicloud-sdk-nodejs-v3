

export class ListRemoteDbRequestBody {
    private 'server_ip'?: string;
    private 'server_port'?: string;
    private 'login_user_name'?: string;
    private 'login_user_password'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(serverIp?: string, serverPort?: string, loginUserName?: string, loginUserPassword?: string) { 
        this['server_ip'] = serverIp;
        this['server_port'] = serverPort;
        this['login_user_name'] = loginUserName;
        this['login_user_password'] = loginUserPassword;
    }
    public withServerIp(serverIp: string): ListRemoteDbRequestBody {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withServerPort(serverPort: string): ListRemoteDbRequestBody {
        this['server_port'] = serverPort;
        return this;
    }
    public set serverPort(serverPort: string  | undefined) {
        this['server_port'] = serverPort;
    }
    public get serverPort(): string | undefined {
        return this['server_port'];
    }
    public withLoginUserName(loginUserName: string): ListRemoteDbRequestBody {
        this['login_user_name'] = loginUserName;
        return this;
    }
    public set loginUserName(loginUserName: string  | undefined) {
        this['login_user_name'] = loginUserName;
    }
    public get loginUserName(): string | undefined {
        return this['login_user_name'];
    }
    public withLoginUserPassword(loginUserPassword: string): ListRemoteDbRequestBody {
        this['login_user_password'] = loginUserPassword;
        return this;
    }
    public set loginUserPassword(loginUserPassword: string  | undefined) {
        this['login_user_password'] = loginUserPassword;
    }
    public get loginUserPassword(): string | undefined {
        return this['login_user_password'];
    }
    public withOffset(offset: number): ListRemoteDbRequestBody {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListRemoteDbRequestBody {
        this['limit'] = limit;
        return this;
    }
}