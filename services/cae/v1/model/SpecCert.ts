

export class SpecCert {
    public crt?: string;
    public key?: string;
    private 'created_at'?: Date;
    public constructor() { 
    }
    public withCrt(crt: string): SpecCert {
        this['crt'] = crt;
        return this;
    }
    public withKey(key: string): SpecCert {
        this['key'] = key;
        return this;
    }
    public withCreatedAt(createdAt: Date): SpecCert {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
}