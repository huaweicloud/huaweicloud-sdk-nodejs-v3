

export class PrivateIp {
    public ip?: string;
    private 'slave_ip'?: string;
    private 'floating_ip'?: string;
    public constructor(ip?: string) { 
        this['ip'] = ip;
    }
    public withIp(ip: string): PrivateIp {
        this['ip'] = ip;
        return this;
    }
    public withSlaveIp(slaveIp: string): PrivateIp {
        this['slave_ip'] = slaveIp;
        return this;
    }
    public set slaveIp(slaveIp: string  | undefined) {
        this['slave_ip'] = slaveIp;
    }
    public get slaveIp(): string | undefined {
        return this['slave_ip'];
    }
    public withFloatingIp(floatingIp: string): PrivateIp {
        this['floating_ip'] = floatingIp;
        return this;
    }
    public set floatingIp(floatingIp: string  | undefined) {
        this['floating_ip'] = floatingIp;
    }
    public get floatingIp(): string | undefined {
        return this['floating_ip'];
    }
}