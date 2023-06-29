import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';


export class DeploymentUpdateHost {
    private 'host_name': string | undefined;
    public ip: string;
    public port: number;
    private 'as_proxy': boolean | undefined;
    private 'proxy_host_id'?: string | undefined;
    public authorization: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean | undefined;
    public constructor(hostName?: any, ip?: any, port?: any, asProxy?: any, authorization?: any) { 
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withHostName(hostName: string): DeploymentUpdateHost {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentUpdateHost {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentUpdateHost {
        this['port'] = port;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentUpdateHost {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy() {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentUpdateHost {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId() {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentUpdateHost {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentUpdateHost {
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