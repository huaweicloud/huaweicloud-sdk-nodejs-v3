import { AsrTypeEnum } from './AsrTypeEnum';


export class ThirdPartyModelConfig {
    private 'app_id'?: string;
    private 'app_key'?: string;
    private 'llm_url'?: string;
    private 'is_stream'?: boolean;
    private 'chat_rounds'?: number;
    private 'sis_region'?: number;
    private 'sis_project_id'?: string;
    private 'enable_hot_words'?: boolean;
    private 'asr_type'?: AsrTypeEnum;
    private 'asr_account'?: string;
    private 'asr_secret'?: string;
    public constructor() { 
    }
    public withAppId(appId: string): ThirdPartyModelConfig {
        this['app_id'] = appId;
        return this;
    }
    public set appId(appId: string  | undefined) {
        this['app_id'] = appId;
    }
    public get appId(): string | undefined {
        return this['app_id'];
    }
    public withAppKey(appKey: string): ThirdPartyModelConfig {
        this['app_key'] = appKey;
        return this;
    }
    public set appKey(appKey: string  | undefined) {
        this['app_key'] = appKey;
    }
    public get appKey(): string | undefined {
        return this['app_key'];
    }
    public withLlmUrl(llmUrl: string): ThirdPartyModelConfig {
        this['llm_url'] = llmUrl;
        return this;
    }
    public set llmUrl(llmUrl: string  | undefined) {
        this['llm_url'] = llmUrl;
    }
    public get llmUrl(): string | undefined {
        return this['llm_url'];
    }
    public withIsStream(isStream: boolean): ThirdPartyModelConfig {
        this['is_stream'] = isStream;
        return this;
    }
    public set isStream(isStream: boolean  | undefined) {
        this['is_stream'] = isStream;
    }
    public get isStream(): boolean | undefined {
        return this['is_stream'];
    }
    public withChatRounds(chatRounds: number): ThirdPartyModelConfig {
        this['chat_rounds'] = chatRounds;
        return this;
    }
    public set chatRounds(chatRounds: number  | undefined) {
        this['chat_rounds'] = chatRounds;
    }
    public get chatRounds(): number | undefined {
        return this['chat_rounds'];
    }
    public withSisRegion(sisRegion: number): ThirdPartyModelConfig {
        this['sis_region'] = sisRegion;
        return this;
    }
    public set sisRegion(sisRegion: number  | undefined) {
        this['sis_region'] = sisRegion;
    }
    public get sisRegion(): number | undefined {
        return this['sis_region'];
    }
    public withSisProjectId(sisProjectId: string): ThirdPartyModelConfig {
        this['sis_project_id'] = sisProjectId;
        return this;
    }
    public set sisProjectId(sisProjectId: string  | undefined) {
        this['sis_project_id'] = sisProjectId;
    }
    public get sisProjectId(): string | undefined {
        return this['sis_project_id'];
    }
    public withEnableHotWords(enableHotWords: boolean): ThirdPartyModelConfig {
        this['enable_hot_words'] = enableHotWords;
        return this;
    }
    public set enableHotWords(enableHotWords: boolean  | undefined) {
        this['enable_hot_words'] = enableHotWords;
    }
    public get enableHotWords(): boolean | undefined {
        return this['enable_hot_words'];
    }
    public withAsrType(asrType: AsrTypeEnum): ThirdPartyModelConfig {
        this['asr_type'] = asrType;
        return this;
    }
    public set asrType(asrType: AsrTypeEnum  | undefined) {
        this['asr_type'] = asrType;
    }
    public get asrType(): AsrTypeEnum | undefined {
        return this['asr_type'];
    }
    public withAsrAccount(asrAccount: string): ThirdPartyModelConfig {
        this['asr_account'] = asrAccount;
        return this;
    }
    public set asrAccount(asrAccount: string  | undefined) {
        this['asr_account'] = asrAccount;
    }
    public get asrAccount(): string | undefined {
        return this['asr_account'];
    }
    public withAsrSecret(asrSecret: string): ThirdPartyModelConfig {
        this['asr_secret'] = asrSecret;
        return this;
    }
    public set asrSecret(asrSecret: string  | undefined) {
        this['asr_secret'] = asrSecret;
    }
    public get asrSecret(): string | undefined {
        return this['asr_secret'];
    }
}