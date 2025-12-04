

export class Address {
    private 'intranet_ip'?: string;
    private 'access_ip'?: string;
    private 'server_ip'?: string;
    private 'public_ip'?: string;
    public constructor() { 
    }
    public withIntranetIp(intranetIp: string): Address {
        this['intranet_ip'] = intranetIp;
        return this;
    }
    public set intranetIp(intranetIp: string  | undefined) {
        this['intranet_ip'] = intranetIp;
    }
    public get intranetIp(): string | undefined {
        return this['intranet_ip'];
    }
    public withAccessIp(accessIp: string): Address {
        this['access_ip'] = accessIp;
        return this;
    }
    public set accessIp(accessIp: string  | undefined) {
        this['access_ip'] = accessIp;
    }
    public get accessIp(): string | undefined {
        return this['access_ip'];
    }
    public withServerIp(serverIp: string): Address {
        this['server_ip'] = serverIp;
        return this;
    }
    public set serverIp(serverIp: string  | undefined) {
        this['server_ip'] = serverIp;
    }
    public get serverIp(): string | undefined {
        return this['server_ip'];
    }
    public withPublicIp(publicIp: string): Address {
        this['public_ip'] = publicIp;
        return this;
    }
    public set publicIp(publicIp: string  | undefined) {
        this['public_ip'] = publicIp;
    }
    public get publicIp(): string | undefined {
        return this['public_ip'];
    }
}