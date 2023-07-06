

export class SourcesConfig {
    private 'origin_type': string | undefined;
    private 'origin_addr': string | undefined;
    public priority: number;
    public weight?: number;
    private 'obs_web_hosting_status'?: string | undefined;
    private 'http_port'?: number | undefined;
    private 'https_port'?: number | undefined;
    private 'host_name'?: string | undefined;
    private 'obs_bucket_type'?: string | undefined;
    public constructor(originType?: any, originAddr?: any, priority?: any) { 
        this['origin_type'] = originType;
        this['origin_addr'] = originAddr;
        this['priority'] = priority;
    }
    public withOriginType(originType: string): SourcesConfig {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: string | undefined) {
        this['origin_type'] = originType;
    }
    public get originType() {
        return this['origin_type'];
    }
    public withOriginAddr(originAddr: string): SourcesConfig {
        this['origin_addr'] = originAddr;
        return this;
    }
    public set originAddr(originAddr: string | undefined) {
        this['origin_addr'] = originAddr;
    }
    public get originAddr() {
        return this['origin_addr'];
    }
    public withPriority(priority: number): SourcesConfig {
        this['priority'] = priority;
        return this;
    }
    public withWeight(weight: number): SourcesConfig {
        this['weight'] = weight;
        return this;
    }
    public withObsWebHostingStatus(obsWebHostingStatus: string): SourcesConfig {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
        return this;
    }
    public set obsWebHostingStatus(obsWebHostingStatus: string | undefined) {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
    }
    public get obsWebHostingStatus() {
        return this['obs_web_hosting_status'];
    }
    public withHttpPort(httpPort: number): SourcesConfig {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort() {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): SourcesConfig {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort() {
        return this['https_port'];
    }
    public withHostName(hostName: string): SourcesConfig {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName() {
        return this['host_name'];
    }
    public withObsBucketType(obsBucketType: string): SourcesConfig {
        this['obs_bucket_type'] = obsBucketType;
        return this;
    }
    public set obsBucketType(obsBucketType: string | undefined) {
        this['obs_bucket_type'] = obsBucketType;
    }
    public get obsBucketType() {
        return this['obs_bucket_type'];
    }
}