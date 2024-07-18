

export class QueryClientCaCertificateBody {
    public id?: string;
    public name?: string;
    public issuer?: string;
    public subject?: string;
    private 'serial_number'?: string;
    private 'expiration_time'?: Date;
    private 'signature_algorithm'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor() { 
    }
    public withId(id: string): QueryClientCaCertificateBody {
        this['id'] = id;
        return this;
    }
    public withName(name: string): QueryClientCaCertificateBody {
        this['name'] = name;
        return this;
    }
    public withIssuer(issuer: string): QueryClientCaCertificateBody {
        this['issuer'] = issuer;
        return this;
    }
    public withSubject(subject: string): QueryClientCaCertificateBody {
        this['subject'] = subject;
        return this;
    }
    public withSerialNumber(serialNumber: string): QueryClientCaCertificateBody {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withExpirationTime(expirationTime: Date): QueryClientCaCertificateBody {
        this['expiration_time'] = expirationTime;
        return this;
    }
    public set expirationTime(expirationTime: Date  | undefined) {
        this['expiration_time'] = expirationTime;
    }
    public get expirationTime(): Date | undefined {
        return this['expiration_time'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): QueryClientCaCertificateBody {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withCreatedAt(createdAt: Date): QueryClientCaCertificateBody {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): QueryClientCaCertificateBody {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}