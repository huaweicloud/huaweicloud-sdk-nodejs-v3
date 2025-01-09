

export class PublicIp {
    public id?: string;
    private 'public_ip_address'?: string;
    public constructor() { 
    }
    public withId(id: string): PublicIp {
        this['id'] = id;
        return this;
    }
    public withPublicIpAddress(publicIpAddress: string): PublicIp {
        this['public_ip_address'] = publicIpAddress;
        return this;
    }
    public set publicIpAddress(publicIpAddress: string  | undefined) {
        this['public_ip_address'] = publicIpAddress;
    }
    public get publicIpAddress(): string | undefined {
        return this['public_ip_address'];
    }
}