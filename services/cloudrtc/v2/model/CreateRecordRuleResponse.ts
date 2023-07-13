import { HLSRecordConfig } from './HLSRecordConfig';
import { MP4RecordConfig } from './MP4RecordConfig';
import { RecordObsFileAddr } from './RecordObsFileAddr';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateRecordRuleResponse extends SdkResponse {
    private 'rule_id'?: string | undefined;
    private 'app_id'?: string | undefined;
    private 'obs_addr'?: RecordObsFileAddr | undefined;
    private 'record_formats'?: Array<CreateRecordRuleResponseRecordFormatsEnum> | undefined;
    private 'hls_config'?: HLSRecordConfig | undefined;
    private 'mp4_config'?: MP4RecordConfig | undefined;
    private 'create_time'?: string | undefined;
    private 'update_time'?: string | undefined;
    private 'X-request-Id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withRuleId(ruleId: string): CreateRecordRuleResponse {
        this['rule_id'] = ruleId;
        return this;
    }
    public set ruleId(ruleId: string | undefined) {
        this['rule_id'] = ruleId;
    }
    public get ruleId() {
        return this['rule_id'];
    }
    public withAppId(appId: string): CreateRecordRuleResponse {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string | undefined) {
        this['app_id'] = appId;
    }
    public get appId() {
        return this['app_id'];
    }
    public withObsAddr(obsAddr: RecordObsFileAddr): CreateRecordRuleResponse {
        this['obs_addr'] = obsAddr;
        return this;
    }
    public set obsAddr(obsAddr: RecordObsFileAddr | undefined) {
        this['obs_addr'] = obsAddr;
    }
    public get obsAddr() {
        return this['obs_addr'];
    }
    public withRecordFormats(recordFormats: Array<CreateRecordRuleResponseRecordFormatsEnum>): CreateRecordRuleResponse {
        this['record_formats'] = recordFormats;
        return this;
    }
    public set recordFormats(recordFormats: Array<CreateRecordRuleResponseRecordFormatsEnum> | undefined) {
        this['record_formats'] = recordFormats;
    }
    public get recordFormats() {
        return this['record_formats'];
    }
    public withHlsConfig(hlsConfig: HLSRecordConfig): CreateRecordRuleResponse {
        this['hls_config'] = hlsConfig;
        return this;
    }
    public set hlsConfig(hlsConfig: HLSRecordConfig | undefined) {
        this['hls_config'] = hlsConfig;
    }
    public get hlsConfig() {
        return this['hls_config'];
    }
    public withMp4Config(mp4Config: MP4RecordConfig): CreateRecordRuleResponse {
        this['mp4_config'] = mp4Config;
        return this;
    }
    public set mp4Config(mp4Config: MP4RecordConfig | undefined) {
        this['mp4_config'] = mp4Config;
    }
    public get mp4Config() {
        return this['mp4_config'];
    }
    public withCreateTime(createTime: string): CreateRecordRuleResponse {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime() {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): CreateRecordRuleResponse {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime() {
        return this['update_time'];
    }
    public withXRequestId(xRequestId: string): CreateRecordRuleResponse {
        this['X-request-Id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string | undefined) {
        this['X-request-Id'] = xRequestId;
    }
    public get xRequestId() {
        return this['X-request-Id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateRecordRuleResponseRecordFormatsEnum {
    HLS = 'HLS',
    MP4 = 'MP4'
}
