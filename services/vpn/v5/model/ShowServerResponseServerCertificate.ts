

export class ShowServerResponseServerCertificate {
    public id?: string;
    public name?: string;
    public issuer?: string;
    public subject?: string;
    private 'serial_number'?: string;
    private 'expiration_time'?: Date;
    private 'signature_algorithm'?: string;
    public source?: string;
    public constructor() { 
    }
    public withId(id: string): ShowServerResponseServerCertificate {
        this['id'] = id;
        return this;
    }
    public withName(name: string): ShowServerResponseServerCertificate {
        this['name'] = name;
        return this;
    }
    public withIssuer(issuer: string): ShowServerResponseServerCertificate {
        this['issuer'] = issuer;
        return this;
    }
    public withSubject(subject: string): ShowServerResponseServerCertificate {
        this['subject'] = subject;
        return this;
    }
    public withSerialNumber(serialNumber: string): ShowServerResponseServerCertificate {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withExpirationTime(expirationTime: Date): ShowServerResponseServerCertificate {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: Date  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): Date | undefined {
        return this['expiration_time'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): ShowServerResponseServerCertificate {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withSource(source: string): ShowServerResponseServerCertificate {
        this['source'] = source;
        return this;
    }
}