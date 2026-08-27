

export class UpdateProtocolConfigDTO {
    private 'keepalive_timeout'?: number;
    public description?: string;
    private 'codec_mode'?: string;
    private 'func_urn'?: string;
    public constructor() { 
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): UpdateProtocolConfigDTO {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number  | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout(): number | undefined {
        return this['keepalive_timeout'];
    }
    public withDescription(description: string): UpdateProtocolConfigDTO {
        this['description'] = description;
        return this;
    }
    public withCodecMode(codecMode: string): UpdateProtocolConfigDTO {
        this['codec_mode'] = codecMode;
        return this;
    }
    public set codecMode(codecMode: string  | undefined) {
        this['codec_mode'] = codecMode;
    }
    public get codecMode(): string | undefined {
        return this['codec_mode'];
    }
    public withFuncUrn(funcUrn: string): UpdateProtocolConfigDTO {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
}