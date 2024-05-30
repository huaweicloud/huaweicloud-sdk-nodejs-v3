

export class SourcesConfigResponseBody {
    private 'origin_type'?: string;
    private 'origin_addr'?: string;
    public priority?: number;
    public weight?: number;
    private 'obs_web_hosting_status'?: string;
    private 'http_port'?: number;
    private 'https_port'?: number;
    private 'host_name'?: string;
    private 'obs_bucket_type'?: string;
    private 'bucket_access_key'?: string;
    private 'bucket_secret_key'?: string;
    private 'bucket_region'?: string;
    private 'bucket_name'?: string;
    public constructor(originType?: string, originAddr?: string, priority?: number) { 
        this['origin_type'] = originType;
        this['origin_addr'] = originAddr;
        this['priority'] = priority;
    }
    public withOriginType(originType: string): SourcesConfigResponseBody {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: string  | undefined) {
        this['origin_type'] = originType;
    }
    public get originType(): string | undefined {
        return this['origin_type'];
    }
    public withOriginAddr(originAddr: string): SourcesConfigResponseBody {
        this['origin_addr'] = originAddr;
        return this;
    }
    public set originAddr(originAddr: string  | undefined) {
        this['origin_addr'] = originAddr;
    }
    public get originAddr(): string | undefined {
        return this['origin_addr'];
    }
    public withPriority(priority: number): SourcesConfigResponseBody {
        this['priority'] = priority;
        return this;
    }
    public withWeight(weight: number): SourcesConfigResponseBody {
        this['weight'] = weight;
        return this;
    }
    public withObsWebHostingStatus(obsWebHostingStatus: string): SourcesConfigResponseBody {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
        return this;
    }
    public set obsWebHostingStatus(obsWebHostingStatus: string  | undefined) {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
    }
    public get obsWebHostingStatus(): string | undefined {
        return this['obs_web_hosting_status'];
    }
    public withHttpPort(httpPort: number): SourcesConfigResponseBody {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): SourcesConfigResponseBody {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
    public withHostName(hostName: string): SourcesConfigResponseBody {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
    public withObsBucketType(obsBucketType: string): SourcesConfigResponseBody {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string  | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType(): string | undefined {
        return this['obs_bucket_type'];
    }
    public withBucketAccessKey(bucketAccessKey: string): SourcesConfigResponseBody {
        this['bucket_access_key'] = bucketAccessKey;
        return this;
    }
    public set bucketAccessKey(bucketAccessKey: string  | undefined) {
        this['bucket_access_key'] = bucketAccessKey;
    }
    public get bucketAccessKey(): string | undefined {
        return this['bucket_access_key'];
    }
    public withBucketSecretKey(bucketSecretKey: string): SourcesConfigResponseBody {
        this['bucket_secret_key'] = bucketSecretKey;
        return this;
    }
    public set bucketSecretKey(bucketSecretKey: string  | undefined) {
        this['bucket_secret_key'] = bucketSecretKey;
    }
    public get bucketSecretKey(): string | undefined {
        return this['bucket_secret_key'];
    }
    public withBucketRegion(bucketRegion: string): SourcesConfigResponseBody {
        this['bucket_region'] = bucketRegion;
        return this;
    }
    public set bucketRegion(bucketRegion: string  | undefined) {
        this['bucket_region'] = bucketRegion;
    }
    public get bucketRegion(): string | undefined {
        return this['bucket_region'];
    }
    public withBucketName(bucketName: string): SourcesConfigResponseBody {
        this['bucket_name'] = bucketName;
        return this;
    }
    public set bucketName(bucketName: string  | undefined) {
        this['bucket_name'] = bucketName;
    }
    public get bucketName(): string | undefined {
        return this['bucket_name'];
    }
}