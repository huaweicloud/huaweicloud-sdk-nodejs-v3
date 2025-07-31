

export class RemoteInstallHostInfo {
    private 'instance_name'?: string;
    private 'remote_ip'?: string;
    private 'user_name'?: string;
    public port?: string;
    public password?: string;
    private 'remote_use_pem'?: boolean;
    public constructor() { 
    }
    public withInstanceName(instanceName: string): RemoteInstallHostInfo {
        this['instance_name'] = instanceName;
        return this;
    }
    public set instanceName(instanceName: string  | undefined) {
        this['instance_name'] = instanceName;
    }
    public get instanceName(): string | undefined {
        return this['instance_name'];
    }
    public withRemoteIp(remoteIp: string): RemoteInstallHostInfo {
        this['remote_ip'] = remoteIp;
        return this;
    }
    public set remoteIp(remoteIp: string  | undefined) {
        this['remote_ip'] = remoteIp;
    }
    public get remoteIp(): string | undefined {
        return this['remote_ip'];
    }
    public withUserName(userName: string): RemoteInstallHostInfo {
        this['user_name'] = userName;
        return this;
    }
    public set userName(userName: string  | undefined) {
        this['user_name'] = userName;
    }
    public get userName(): string | undefined {
        return this['user_name'];
    }
    public withPort(port: string): RemoteInstallHostInfo {
        this['port'] = port;
        return this;
    }
    public withPassword(password: string): RemoteInstallHostInfo {
        this['password'] = password;
        return this;
    }
    public withRemoteUsePem(remoteUsePem: boolean): RemoteInstallHostInfo {
        this['remote_use_pem'] = remoteUsePem;
        return this;
    }
    public set remoteUsePem(remoteUsePem: boolean  | undefined) {
        this['remote_use_pem'] = remoteUsePem;
    }
    public get remoteUsePem(): boolean | undefined {
        return this['remote_use_pem'];
    }
}