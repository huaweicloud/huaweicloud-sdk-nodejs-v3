import { ModelInfo } from './ModelInfo';
import { VoiceConfig } from './VoiceConfig';
import { VoiceConfigRsp } from './VoiceConfigRsp';


export class SmartChatRoomBaseInfo {
    private 'room_id'?: string;
    private 'room_name'?: string;
    private 'room_description'?: string;
    private 'robot_id'?: string;
    private 'cover_url'?: string;
    private 'model_infos'?: ModelInfo;
    private 'voice_config'?: VoiceConfig;
    private 'billing_mode'?: SmartChatRoomBaseInfoBillingModeEnum | string;
    private 'reuse_resource'?: boolean;
    public concurrency?: number;
    private 'client_nums'?: number;
    private 'voice_config_list'?: Array<VoiceConfigRsp>;
    private 'default_language'?: SmartChatRoomBaseInfoDefaultLanguageEnum | string;
    private 'create_time'?: string;
    private 'update_time'?: string;
    private 'exit_mute_threshold'?: number;
    public constructor() { 
    }
    public withRoomId(roomId: string): SmartChatRoomBaseInfo {
        this['room_id'] = roomId;
        return this;
    }
    public set roomId(roomId: string  | undefined) {
        this['room_id'] = roomId;
    }
    public get roomId(): string | undefined {
        return this['room_id'];
    }
    public withRoomName(roomName: string): SmartChatRoomBaseInfo {
        this['room_name'] = roomName;
        return this;
    }
    public set roomName(roomName: string  | undefined) {
        this['room_name'] = roomName;
    }
    public get roomName(): string | undefined {
        return this['room_name'];
    }
    public withRoomDescription(roomDescription: string): SmartChatRoomBaseInfo {
        this['room_description'] = roomDescription;
        return this;
    }
    public set roomDescription(roomDescription: string  | undefined) {
        this['room_description'] = roomDescription;
    }
    public get roomDescription(): string | undefined {
        return this['room_description'];
    }
    public withRobotId(robotId: string): SmartChatRoomBaseInfo {
        this['robot_id'] = robotId;
        return this;
    }
    public set robotId(robotId: string  | undefined) {
        this['robot_id'] = robotId;
    }
    public get robotId(): string | undefined {
        return this['robot_id'];
    }
    public withCoverUrl(coverUrl: string): SmartChatRoomBaseInfo {
        this['cover_url'] = coverUrl;
        return this;
    }
    public set coverUrl(coverUrl: string  | undefined) {
        this['cover_url'] = coverUrl;
    }
    public get coverUrl(): string | undefined {
        return this['cover_url'];
    }
    public withModelInfos(modelInfos: ModelInfo): SmartChatRoomBaseInfo {
        this['model_infos'] = modelInfos;
        return this;
    }
    public set modelInfos(modelInfos: ModelInfo  | undefined) {
        this['model_infos'] = modelInfos;
    }
    public get modelInfos(): ModelInfo | undefined {
        return this['model_infos'];
    }
    public withVoiceConfig(voiceConfig: VoiceConfig): SmartChatRoomBaseInfo {
        this['voice_config'] = voiceConfig;
        return this;
    }
    public set voiceConfig(voiceConfig: VoiceConfig  | undefined) {
        this['voice_config'] = voiceConfig;
    }
    public get voiceConfig(): VoiceConfig | undefined {
        return this['voice_config'];
    }
    public withBillingMode(billingMode: SmartChatRoomBaseInfoBillingModeEnum | string): SmartChatRoomBaseInfo {
        this['billing_mode'] = billingMode;
        return this;
    }
    public set billingMode(billingMode: SmartChatRoomBaseInfoBillingModeEnum | string  | undefined) {
        this['billing_mode'] = billingMode;
    }
    public get billingMode(): SmartChatRoomBaseInfoBillingModeEnum | string | undefined {
        return this['billing_mode'];
    }
    public withReuseResource(reuseResource: boolean): SmartChatRoomBaseInfo {
        this['reuse_resource'] = reuseResource;
        return this;
    }
    public set reuseResource(reuseResource: boolean  | undefined) {
        this['reuse_resource'] = reuseResource;
    }
    public get reuseResource(): boolean | undefined {
        return this['reuse_resource'];
    }
    public withConcurrency(concurrency: number): SmartChatRoomBaseInfo {
        this['concurrency'] = concurrency;
        return this;
    }
    public withClientNums(clientNums: number): SmartChatRoomBaseInfo {
        this['client_nums'] = clientNums;
        return this;
    }
    public set clientNums(clientNums: number  | undefined) {
        this['client_nums'] = clientNums;
    }
    public get clientNums(): number | undefined {
        return this['client_nums'];
    }
    public withVoiceConfigList(voiceConfigList: Array<VoiceConfigRsp>): SmartChatRoomBaseInfo {
        this['voice_config_list'] = voiceConfigList;
        return this;
    }
    public set voiceConfigList(voiceConfigList: Array<VoiceConfigRsp>  | undefined) {
        this['voice_config_list'] = voiceConfigList;
    }
    public get voiceConfigList(): Array<VoiceConfigRsp> | undefined {
        return this['voice_config_list'];
    }
    public withDefaultLanguage(defaultLanguage: SmartChatRoomBaseInfoDefaultLanguageEnum | string): SmartChatRoomBaseInfo {
        this['default_language'] = defaultLanguage;
        return this;
    }
    public set defaultLanguage(defaultLanguage: SmartChatRoomBaseInfoDefaultLanguageEnum | string  | undefined) {
        this['default_language'] = defaultLanguage;
    }
    public get defaultLanguage(): SmartChatRoomBaseInfoDefaultLanguageEnum | string | undefined {
        return this['default_language'];
    }
    public withCreateTime(createTime: string): SmartChatRoomBaseInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: string  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): string | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: string): SmartChatRoomBaseInfo {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: string  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): string | undefined {
        return this['update_time'];
    }
    public withExitMuteThreshold(exitMuteThreshold: number): SmartChatRoomBaseInfo {
        this['exit_mute_threshold'] = exitMuteThreshold;
        return this;
    }
    public set exitMuteThreshold(exitMuteThreshold: number  | undefined) {
        this['exit_mute_threshold'] = exitMuteThreshold;
    }
    public get exitMuteThreshold(): number | undefined {
        return this['exit_mute_threshold'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SmartChatRoomBaseInfoBillingModeEnum {
    CONCURRENCY = 'CONCURRENCY',
    CLIENT = 'CLIENT',
    CLIENT_TOKENS = 'CLIENT_TOKENS'
}
/**
    * @export
    * @enum {string}
    */
export enum SmartChatRoomBaseInfoDefaultLanguageEnum {
    CN = 'CN',
    EN = 'EN',
    ESP = 'ESP',
    POR = 'por',
    ARABIC = 'Arabic',
    THAI = 'Thai'
}
