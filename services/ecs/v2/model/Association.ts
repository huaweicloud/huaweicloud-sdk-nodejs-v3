

export class Association {
    private 'public_ip_address'?: string;
    public constructor() { 
    }
    public withPublicIpAddress(publicIpAddress: string): Association {
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