

export class CrlConfiguration {
    public enabled?: boolean;
    private 'crl_name'?: string;
    private 'obs_bucket_name'?: string;
    private 'valid_days'?: number;
    public constructor(enabled?: boolean) { 
        this['enabled'] = enabled;
    }
    public withEnabled(enabled: boolean): CrlConfiguration {
        this['enabled'] = enabled;
        return this;
    }
    public withCrlName(crlName: string): CrlConfiguration {
        this['crl_name'] = crlName;
        return this;
    }
    public set crlName(crlName: string  | undefined) {
        this['crl_name'] = crlName;
    }
    public get crlName(): string | undefined {
        return this['crl_name'];
    }
    public withObsBucketName(obsBucketName: string): CrlConfiguration {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withValidDays(validDays: number): CrlConfiguration {
        this['valid_days'] = validDays;
        return this;
    }
    public set validDays(validDays: number  | undefined) {
        this['valid_days'] = validDays;
    }
    public get validDays(): number | undefined {
        return this['valid_days'];
    }
}