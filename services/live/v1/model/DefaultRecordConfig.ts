import { FLVRecordConfig } from './FLVRecordConfig';
import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';
import { VideoFormatVar } from './VideoFormatVar';


export class DefaultRecordConfig {
    private 'record_format'?: Array<VideoFormatVar>;
    private 'obs_addr'?: RecordObsFileAddr;
    private 'hls_config'?: HLSRecordConfig;
    private 'flv_config'?: FLVRecordConfig;
    private 'mp4_config'?: MP4RecordConfig;
    public constructor(recordFormat?: Array<VideoFormatVar>, obsAddr?: RecordObsFileAddr) { 
        this['record_format'] = recordFormat;
        this['obs_addr'] = obsAddr;
    }
    public withRecordFormat(recordFormat: Array<VideoFormatVar>): DefaultRecordConfig {
        this['record_format'] = recordFormat;
        return this;
    }
    public set recordFormat(recordFormat: Array<VideoFormatVar>  | undefined) {
        this['record_format'] = recordFormat;
    }
    public get recordFormat(): Array<VideoFormatVar> | undefined {
        return this['record_format'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): DefaultRecordConfig {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr  | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr(): RecordObsFileAddr | undefined {
        return this['obs_addr'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): DefaultRecordConfig {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig  | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig(): HLSRecordConfig | undefined {
        return this['hls_config'];
    }
    public withFlvConfig(flvConfig: FLVRecordConfig): DefaultRecordConfig {
        this['flv_config'] = flvConfig;
        return this;
    }
    public set flvConfig(flvConfig: FLVRecordConfig  | undefined) {
        this['flv_config'] = flvConfig;
    }
    public get flvConfig(): FLVRecordConfig | undefined {
        return this['flv_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): DefaultRecordConfig {
        this['mp4_config'] = mp4Config;
        return this;
    }
    public set mp4Config(mp4Config: MP4RecordConfig  | undefined) {
        this['mp4_config'] = mp4Config;
    }
    public get mp4Config(): MP4RecordConfig | undefined {
        return this['mp4_config'];
    }
}