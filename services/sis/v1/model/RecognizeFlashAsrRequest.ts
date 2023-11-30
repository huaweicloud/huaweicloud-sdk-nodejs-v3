

export class RecognizeFlashAsrRequest {
    public property?: RecognizeFlashAsrRequestPropertyEnum | string;
    private 'audio_format'?: RecognizeFlashAsrRequestAudioFormatEnum | string;
    private 'obs_bucket_name'?: string;
    private 'obs_object_key'?: string;
    private 'add_punc'?: RecognizeFlashAsrRequestAddPuncEnum | string;
    private 'digit_norm'?: RecognizeFlashAsrRequestDigitNormEnum | string;
    private 'need_word_info'?: RecognizeFlashAsrRequestNeedWordInfoEnum | string;
    private 'vocabulary_id'?: string;
    private 'first_channel_only'?: RecognizeFlashAsrRequestFirstChannelOnlyEnum | string;
    public constructor(property?: string, audioFormat?: string, obsBucketName?: string, obsObjectKey?: string) { 
        this['property'] = property;
        this['audio_format'] = audioFormat;
        this['obs_bucket_name'] = obsBucketName;
        this['obs_object_key'] = obsObjectKey;
    }
    public withProperty(property: RecognizeFlashAsrRequestPropertyEnum | string): RecognizeFlashAsrRequest {
        this['property'] = property;
        return this;
    }
    public withAudioFormat(audioFormat: RecognizeFlashAsrRequestAudioFormatEnum | string): RecognizeFlashAsrRequest {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: RecognizeFlashAsrRequestAudioFormatEnum | string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): RecognizeFlashAsrRequestAudioFormatEnum | string | undefined {
        return this['audio_format'];
    }
    public withObsBucketName(obsBucketName: string): RecognizeFlashAsrRequest {
        this['obs_bucket_name'] = obsBucketName;
        return this;
    }
    public set obsBucketName(obsBucketName: string  | undefined) {
        this['obs_bucket_name'] = obsBucketName;
    }
    public get obsBucketName(): string | undefined {
        return this['obs_bucket_name'];
    }
    public withObsObjectKey(obsObjectKey: string): RecognizeFlashAsrRequest {
        this['obs_object_key'] = obsObjectKey;
        return this;
    }
    public set obsObjectKey(obsObjectKey: string  | undefined) {
        this['obs_object_key'] = obsObjectKey;
    }
    public get obsObjectKey(): string | undefined {
        return this['obs_object_key'];
    }
    public withAddPunc(addPunc: RecognizeFlashAsrRequestAddPuncEnum | string): RecognizeFlashAsrRequest {
        this['add_punc'] = addPunc;
        return this;
    }
    public set addPunc(addPunc: RecognizeFlashAsrRequestAddPuncEnum | string  | undefined) {
        this['add_punc'] = addPunc;
    }
    public get addPunc(): RecognizeFlashAsrRequestAddPuncEnum | string | undefined {
        return this['add_punc'];
    }
    public withDigitNorm(digitNorm: RecognizeFlashAsrRequestDigitNormEnum | string): RecognizeFlashAsrRequest {
        this['digit_norm'] = digitNorm;
        return this;
    }
    public set digitNorm(digitNorm: RecognizeFlashAsrRequestDigitNormEnum | string  | undefined) {
        this['digit_norm'] = digitNorm;
    }
    public get digitNorm(): RecognizeFlashAsrRequestDigitNormEnum | string | undefined {
        return this['digit_norm'];
    }
    public withNeedWordInfo(needWordInfo: RecognizeFlashAsrRequestNeedWordInfoEnum | string): RecognizeFlashAsrRequest {
        this['need_word_info'] = needWordInfo;
        return this;
    }
    public set needWordInfo(needWordInfo: RecognizeFlashAsrRequestNeedWordInfoEnum | string  | undefined) {
        this['need_word_info'] = needWordInfo;
    }
    public get needWordInfo(): RecognizeFlashAsrRequestNeedWordInfoEnum | string | undefined {
        return this['need_word_info'];
    }
    public withVocabularyId(vocabularyId: string): RecognizeFlashAsrRequest {
        this['vocabulary_id'] = vocabularyId;
        return this;
    }
    public set vocabularyId(vocabularyId: string  | undefined) {
        this['vocabulary_id'] = vocabularyId;
    }
    public get vocabularyId(): string | undefined {
        return this['vocabulary_id'];
    }
    public withFirstChannelOnly(firstChannelOnly: RecognizeFlashAsrRequestFirstChannelOnlyEnum | string): RecognizeFlashAsrRequest {
        this['first_channel_only'] = firstChannelOnly;
        return this;
    }
    public set firstChannelOnly(firstChannelOnly: RecognizeFlashAsrRequestFirstChannelOnlyEnum | string  | undefined) {
        this['first_channel_only'] = firstChannelOnly;
    }
    public get firstChannelOnly(): RecognizeFlashAsrRequestFirstChannelOnlyEnum | string | undefined {
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
