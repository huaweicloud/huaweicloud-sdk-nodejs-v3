

export class ModifyPullSourcesConfig {
    private 'play_domain'?: string;
    private 'source_type'?: ModifyPullSourcesConfigSourceTypeEnum | string;
    public sources?: Array<string>;
    private 'sources_ip'?: Array<string>;
    private 'source_port'?: number;
    public scheme?: ModifyPullSourcesConfigSchemeEnum | string;
    private 'additional_args'?: { [key: string]: string; };
    public constructor(playDomain?: string, sourceType?: string) { 
        this['play_domain'] = playDomain;
        this['source_type'] = sourceType;
    }
    public withPlayDomain(playDomain: string): ModifyPullSourcesConfig {
        this['play_domain'] = playDomain;
        return this;
    }
    public set playDomain(playDomain: string  | undefined) {
        this['play_domain'] = playDomain;
    }
    public get playDomain(): string | undefined {
        return this['play_domain'];
    }
    public withSourceType(sourceType: ModifyPullSourcesConfigSourceTypeEnum | string): ModifyPullSourcesConfig {
        this['source_type'] = sourceType;
        return this;
    }
    public set sourceType(sourceType: ModifyPullSourcesConfigSourceTypeEnum | string  | undefined) {
        this['source_type'] = sourceType;
    }
    public get sourceType(): ModifyPullSourcesConfigSourceTypeEnum | string | undefined {
        return this['source_type'];
    }
    public withSources(sources: Array<string>): ModifyPullSourcesConfig {
        this['sources'] = sources;
        return this;
    }
    public withSourcesIp(sourcesIp: Array<string>): ModifyPullSourcesConfig {
        this['sources_ip'] = sourcesIp;
        return this;
    }
    public set sourcesIp(sourcesIp: Array<string>  | undefined) {
        this['sources_ip'] = sourcesIp;
    }
    public get sourcesIp(): Array<string> | undefined {
        return this['sources_ip'];
    }
    public withSourcePort(sourcePort: number): ModifyPullSourcesConfig {
        this['source_port'] = sourcePort;
        return this;
    }
    public set sourcePort(sourcePort: number  | undefined) {
        this['source_port'] = sourcePort;
    }
    public get sourcePort(): number | undefined {
        return this['source_port'];
    }
    public withScheme(scheme: ModifyPullSourcesConfigSchemeEnum | string): ModifyPullSourcesConfig {
        this['scheme'] = scheme;
        return this;
    }
    public withAdditionalArgs(additionalArgs: { [key: string]: string; }): ModifyPullSourcesConfig {
        this['additional_args'] = additionalArgs;
        return this;
    }
    public set additionalArgs(additionalArgs: { [key: string]: string; }  | undefined) {
        this['additional_args'] = additionalArgs;
    }
    public get additionalArgs(): { [key: string]: string; } | undefined {
        return this['additional_args'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ModifyPullSourcesConfigSourceTypeEnum {
    DOMAIN = 'domain',
    IPADDR = 'ipaddr',
    HUAWEI = 'huawei'
}
/**
    * @export
    * @enum {string}
    */
export enum ModifyPullSourcesConfigSchemeEnum {
    HTTP = 'http',
    RTMP = 'rtmp'
}
