

export class RecognizeFlashAsrRequest {
    public property: RecognizeFlashAsrRequestPropertyEnum;
    private 'audio_format': RecognizeFlashAsrRequestAudioFormatEnum | undefined;
    private 'add_punc'?: RecognizeFlashAsrRequestAddPuncEnum | undefined;
    private 'digit_norm'?: RecognizeFlashAsrRequestDigitNormEnum | undefined;
    private 'need_word_info'?: RecognizeFlashAsrRequestNeedWordInfoEnum | undefined;
    private 'vocabulary_id'?: string | undefined;
    private 'obs_bucket_name'?: string | undefined;
    private 'obs_object_key'?: string | undefined;
    private 'first_channel_only'?: RecognizeFlashAsrRequestFirstChannelOnlyEnum | undefined;
    public constructor(property?: any, audioFormat?: any) { 
        this['property'] = property;
        this['audio_format'] = audioFormat;
    }
    public withProperty(property: RecognizeFlashAsrRequestPropertyEnum): RecognizeFlashAsrRequest {
        this['property'] = property;
        return this;
    }
    public withAudioFormat(audioFormat: RecognizeFlashAsrRequestAudioFormatEnum): RecognizeFlashAsrRequest {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: RecognizeFlashAsrRequestAudioFormatEnum | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat() {
        return this['audio_format'];
    }
    public withAddPunc(addPunc: RecognizeFlashAsrRequestAddPuncEnum): RecognizeFlashAsrRequest {
        this['add_punc'] = addPunc;
        return this;
    }
    public set addPunc(addPunc: RecognizeFlashAsrRequestAddPuncEnum | undefined) {
        this['add_punc'] = addPunc;
    }
    public get addPunc() {
        return this['add_punc'];
    }
    public withDigitNorm(digitNorm: RecognizeFlashAsrRequestDigitNormEnum): RecognizeFlashAsrRequest {
        this['digit_norm'] = digitNorm;
        return this;
    }
    public set digitNorm(digitNorm: RecognizeFlashAsrRequestDigitNormEnum | undefined) {
        this['digit_norm'] = digitNorm;
    }
    public get digitNorm() {
        return this['digit_norm'];
    }
    public withNeedWordInfo(needWordInfo: RecognizeFlashAsrRequestNeedWordInfoEnum): RecognizeFlashAsrRequest {
        this['need_word_info'] = needWordInfo;
        return this;
    }
    public set needWordInfo(needWordInfo: RecognizeFlashAsrRequestNeedWordInfoEnum | undefined) {
        this['need_word_info'] = needWordInfo;
    }
    public get needWordInfo() {
        return this['need_word_info'];
    }
    public withVocabularyId(vocabularyId: string): RecognizeFlashAsrRequest {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId() {
        return this['vocabulary_id'];
    }
    public withObsBucketName(obsBucketName: string): RecognizeFlashAsrRequest {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName() {
        return this['obs_bucket_name'];
    }
    public withObsObjectKey(obsObjectKey: string): RecognizeFlashAsrRequest {
        this['obs_object_key'] = obsObjectKey;
        return this;
    }
    public set obsObjectKey(obsObjectKey: string | undefined) {
        this['obs_object_key'] = obsObjectKey;
    }
    public get obsObjectKey() {
        return this['obs_object_key'];
    }
    public withFirstChannelOnly(firstChannelOnly: RecognizeFlashAsrRequestFirstChannelOnlyEnum): RecognizeFlashAsrRequest {
        this['first_channel_only'] = firstChannelOnly;
        return this;
    }
    public set firstChannelOnly(firstChannelOnly: RecognizeFlashAsrRequestFirstChannelOnlyEnum | undefined) {
        this['first_channel_only'] = firstChannelOnly;
    }
    public get firstChannelOnly() {
        return this['first_channel_only'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestPropertyEnum {
    CHINESE_8K_COMMON = 'chinese_8k_common',
    CHINESE_16K_CONVERSATION = 'chinese_16k_conversation'
}
/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestAudioFormatEnum {
    WAV = 'wav',
    MP3 = 'mp3',
    M4A = 'm4a',
    AAC = 'aac',
    OPUS = 'opus'
}
/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestAddPuncEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestDigitNormEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestNeedWordInfoEnum {
    YES = 'yes',
    NO = 'no'
}
/**
    * @export
    * @enum {string}
    */
export enum RecognizeFlashAsrRequestFirstChannelOnlyEnum {
    YES = 'yes',
    NO = 'no'
}
