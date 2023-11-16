

export class BackSources {
    private 'sources_type'?: string;
    private 'ip_or_domain'?: string;
    private 'obs_bucket_type'?: string;
    private 'http_port'?: number;
    private 'https_port'?: number;
    public constructor(sourcesType?: string, ipOrDomain?: string) { 
        this['sources_type'] = sourcesType;
        this['ip_or_domain'] = ipOrDomain;
    }
    public withSourcesType(sourcesType: string): BackSources {
        this['sources_type'] = sourcesType;
        return this;
    }
    public set sourcesType(sourcesType: string  | undefined) {
        this['sources_type'] = sourcesType;
    }
    public get sourcesType(): string | undefined {
        return this['sources_type'];
    }
    public withIpOrDomain(ipOrDomain: string): BackSources {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string  | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain(): string | undefined {
        return this['ip_or_domain'];
    }
    public withObsBucketType(obsBucketType: string): BackSources {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string  | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType(): string | undefined {
        return this['obs_bucket_type'];
    }
    public withHttpPort(httpPort: number): BackSources {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): BackSources {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
}