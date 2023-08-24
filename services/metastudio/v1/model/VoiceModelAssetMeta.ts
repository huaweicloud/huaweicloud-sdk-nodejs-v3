import { ExternalVoiceAssetMeta } from './ExternalVoiceAssetMeta';


export class VoiceModelAssetMeta {
    private 'model_type'?: VoiceModelAssetMetaModelTypeEnum | string;
    public sex?: VoiceModelAssetMetaSexEnum | string;
    public language?: VoiceModelAssetMetaLanguageEnum | string;
    private 'tts_mode'?: VoiceModelAssetMetaTtsModeEnum | string;
    private 'external_voice_meta'?: ExternalVoiceAssetMeta;
    public constructor() { 
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
    public withTtsMode(ttsMode: VoiceModelAssetMetaTtsModeEnum | string): VoiceModelAssetMeta {
        this['tts_mode'] = ttsMode;
        return this;
    }
    public set ttsMode(ttsMode: VoiceModelAssetMetaTtsModeEnum | string  | undefined) {
        this['tts_mode'] = ttsMode;
    }
    public get ttsMode(): VoiceModelAssetMetaTtsModeEnum | string | undefined {
        return this['tts_mode'];
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
    EN = 'EN'
}
/**
    * @export
    * @enum {string}
    */
export enum VoiceModelAssetMetaTtsModeEnum {
    UNKNOW = 'UNKNOW',
    TTS_V1 = 'TTS_V1',
    TTS_V2 = 'TTS_V2'
}
