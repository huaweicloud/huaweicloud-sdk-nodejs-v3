

export class ListCrlConfiguration {
    public enabled?: boolean;
    private 'crl_name'?: string;
    private 'obs_bucket_name'?: string;
    private 'valid_days'?: number;
    private 'crl_dis_point'?: string;
    public constructor(enabled?: boolean, crlName?: string, obsBucketName?: string, validDays?: number, crlDisPoint?: string) { 
        this['enabled'] = enabled;
        this['crl_name'] = crlName;
        this['obs_bucket_name'] = obsBucketName;
        this['valid_days'] = validDays;
        this['crl_dis_point'] = crlDisPoint;
    }
    public withEnabled(enabled: boolean): ListCrlConfiguration {
        this['enabled'] = enabled;
        return this;
    }
    public withCrlName(crlName: string): ListCrlConfiguration {
        this['crl_name'] = crlName;
        return this;
    }
    public set crlName(crlName: string  | undefined) {
        this['crl_name'] = crlName;
    }
    public get crlName(): string | undefined {
        return this['crl_name'];
    }
    public withObsBucketName(obsBucketName: string): ListCrlConfiguration {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withValidDays(validDays: number): ListCrlConfiguration {
        this['valid_days'] = validDays;
        return this;
    }
    public set validDays(validDays: number  | undefined) {
        this['valid_days'] = validDays;
    }
    public get validDays(): number | undefined {
        return this['valid_days'];
    }
    public withCrlDisPoint(crlDisPoint: string): ListCrlConfiguration {
        this['crl_dis_point'] = crlDisPoint;
        return this;
    }
    public set crlDisPoint(crlDisPoint: string  | undefined) {
        this['crl_dis_point'] = crlDisPoint;
    }
    public get crlDisPoint(): string | undefined {
        return this['crl_dis_point'];
    }
}