import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';


export class DeploymentHost {
    private 'host_name'?: string;
    public ip?: string;
    public port?: number;
    public os?: DeploymentHostOsEnum | string;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    public authorization?: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean;
    public constructor(hostName?: string, ip?: string, port?: number, os?: string, asProxy?: boolean, authorization?: DeploymentHostAuthorizationBody) { 
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['os'] = os;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withHostName(hostName: string): DeploymentHost {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentHost {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentHost {
        this['port'] = port;
        return this;
    }
    public withOs(os: DeploymentHostOsEnum | string): DeploymentHost {
        this['os'] = os;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentHost {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentHost {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentHost {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentHost {
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
export enum DeploymentHostOsEnum {
    WINDOWS = 'windows',
    LINUX = 'linux'
}
