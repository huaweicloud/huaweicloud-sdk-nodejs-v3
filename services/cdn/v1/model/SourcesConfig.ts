

export class SourcesConfig {
    private 'origin_addr'?: string;
    private 'origin_type'?: string;
    public priority?: number;
    private 'obs_web_hosting_status'?: string;
    private 'http_port'?: number;
    private 'https_port'?: number;
    private 'host_name'?: string;
    public constructor(originAddr?: string, originType?: string, priority?: number) { 
        this['origin_addr'] = originAddr;
        this['origin_type'] = originType;
        this['priority'] = priority;
    }
    public withOriginAddr(originAddr: string): SourcesConfig {
        this['origin_addr'] = originAddr;
        return this;
    }
    public set originAddr(originAddr: string  | undefined) {
        this['origin_addr'] = originAddr;
    }
    public get originAddr(): string | undefined {
        return this['origin_addr'];
    }
    public withOriginType(originType: string): SourcesConfig {
        this['origin_type'] = originType;
        return this;
    }
    public set originType(originType: string  | undefined) {
        this['origin_type'] = originType;
    }
    public get originType(): string | undefined {
        return this['origin_type'];
    }
    public withPriority(priority: number): SourcesConfig {
        this['priority'] = priority;
        return this;
    }
    public withObsWebHostingStatus(obsWebHostingStatus: string): SourcesConfig {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
        return this;
    }
    public set obsWebHostingStatus(obsWebHostingStatus: string  | undefined) {
        this['obs_web_hosting_status'] = obsWebHostingStatus;
    }
    public get obsWebHostingStatus(): string | undefined {
        return this['obs_web_hosting_status'];
    }
    public withHttpPort(httpPort: number): SourcesConfig {
        this['http_port'] = httpPort;
        return this;
    }
    public set httpPort(httpPort: number  | undefined) {
        this['http_port'] = httpPort;
    }
    public get httpPort(): number | undefined {
        return this['http_port'];
    }
    public withHttpsPort(httpsPort: number): SourcesConfig {
        this['https_port'] = httpsPort;
        return this;
    }
    public set httpsPort(httpsPort: number  | undefined) {
        this['https_port'] = httpsPort;
    }
    public get httpsPort(): number | undefined {
        return this['https_port'];
    }
    public withHostName(hostName: string): SourcesConfig {
        this['host_name'] = hostName;
        return this;
    }
    public set hostName(hostName: string  | undefined) {
        this['host_name'] = hostName;
    }
    public get hostName(): string | undefined {
        return this['host_name'];
    }
}