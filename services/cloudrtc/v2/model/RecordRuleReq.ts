import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';


export class RecordRuleReq {
    private 'obs_addr': RecordObsFileAddr | undefined;
    private 'record_formats': Array<RecordRuleReqRecordFormatsEnum> | undefined;
    private 'hls_config'?: HLSRecordConfig | undefined;
    private 'mp4_config'?: MP4RecordConfig | undefined;
    public constructor(obsAddr?: any, recordFormats?: any) { 
        this['obs_addr'] = obsAddr;
        this['record_formats'] = recordFormats;
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): RecordRuleReq {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr() {
        return this['obs_addr'];
    }
    public withRecordFormats(recordFormats: Array<RecordRuleReqRecordFormatsEnum>): RecordRuleReq {
        this['record_formats'] = recordFormats;
        return this;
    }
    public set recordFormats(recordFormats: Array<RecordRuleReqRecordFormatsEnum> | undefined) {
        this['record_formats'] = recordFormats;
    }
    public get recordFormats() {
        return this['record_formats'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): RecordRuleReq {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig() {
        return this['hls_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): RecordRuleReq {
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

/**
    * @export
    * @enum {string}
    */
export enum RecordRuleReqRecordFormatsEnum {
    HLS = 'HLS',
    MP4 = 'MP4'
}
