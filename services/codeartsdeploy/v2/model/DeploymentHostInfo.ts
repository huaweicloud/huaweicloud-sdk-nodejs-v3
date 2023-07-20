import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';


export class DeploymentHostInfo {
    private 'group_id'?: string;
    private 'host_name'?: string;
    public ip?: string;
    public port?: number;
    public os?: DeploymentHostInfoOsEnum | string;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    public authorization?: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean;
    public constructor(groupId?: string, hostName?: string, ip?: string, port?: number, os?: string, asProxy?: boolean, authorization?: DeploymentHostAuthorizationBody) { 
        this['group_id'] = groupId;
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withGroupId(groupId: string): DeploymentHostInfo {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: string  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): string | undefined {
        return this['group_id'];
    }
    public withHostName(hostName: string): DeploymentHostInfo {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentHostInfo {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentHostInfo {
        this['port'] = port;
        return this;
    }
    public withOs(os: DeploymentHostInfoOsEnum | string): DeploymentHostInfo {
        this['os'] = os;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentHostInfo {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentHostInfo {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentHostInfo {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentHostInfo {
        this['install_icagent'] = installIcagent;
        return this;
    }
    public set installIcagent(installIcagent: boolean  | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent(): boolean | undefined {
        return this['install_icagent'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DeploymentHostInfoOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
