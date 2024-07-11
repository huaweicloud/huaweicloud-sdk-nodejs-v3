import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';


export class DeploymentHostRequestExternal {
    private 'as_proxy'?: boolean;
    public authorization?: DeploymentHostAuthorizationBody;
    private 'host_name'?: string;
    public ip?: string;
    public port?: number;
    private 'proxy_host_id'?: string;
    public sync?: boolean;
    private 'install_icagent'?: boolean;
    public constructor(hostName?: string, ip?: string, port?: number) { 
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
    }
    public withAsProxy(asProxy: boolean): DeploymentHostRequestExternal {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentHostRequestExternal {
        this['authorization'] = authorization;
        return this;
    }
    public withHostName(hostName: string): DeploymentHostRequestExternal {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentHostRequestExternal {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentHostRequestExternal {
        this['port'] = port;
        return this;
    }
    public withProxyHostId(proxyHostId: string): DeploymentHostRequestExternal {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withSync(sync: boolean): DeploymentHostRequestExternal {
        this['sync'] = sync;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentHostRequestExternal {
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