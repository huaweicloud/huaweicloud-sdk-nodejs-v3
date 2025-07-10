

export class FlexibleOriginsEngine {
    private 'sources_type'?: string;
    private 'ip_or_domain'?: string;
    private 'obs_bucket_type'?: string;
    private 'bucket_access_key'?: string;
    private 'bucket_secret_key'?: string;
    private 'bucket_region'?: string;
    private 'bucket_name'?: string;
    private 'host_name'?: string;
    private 'origin_protocol'?: string;
    private 'http_port'?: number;
    private 'https_port'?: number;
    public priority?: number;
    public weight?: number;
    public constructor(sourcesType?: string, ipOrDomain?: string, priority?: number, weight?: number) { 
        this['sources_type'] = sourcesType;
        this['ip_or_domain'] = ipOrDomain;
        this['priority'] = priority;
        this['weight'] = weight;
    }
    public withSourcesType(sourcesType: string): FlexibleOriginsEngine {
        this['sources_type'] = sourcesType;
        return this;
    }
    public set sourcesType(sourcesType: string  | undefined) {
        this['sources_type'] = sourcesType;
    }
    public get sourcesType(): string | undefined {
        return this['sources_type'];
    }
    public withIpOrDomain(ipOrDomain: string): FlexibleOriginsEngine {
        this['ip_or_domain'] = ipOrDomain;
        return this;
    }
    public set ipOrDomain(ipOrDomain: string  | undefined) {
        this['ip_or_domain'] = ipOrDomain;
    }
    public get ipOrDomain(): string | undefined {
        return this['ip_or_domain'];
    }
    public withObsBucketType(obsBucketType: string): FlexibleOriginsEngine {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string  | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType(): string | undefined {
        return this['obs_bucket_type'];
    }
    public withBucketAccessKey(bucketAccessKey: string): FlexibleOriginsEngine {
        this['bucket_access_key'] = bucketAccessKey;
        return this;
    }
    public set bucketAccessKey(bucketAccessKey: string  | undefined) {
        this['bucket_access_key'] = bucketAccessKey;
    }
    public get bucketAccessKey(): string | undefined {
        return this['bucket_access_key'];
    }
    public withBucketSecretKey(bucketSecretKey: string): FlexibleOriginsEngine {
        this['bucket_secret_key'] = bucketSecretKey;
        return this;
    }
    public set bucketSecretKey(bucketSecretKey: string  | undefined) {
        this['bucket_secret_key'] = bucketSecretKey;
    }
    public get bucketSecretKey(): string | undefined {
        return this['bucket_secret_key'];
    }
    public withBucketRegion(bucketRegion: string): FlexibleOriginsEngine {
        this['bucket_region'] = bucketRegion;
        return this;
    }
    public set bucketRegion(bucketRegion: string  | undefined) {
        this['bucket_region'] = bucketRegion;
    }
    public get bucketRegion(): string | undefined {
        return this['bucket_region'];
    }
    public withBucketName(bucketName: string): FlexibleOriginsEngine {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
    public withHostName(hostName: string): FlexibleOriginsEngine {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withOriginProtocol(originProtocol: string): FlexibleOriginsEngine {
        this['origin_protocol'] = originProtocol;
        return this;
    }
    public set originProtocol(originProtocol: string  | undefined) {
        this['origin_protocol'] = originProtocol;
    }
    public get originProtocol(): string | undefined {
        return this['origin_protocol'];
    }
    public withHttpPort(httpPort: number): FlexibleOriginsEngine {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): FlexibleOriginsEngine {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
    public withPriority(priority: number): FlexibleOriginsEngine {
        this['priority'] = priority;
        return this;
    }
    public withWeight(weight: number): FlexibleOriginsEngine {
        this['weight'] = weight;
        return this;
    }
}