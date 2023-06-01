

export class BackSources {
    private 'sources_type': string | undefined;
    private 'ip_or_domain': string | undefined;
    private 'obs_bucket_type'?: string | undefined;
    private 'http_port'?: number | undefined;
    private 'https_port'?: number | undefined;
    public constructor(sourcesType?: any, ipOrDomain?: any) { 
        this['sources_type'] = sourcesType;
        this['ip_or_domain'] = ipOrDomain;
    }
    public withSourcesType(sourcesType: string): BackSources {
        this['sources_type'] = sourcesType;
        return this;
    }
    public set sourcesType(sourcesType: string | undefined) {
        this['sources_type'] = sourcesType;
    }
    public get sourcesType() {
        return this['sources_type'];
    }
    public withIpOrDomain(ipOrDomain: string): BackSources {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain() {
        return this['ip_or_domain'];
    }
    public withObsBucketType(obsBucketType: string): BackSources {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType() {
        return this['obs_bucket_type'];
    }
    public withHttpPort(httpPort: number): BackSources {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort() {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): BackSources {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort() {
        return this['https_port'];
    }
}