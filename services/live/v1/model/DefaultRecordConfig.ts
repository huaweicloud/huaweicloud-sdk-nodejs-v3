import { FLVRecordConfig } from './FLVRecordConfig';
import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';
import { VideoFormatVar } from './VideoFormatVar';


export class DefaultRecordConfig {
    private 'record_format': Array<VideoFormatVar> | undefined;
    private 'obs_addr': RecordObsFileAddr | undefined;
    private 'hls_config'?: HLSRecordConfig | undefined;
    private 'flv_config'?: FLVRecordConfig | undefined;
    private 'mp4_config'?: MP4RecordConfig | undefined;
    public constructor(recordFormat?: any, obsAddr?: any) { 
        this['record_format'] = recordFormat;
        this['obs_addr'] = obsAddr;
    }
    public withRecordFormat(recordFormat: Array<VideoFormatVar>): DefaultRecordConfig {
        this['record_format'] = recordFormat;
        return this;
    }
    public set recordFormat(recordFormat: Array<VideoFormatVar> | undefined) {
        this['record_format'] = recordFormat;
    }
    public get recordFormat() {
        return this['record_format'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): DefaultRecordConfig {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr() {
        return this['obs_addr'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): DefaultRecordConfig {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig() {
        return this['hls_config'];
    }
    public withFlvConfig(flvConfig: FLVRecordConfig): DefaultRecordConfig {
        this['flv_config'] = flvConfig;
        return this;
    }
    public set flvConfig(flvConfig: FLVRecordConfig | undefined) {
        this['flv_config'] = flvConfig;
    }
    public get flvConfig() {
        return this['flv_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): DefaultRecordConfig {
        this['mp4_config'] = mp4Config;
        return this;
    }
    public set mp4Config(mp4Config: MP4RecordConfig | undefined) {
        this['mp4_config'] = mp4Config;
    }
    public get mp4Config() {
        return this['mp4_config'];
    }
}