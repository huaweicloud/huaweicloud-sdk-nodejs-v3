

export class Target {
    public type?: string;
    public address?: string;
    private 'auth_header'?: string;
    private 'skip_cert_verify'?: boolean;
    private 'address_type'?: string;
    public constructor(type?: string, address?: string, addressType?: string) { 
        this['type'] = type;
        this['address'] = address;
        this['address_type'] = addressType;
    }
    public withType(type: string): Target {
        this['type'] = type;
        return this;
    }
    public withAddress(address: string): Target {
        this['address'] = address;
        return this;
    }
    public withAuthHeader(authHeader: string): Target {
        this['auth_header'] = authHeader;
        return this;
    }
    public set authHeader(authHeader: string  | undefined) {
        this['auth_header'] = authHeader;
    }
    public get authHeader(): string | undefined {
        return this['auth_header'];
    }
    public withSkipCertVerify(skipCertVerify: boolean): Target {
        this['skip_cert_verify'] = skipCertVerify;
        return this;
    }
    public set skipCertVerify(skipCertVerify: boolean  | undefined) {
        this['skip_cert_verify'] = skipCertVerify;
    }
    public get skipCertVerify(): boolean | undefined {
        return this['skip_cert_verify'];
    }
    public withAddressType(addressType: string): Target {
        this['address_type'] = addressType;
        return this;
    }
    public set addressType(addressType: string  | undefined) {
        this['address_type'] = addressType;
    }
    public get addressType(): string | undefined {
        return this['address_type'];
    }
}