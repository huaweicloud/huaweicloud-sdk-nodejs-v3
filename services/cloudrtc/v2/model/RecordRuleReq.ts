import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';


export class RecordRuleReq {
    private 'obs_addr'?: RecordObsFileAddr;
    private 'record_formats'?: Array<RecordRuleReqRecordFormatsEnum> | Array<string>;
    private 'hls_config'?: HLSRecordConfig;
    private 'mp4_config'?: MP4RecordConfig;
    public constructor(obsAddr?: RecordObsFileAddr, recordFormats?: Array<string>) { 
        this['obs_addr'] = obsAddr;
        this['record_formats'] = recordFormats;
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): RecordRuleReq {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr  | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr(): RecordObsFileAddr | undefined {
        return this['obs_addr'];
    }
    public withRecordFormats(recordFormats: Array<RecordRuleReqRecordFormatsEnum> | Array<string>): RecordRuleReq {
        this['record_formats'] = recordFormats;
        return this;
    }
    public set recordFormats(recordFormats: Array<RecordRuleReqRecordFormatsEnum> | Array<string>  | undefined) {
        this['record_formats'] = recordFormats;
    }
    public get recordFormats(): Array<RecordRuleReqRecordFormatsEnum> | Array<string> | undefined {
        return this['record_formats'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): RecordRuleReq {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig  | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig(): HLSRecordConfig | undefined {
        return this['hls_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): RecordRuleReq {
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

/**
    * @export
    * @enum {string}
    */
export enum RecordRuleReqRecordFormatsEnum {
    HLS = 'HLS',
    MP4 = 'MP4'
}
