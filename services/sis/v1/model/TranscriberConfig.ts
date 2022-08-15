import { AnalysisInfo } from './AnalysisInfo';


export class TranscriberConfig {
    private 'audio_format'?: TranscriberConfigAudioFormatEnum | undefined;
    public property: TranscriberConfigPropertyEnum;
    private 'add_punc'?: TranscriberConfigAddPuncEnum | undefined;
    private 'need_analysis_info'?: AnalysisInfo | undefined;
    private 'vocabulary_id'?: string | undefined;
    private 'digit_norm'?: TranscriberConfigDigitNormEnum | undefined;
    private 'callback_url'?: string | undefined;
    private 'need_word_info'?: TranscriberConfigNeedWordInfoEnum | undefined;
    public constructor(property?: any) { 
        this['property'] = property;
    }
    public withAudioFormat(audioFormat: TranscriberConfigAudioFormatEnum): TranscriberConfig {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: TranscriberConfigAudioFormatEnum | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat() {
        return this['audio_format'];
    }
    public withProperty(property: TranscriberConfigPropertyEnum): TranscriberConfig {
        this['property'] = property;
        return this;
    }
    public withAddPunc(addPunc: TranscriberConfigAddPuncEnum): TranscriberConfig {
        this['add_punc'] = addPunc;
        return this;
    }
    public set addPunc(addPunc: TranscriberConfigAddPuncEnum | undefined) {
        this['add_punc'] = addPunc;
    }
    public get addPunc() {
        return this['add_punc'];
    }
    public withNeedAnalysisInfo(needAnalysisInfo: AnalysisInfo): TranscriberConfig {
        this['need_analysis_info'] = needAnalysisInfo;
        return this;
    }
    public set needAnalysisInfo(needAnalysisInfo: AnalysisInfo | undefined) {
        this['need_analysis_info'] = needAnalysisInfo;
    }
    public get needAnalysisInfo() {
        return this['need_analysis_info'];
    }
    public withVocabularyId(vocabularyId: string): TranscriberConfig {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
    public withDigitNorm(digitNorm: TranscriberConfigDigitNormEnum): TranscriberConfig {
        this['digit_norm'] = digitNorm;
        return this;
    }
    public set digitNorm(digitNorm: TranscriberConfigDigitNormEnum | undefined) {
        this['digit_norm'] = digitNorm;
    }
    public get digitNorm() {
        return this['digit_norm'];
    }
    public withCallbackUrl(callbackUrl: string): TranscriberConfig {
        this['callback_url'] = callbackUrl;
        return this;
    }
    public set callbackUrl(callbackUrl: string | undefined) {
        this['callback_url'] = callbackUrl;
    }
    public get callbackUrl() {
        return this['callback_url'];
    }
    public withNeedWordInfo(needWordInfo: TranscriberConfigNeedWordInfoEnum): TranscriberConfig {
        this['need_word_info'] = needWordInfo;
        return this;
    }
    public set needWordInfo(needWordInfo: TranscriberConfigNeedWordInfoEnum | undefined) {
        this['need_word_info'] = needWordInfo;
    }
    public get needWordInfo() {
        return this['need_word_info'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TranscriberConfigAudioFormatEnum {
    AUTO = 'auto',
    PCM16K16BIT = 'pcm16k16bit',
    PCM8K16BIT = 'pcm8k16bit',
    ULAW16K8BIT = 'ulaw16k8bit',
    ULAW8K8BIT = 'ulaw8k8bit',
    ALAW16K8BIT = 'alaw16k8bit',
    ALAW8K8BIT = 'alaw8k8bit',
    VOX8K4BIT = 'vox8k4bit',
    V3_8K4BIT = 'v3_8k4bit'
}
/**
    * @export
    * @enum {string}
    */
export enum TranscriberConfigPropertyEnum {
    CHINESE_8K_COMMON = 'chinese_8k_common',
    CHINESE_16K_CONVERSATION = 'chinese_16k_conversation',
    CHINESE_8K_BANK = 'chinese_8k_bank',
    CHINESE_8K_INSURANCE = 'chinese_8k_insurance',
    CHINESE_16K_MEDIA = 'chinese_16k_media'
}
/**
    * @export
    * @enum {string}
    */
export enum TranscriberConfigAddPuncEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum TranscriberConfigDigitNormEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum TranscriberConfigNeedWordInfoEnum {
    YES = 'yes',
    NO = 'no'
}
