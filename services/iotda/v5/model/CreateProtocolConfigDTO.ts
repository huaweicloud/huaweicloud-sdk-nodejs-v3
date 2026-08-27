import { FrameDecodeConfig } from './FrameDecodeConfig';


export class CreateProtocolConfigDTO {
    public port?: number;
    private 'keepalive_timeout'?: number;
    private 'protocol_type'?: string;
    public description?: string;
    private 'ssl_enable'?: boolean;
    private 'frame_decode_configs'?: Array<FrameDecodeConfig>;
    private 'codec_mode'?: string;
    private 'func_urn'?: string;
    public constructor(port?: number, protocolType?: string, codecMode?: string) { 
        this['port'] = port;
        this['protocol_type'] = protocolType;
        this['codec_mode'] = codecMode;
    }
    public withPort(port: number): CreateProtocolConfigDTO {
        this['port'] = port;
        return this;
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): CreateProtocolConfigDTO {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number  | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout(): number | undefined {
        return this['keepalive_timeout'];
    }
    public withProtocolType(protocolType: string): CreateProtocolConfigDTO {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withDescription(description: string): CreateProtocolConfigDTO {
        this['description'] = description;
        return this;
    }
    public withSslEnable(sslEnable: boolean): CreateProtocolConfigDTO {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withFrameDecodeConfigs(frameDecodeConfigs: Array<FrameDecodeConfig>): CreateProtocolConfigDTO {
        this['frame_decode_configs'] = frameDecodeConfigs;
        return this;
    }
    public set frameDecodeConfigs(frameDecodeConfigs: Array<FrameDecodeConfig>  | undefined) {
        this['frame_decode_configs'] = frameDecodeConfigs;
    }
    public get frameDecodeConfigs(): Array<FrameDecodeConfig> | undefined {
        return this['frame_decode_configs'];
    }
    public withCodecMode(codecMode: string): CreateProtocolConfigDTO {
        this['codec_mode'] = codecMode;
        return this;
    }
    public set codecMode(codecMode: string  | undefined) {
        this['codec_mode'] = codecMode;
    }
    public get codecMode(): string | undefined {
        return this['codec_mode'];
    }
    public withFuncUrn(funcUrn: string): CreateProtocolConfigDTO {
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