

export class CaCertificate {
    public id?: string;
    private 'serial_number'?: string;
    private 'signature_algorithm'?: string;
    public issuer?: string;
    public subject?: string;
    private 'expire_time'?: Date;
    private 'is_updatable'?: boolean;
    public constructor() { 
    }
    public withId(id: string): CaCertificate {
        this['id'] = id;
        return this;
    }
    public withSerialNumber(serialNumber: string): CaCertificate {
        this['serial_number'] = serialNumber;
        return this;
    }
    public set serialNumber(serialNumber: string  | undefined) {
        this['serial_number'] = serialNumber;
    }
    public get serialNumber(): string | undefined {
        return this['serial_number'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CaCertificate {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withIssuer(issuer: string): CaCertificate {
        this['issuer'] = issuer;
        return this;
    }
    public withSubject(subject: string): CaCertificate {
        this['subject'] = subject;
        return this;
    }
    public withExpireTime(expireTime: Date): CaCertificate {
        this['expire_time'] = expireTime;
        return this;
    }
    public set expireTime(expireTime: Date  | undefined) {
        this['expire_time'] = expireTime;
    }
    public get expireTime(): Date | undefined {
        return this['expire_time'];
    }
    public withIsUpdatable(isUpdatable: boolean): CaCertificate {
        this['is_updatable'] = isUpdatable;
        return this;
    }
    public set isUpdatable(isUpdatable: boolean  | undefined) {
        this['is_updatable'] = isUpdatable;
    }
    public get isUpdatable(): boolean | undefined {
        return this['is_updatable'];
    }
}