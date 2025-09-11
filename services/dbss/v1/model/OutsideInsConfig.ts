

export class OutsideInsConfig {
    private 'master_node_ip'?: string;
    private 'slave_node_ip'?: string;
    private 'virtual_ip'?: string;
    public constructor() { 
    }
    public withMasterNodeIp(masterNodeIp: string): OutsideInsConfig {
        this['master_node_ip'] = masterNodeIp;
        return this;
    }
    public set masterNodeIp(masterNodeIp: string  | undefined) {
        this['master_node_ip'] = masterNodeIp;
    }
    public get masterNodeIp(): string | undefined {
        return this['master_node_ip'];
    }
    public withSlaveNodeIp(slaveNodeIp: string): OutsideInsConfig {
        this['slave_node_ip'] = slaveNodeIp;
        return this;
    }
    public set slaveNodeIp(slaveNodeIp: string  | undefined) {
        this['slave_node_ip'] = slaveNodeIp;
    }
    public get slaveNodeIp(): string | undefined {
        return this['slave_node_ip'];
    }
    public withVirtualIp(virtualIp: string): OutsideInsConfig {
        this['virtual_ip'] = virtualIp;
        return this;
    }
    public set virtualIp(virtualIp: string  | undefined) {
        this['virtual_ip'] = virtualIp;
    }
    public get virtualIp(): string | undefined {
        return this['virtual_ip'];
    }
}