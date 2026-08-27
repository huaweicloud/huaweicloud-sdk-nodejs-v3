import { FrameDecodeConfig } from './FrameDecodeConfig';


export class ProtocolConfigBase {
    private 'protocol_id'?: string;
    public port?: number;
    private 'keepalive_timeout'?: number;
    private 'protocol_type'?: string;
    public description?: string;
    private 'ssl_enable'?: boolean;
    private 'frame_decode_configs'?: Array<FrameDecodeConfig>;
    private 'codec_mode'?: string;
    private 'func_urn'?: string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    public constructor() { 
    }
    public withProtocolId(protocolId: string): ProtocolConfigBase {
        this['protocol_id'] = protocolId;
        return this;
    }
    public set protocolId(protocolId: string  | undefined) {
        this['protocol_id'] = protocolId;
    }
    public get protocolId(): string | undefined {
        return this['protocol_id'];
    }
    public withPort(port: number): ProtocolConfigBase {
        this['port'] = port;
        return this;
    }
    public withKeepaliveTimeout(keepaliveTimeout: number): ProtocolConfigBase {
        this['keepalive_timeout'] = keepaliveTimeout;
        return this;
    }
    public set keepaliveTimeout(keepaliveTimeout: number  | undefined) {
        this['keepalive_timeout'] = keepaliveTimeout;
    }
    public get keepaliveTimeout(): number | undefined {
        return this['keepalive_timeout'];
    }
    public withProtocolType(protocolType: string): ProtocolConfigBase {
        this['protocol_type'] = protocolType;
        return this;
    }
    public set protocolType(protocolType: string  | undefined) {
        this['protocol_type'] = protocolType;
    }
    public get protocolType(): string | undefined {
        return this['protocol_type'];
    }
    public withDescription(description: string): ProtocolConfigBase {
        this['description'] = description;
        return this;
    }
    public withSslEnable(sslEnable: boolean): ProtocolConfigBase {
        this['ssl_enable'] = sslEnable;
        return this;
    }
    public set sslEnable(sslEnable: boolean  | undefined) {
        this['ssl_enable'] = sslEnable;
    }
    public get sslEnable(): boolean | undefined {
        return this['ssl_enable'];
    }
    public withFrameDecodeConfigs(frameDecodeConfigs: Array<FrameDecodeConfig>): ProtocolConfigBase {
        this['frame_decode_configs'] = frameDecodeConfigs;
        return this;
    }
    public set frameDecodeConfigs(frameDecodeConfigs: Array<FrameDecodeConfig>  | undefined) {
        this['frame_decode_configs'] = frameDecodeConfigs;
    }
    public get frameDecodeConfigs(): Array<FrameDecodeConfig> | undefined {
        return this['frame_decode_configs'];
    }
    public withCodecMode(codecMode: string): ProtocolConfigBase {
        this['codec_mode'] = codecMode;
        return this;
    }
    public set codecMode(codecMode: string  | undefined) {
        this['codec_mode'] = codecMode;
    }
    public get codecMode(): string | undefined {
        return this['codec_mode'];
    }
    public withFuncUrn(funcUrn: string): ProtocolConfigBase {
        this['func_urn'] = funcUrn;
        return this;
    }
    public set funcUrn(funcUrn: string  | undefined) {
        this['func_urn'] = funcUrn;
    }
    public get funcUrn(): string | undefined {
        return this['func_urn'];
    }
    public withCreateTime(createTime: string): ProtocolConfigBase {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): ProtocolConfigBase {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
}