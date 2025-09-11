

export class InstanceActivateInfo {
    private 'dsc_proxy_domain_name'?: string;
    private 'dsc_proxy_ip'?: string;
    private 'dsc_proxy_port'?: number;
    private 'master_node_id'?: string;
    private 'slave_node_id'?: string;
    public constructor() { 
    }
    public withDscProxyDomainName(dscProxyDomainName: string): InstanceActivateInfo {
        this['dsc_proxy_domain_name'] = dscProxyDomainName;
        return this;
    }
    public set dscProxyDomainName(dscProxyDomainName: string  | undefined) {
        this['dsc_proxy_domain_name'] = dscProxyDomainName;
    }
    public get dscProxyDomainName(): string | undefined {
        return this['dsc_proxy_domain_name'];
    }
    public withDscProxyIp(dscProxyIp: string): InstanceActivateInfo {
        this['dsc_proxy_ip'] = dscProxyIp;
        return this;
    }
    public set dscProxyIp(dscProxyIp: string  | undefined) {
        this['dsc_proxy_ip'] = dscProxyIp;
    }
    public get dscProxyIp(): string | undefined {
        return this['dsc_proxy_ip'];
    }
    public withDscProxyPort(dscProxyPort: number): InstanceActivateInfo {
        this['dsc_proxy_port'] = dscProxyPort;
        return this;
    }
    public set dscProxyPort(dscProxyPort: number  | undefined) {
        this['dsc_proxy_port'] = dscProxyPort;
    }
    public get dscProxyPort(): number | undefined {
        return this['dsc_proxy_port'];
    }
    public withMasterNodeId(masterNodeId: string): InstanceActivateInfo {
        this['master_node_id'] = masterNodeId;
        return this;
    }
    public set masterNodeId(masterNodeId: string  | undefined) {
        this['master_node_id'] = masterNodeId;
    }
    public get masterNodeId(): string | undefined {
        return this['master_node_id'];
    }
    public withSlaveNodeId(slaveNodeId: string): InstanceActivateInfo {
        this['slave_node_id'] = slaveNodeId;
        return this;
    }
    public set slaveNodeId(slaveNodeId: string  | undefined) {
        this['slave_node_id'] = slaveNodeId;
    }
    public get slaveNodeId(): string | undefined {
        return this['slave_node_id'];
    }
}