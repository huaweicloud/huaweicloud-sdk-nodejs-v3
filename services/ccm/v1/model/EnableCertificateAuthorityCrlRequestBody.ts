

export class EnableCertificateAuthorityCrlRequestBody {
    private 'crl_name'?: string;
    private 'obs_bucket_name'?: string;
    private 'valid_days'?: number;
    public constructor(obsBucketName?: string, validDays?: number) { 
        this['obs_bucket_name'] = obsBucketName;
        this['valid_days'] = validDays;
    }
    public withCrlName(crlName: string): EnableCertificateAuthorityCrlRequestBody {
        this['crl_name'] = crlName;
        return this;
    }
    public set crlName(crlName: string  | undefined) {
        this['crl_name'] = crlName;
    }
    public get crlName(): string | undefined {
        return this['crl_name'];
    }
    public withObsBucketName(obsBucketName: string): EnableCertificateAuthorityCrlRequestBody {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withValidDays(validDays: number): EnableCertificateAuthorityCrlRequestBody {
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