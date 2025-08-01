import { ExternalVoiceAssetMeta } from './ExternalVoiceAssetMeta';
import { VoiceCapability } from './VoiceCapability';
import { VoiceLanguage } from './VoiceLanguage';


export class VoiceModelAssetMeta {
    public order?: number;
    private 'model_type'?: VoiceModelAssetMetaModelTypeEnum | string;
    public sex?: VoiceModelAssetMetaSexEnum | string;
    public language?: VoiceModelAssetMetaLanguageEnum | string;
    public languages?: Array<VoiceLanguage>;
    private 'speed_ratio'?: number;
    private 'volume_ratio'?: number;
    private 'is_realtime_voice'?: boolean;
    public style?: string;
    private 'voice_capability'?: VoiceCapability;
    private 'external_voice_meta'?: ExternalVoiceAssetMeta;
    private 'is_support_vc_process'?: boolean;
    private 'is_support_thai_auto_split'?: boolean;
    private 'is_flexus'?: boolean;
    private 'is_enhance_rhythm'?: boolean;
    public age?: string;
    public constructor() { 
    }
    public withOrder(order: number): VoiceModelAssetMeta {
        this['order'] = order;
        return this;
    }
    public withModelType(modelType: VoiceModelAssetMetaModelTypeEnum | string): VoiceModelAssetMeta {
        this['model_type'] = modelType;
        return this;
    }
    public set modelType(modelType: VoiceModelAssetMetaModelTypeEnum | string  | undefined) {
        this['model_type'] = modelType;
    }
    public get modelType(): VoiceModelAssetMetaModelTypeEnum | string | undefined {
        return this['model_type'];
    }
    public withSex(sex: VoiceModelAssetMetaSexEnum | string): VoiceModelAssetMeta {
        this['sex'] = sex;
        return this;
    }
    public withLanguage(language: VoiceModelAssetMetaLanguageEnum | string): VoiceModelAssetMeta {
        this['language'] = language;
        return this;
    }
    public withLanguages(languages: Array<VoiceLanguage>): VoiceModelAssetMeta {
        this['languages'] = languages;
        return this;
    }
    public withSpeedRatio(speedRatio: number): VoiceModelAssetMeta {
        this['speed_ratio'] = speedRatio;
        return this;
    }
    public set speedRatio(speedRatio: number  | undefined) {
        this['speed_ratio'] = speedRatio;
    }
    public get speedRatio(): number | undefined {
        return this['speed_ratio'];
    }
    public withVolumeRatio(volumeRatio: number): VoiceModelAssetMeta {
        this['volume_ratio'] = volumeRatio;
        return this;
    }
    public set volumeRatio(volumeRatio: number  | undefined) {
        this['volume_ratio'] = volumeRatio;
    }
    public get volumeRatio(): number | undefined {
        return this['volume_ratio'];
    }
    public withIsRealtimeVoice(isRealtimeVoice: boolean): VoiceModelAssetMeta {
        this['is_realtime_voice'] = isRealtimeVoice;
        return this;
    }
    public set isRealtimeVoice(isRealtimeVoice: boolean  | undefined) {
        this['is_realtime_voice'] = isRealtimeVoice;
    }
    public get isRealtimeVoice(): boolean | undefined {
        return this['is_realtime_voice'];
    }
    public withStyle(style: string): VoiceModelAssetMeta {
        this['style'] = style;
        return this;
    }
    public withVoiceCapability(voiceCapability: VoiceCapability): VoiceModelAssetMeta {
        this['voice_capability'] = voiceCapability;
        return this;
    }
    public set voiceCapability(voiceCapability: VoiceCapability  | undefined) {
        this['voice_capability'] = voiceCapability;
    }
    public get voiceCapability(): VoiceCapability | undefined {
        return this['voice_capability'];
    }
    public withExternalVoiceMeta(externalVoiceMeta: ExternalVoiceAssetMeta): VoiceModelAssetMeta {
        this['external_voice_meta'] = externalVoiceMeta;
        return this;
    }
    public set externalVoiceMeta(externalVoiceMeta: ExternalVoiceAssetMeta  | undefined) {
        this['external_voice_meta'] = externalVoiceMeta;
    }
    public get externalVoiceMeta(): ExternalVoiceAssetMeta | undefined {
        return this['external_voice_meta'];
    }
    public withIsSupportVcProcess(isSupportVcProcess: boolean): VoiceModelAssetMeta {
        this['is_support_vc_process'] = isSupportVcProcess;
        return this;
    }
    public set isSupportVcProcess(isSupportVcProcess: boolean  | undefined) {
        this['is_support_vc_process'] = isSupportVcProcess;
    }
    public get isSupportVcProcess(): boolean | undefined {
        return this['is_support_vc_process'];
    }
    public withIsSupportThaiAutoSplit(isSupportThaiAutoSplit: boolean): VoiceModelAssetMeta {
        this['is_support_thai_auto_split'] = isSupportThaiAutoSplit;
        return this;
    }
    public set isSupportThaiAutoSplit(isSupportThaiAutoSplit: boolean  | undefined) {
        this['is_support_thai_auto_split'] = isSupportThaiAutoSplit;
    }
    public get isSupportThaiAutoSplit(): boolean | undefined {
        return this['is_support_thai_auto_split'];
    }
    public withIsFlexus(isFlexus: boolean): VoiceModelAssetMeta {
        this['is_flexus'] = isFlexus;
        return this;
    }
    public set isFlexus(isFlexus: boolean  | undefined) {
        this['is_flexus'] = isFlexus;
    }
    public get isFlexus(): boolean | undefined {
        return this['is_flexus'];
    }
    public withIsEnhanceRhythm(isEnhanceRhythm: boolean): VoiceModelAssetMeta {
        this['is_enhance_rhythm'] = isEnhanceRhythm;
        return this;
    }
    public set isEnhanceRhythm(isEnhanceRhythm: boolean  | undefined) {
        this['is_enhance_rhythm'] = isEnhanceRhythm;
    }
    public get isEnhanceRhythm(): boolean | undefined {
        return this['is_enhance_rhythm'];
    }
    public withAge(age: string): VoiceModelAssetMeta {
        this['age'] = age;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VoiceModelAssetMetaModelTypeEnum {
    COMMON = 'COMMON',
    CLONE = 'CLONE'
}
/**
    * @export
    * @enum {string}
    */
export enum VoiceModelAssetMetaSexEnum {
    UNKNOW = 'UNKNOW',
    MALE = 'MALE',
    FEMALE = 'FEMALE'
}
/**
    * @export
    * @enum {string}
    */
export enum VoiceModelAssetMetaLanguageEnum {
    UNKNOW = 'UNKNOW',
    CN = 'CN',
    EN = 'EN',
    GER = 'GER',
    FR = 'fr',
    KR = 'Kr',
    POR = 'por',
    JPN = 'JPN',
    ITA = 'Ita',
    ESP = 'ESP',
    DBH = 'DBH',
    GT = 'GT',
    GXH = 'GXH',
    HBH = 'HBH',
    SXH = 'SXH',
    SCH = 'SCH',
    YY = 'YY',
    RUSSIAN = 'Russian',
    FILIPINO = 'Filipino',
    DUTCH = 'Dutch',
    INDONESIAN = 'Indonesian',
    VIETNAMESE = 'Vietnamese',
    ARABIC = 'Arabic',
    TURKISH = 'Turkish',
    MALAY = 'Malay',
    THAI = 'Thai',
    FINNISH = 'Finnish'
}
