import { DeploymentHostAuthorizationBody } from './DeploymentHostAuthorizationBody';
import { DeploymentUpdateHost } from './DeploymentUpdateHost';


export class DeploymentHostRequest {
    private 'host_name'?: string;
    public ip?: string;
    public port?: number;
    private 'as_proxy'?: boolean;
    private 'proxy_host_id'?: string;
    public authorization?: DeploymentHostAuthorizationBody;
    private 'install_icagent'?: boolean;
    public sync?: boolean;
    public constructor(hostName?: string, ip?: string, port?: number, asProxy?: boolean, authorization?: DeploymentHostAuthorizationBody) { 
        this['host_name'] = hostName;
        this['ip'] = ip;
        this['port'] = port;
        this['as_proxy'] = asProxy;
        this['authorization'] = authorization;
    }
    public withHostName(hostName: string): DeploymentHostRequest {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withIp(ip: string): DeploymentHostRequest {
        this['ip'] = ip;
        return this;
    }
    public withPort(port: number): DeploymentHostRequest {
        this['port'] = port;
        return this;
    }
    public withAsProxy(asProxy: boolean): DeploymentHostRequest {
        this['as_proxy'] = asProxy;
        return this;
    }
    public set asProxy(asProxy: boolean  | undefined) {
        this['as_proxy'] = asProxy;
    }
    public get asProxy(): boolean | undefined {
        return this['as_proxy'];
    }
    public withProxyHostId(proxyHostId: string): DeploymentHostRequest {
        this['proxy_host_id'] = proxyHostId;
        return this;
    }
    public set proxyHostId(proxyHostId: string  | undefined) {
        this['proxy_host_id'] = proxyHostId;
    }
    public get proxyHostId(): string | undefined {
        return this['proxy_host_id'];
    }
    public withAuthorization(authorization: DeploymentHostAuthorizationBody): DeploymentHostRequest {
        this['authorization'] = authorization;
        return this;
    }
    public withInstallIcagent(installIcagent: boolean): DeploymentHostRequest {
        this['install_icagent'] = installIcagent;
        return this;
    }
    public set installIcagent(installIcagent: boolean  | undefined) {
        this['install_icagent'] = installIcagent;
    }
    public get installIcagent(): boolean | undefined {
        return this['install_icagent'];
    }
    public withSync(sync: boolean): DeploymentHostRequest {
        this['sync'] = sync;
        return this;
    }
}