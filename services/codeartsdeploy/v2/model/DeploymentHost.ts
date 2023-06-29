import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';


export class DeploymentHost {
    private 'host_name': string | undefined;
    public ip: string;
    public port: number;
    public os: DeploymentHostOsEnum;
    private 'as_proxy': boolean | undefined;
    private 'proxy_host_id'?: string | undefined;
    public authorization: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean | undefined;
    public constructor(hostName?: any, ip?: any, port?: any, os?: any, asProxy?: any, authorization?: any) { 
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
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
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
    public withOs(os: DeploymentHostOsEnum): DeploymentHost {
        this['os'] = os;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentHost {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy() {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentHost {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId() {
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
    public set installIcagent(installIcagent: boolean | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent() {
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
