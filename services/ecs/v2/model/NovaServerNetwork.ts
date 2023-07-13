

export class NovaServerNetwork {
    public port?: string;
    public uuid?: string;
    private 'fixed_ip'?: string | undefined;
    public constructor() { 
    }
    public withPort(port: string): NovaServerNetwork {
        this['port'] = port;
        return this;
    }
    public withUuid(uuid: string): NovaServerNetwork {
        this['uuid'] = uuid;
        return this;
    }
    public withFixedIp(fixedIp: string): NovaServerNetwork {
        this['fixed_ip'] = fixedIp;
        return this;
    }
    public set fixedIp(fixedIp: string | undefined) {
        this['fixed_ip'] = fixedIp;
    }
    public get fixedIp() {
        return this['fixed_ip'];
    }
}