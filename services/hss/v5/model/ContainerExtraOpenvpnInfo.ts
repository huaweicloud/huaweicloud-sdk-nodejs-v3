

export class ContainerExtraOpenvpnInfo {
    private 'outside_ip'?: string;
    private 'outside_port'?: string;
    public constructor() { 
    }
    public withOutsideIp(outsideIp: string): ContainerExtraOpenvpnInfo {
        this['outside_ip'] = outsideIp;
        return this;
    }
    public set outsideIp(outsideIp: string  | undefined) {
        this['outside_ip'] = outsideIp;
    }
    public get outsideIp(): string | undefined {
        return this['outside_ip'];
    }
    public withOutsidePort(outsidePort: string): ContainerExtraOpenvpnInfo {
        this['outside_port'] = outsidePort;
        return this;
    }
    public set outsidePort(outsidePort: string  | undefined) {
        this['outside_port'] = outsidePort;
    }
    public get outsidePort(): string | undefined {
        return this['outside_port'];
    }
}