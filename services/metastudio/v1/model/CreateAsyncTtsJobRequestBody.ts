import { TtsCallBackConfig } from './TtsCallBackConfig';


export class CreateAsyncTtsJobRequestBody {
    public text?: string;
    private 'tts_text'?: string;
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    private 'audio_format'?: CreateAsyncTtsJobRequestBodyAudioFormatEnum | string;
    private 'need_timestamp'?: boolean;
    private 'silence_flag'?: boolean;
    private 'silence_time_ms'?: number;
    private 'callback_config'?: TtsCallBackConfig;
    private 'gen_srt'?: boolean;
    private 'srt_len'?: number;
    private 'srt_line_limit'?: number;
    private 'slice_segments'?: boolean;
    public channels?: number;
    private 'output_external_url'?: string;
    private 'srt_output_external_url'?: string;
    private 'action_output_external_url'?: string;
    private 'is_vocabulary_config_enable'?: boolean;
    private 'is_concurrent_resource'?: boolean;
    public priority?: number;
    public constructor(text?: string, voiceAssetId?: string) { 
        this['text'] = text;
        this['voice_asset_id'] = voiceAssetId;
    }
    public withText(text: string): CreateAsyncTtsJobRequestBody {
        this['text'] = text;
        return this;
    }
    public withTtsText(ttsText: string): CreateAsyncTtsJobRequestBody {
        this['tts_text'] = ttsText;
        return this;
    }
    public set ttsText(ttsText: string  | undefined) {
        this['tts_text'] = ttsText;
    }
    public get ttsText(): string | undefined {
        return this['tts_text'];
    }
    public withVoiceAssetId(voiceAssetId: string): CreateAsyncTtsJobRequestBody {
        this['voice_asset_id'] = voiceAssetId;
        return this;
    }
    public set voiceAssetId(voiceAssetId: string  | undefined) {
        this['voice_asset_id'] = voiceAssetId;
    }
    public get voiceAssetId(): string | undefined {
        return this['voice_asset_id'];
    }
    public withSpeed(speed: number): CreateAsyncTtsJobRequestBody {
        this['speed'] = speed;
        return this;
    }
    public withPitch(pitch: number): CreateAsyncTtsJobRequestBody {
        this['pitch'] = pitch;
        return this;
    }
    public withVolume(volume: number): CreateAsyncTtsJobRequestBody {
        this['volume'] = volume;
        return this;
    }
    public withAudioFormat(audioFormat: CreateAsyncTtsJobRequestBodyAudioFormatEnum | string): CreateAsyncTtsJobRequestBody {
        this['audio_format'] = audioFormat;
        return this;
    }
    public set audioFormat(audioFormat: CreateAsyncTtsJobRequestBodyAudioFormatEnum | string  | undefined) {
        this['audio_format'] = audioFormat;
    }
    public get audioFormat(): CreateAsyncTtsJobRequestBodyAudioFormatEnum | string | undefined {
        return this['audio_format'];
    }
    public withNeedTimestamp(needTimestamp: boolean): CreateAsyncTtsJobRequestBody {
        this['need_timestamp'] = needTimestamp;
        return this;
    }
    public set needTimestamp(needTimestamp: boolean  | undefined) {
        this['need_timestamp'] = needTimestamp;
    }
    public get needTimestamp(): boolean | undefined {
        return this['need_timestamp'];
    }
    public withSilenceFlag(silenceFlag: boolean): CreateAsyncTtsJobRequestBody {
        this['silence_flag'] = silenceFlag;
        return this;
    }
    public set silenceFlag(silenceFlag: boolean  | undefined) {
        this['silence_flag'] = silenceFlag;
    }
    public get silenceFlag(): boolean | undefined {
        return this['silence_flag'];
    }
    public withSilenceTimeMs(silenceTimeMs: number): CreateAsyncTtsJobRequestBody {
        this['silence_time_ms'] = silenceTimeMs;
        return this;
    }
    public set silenceTimeMs(silenceTimeMs: number  | undefined) {
        this['silence_time_ms'] = silenceTimeMs;
    }
    public get silenceTimeMs(): number | undefined {
        return this['silence_time_ms'];
    }
    public withCallbackConfig(callbackConfig: TtsCallBackConfig): CreateAsyncTtsJobRequestBody {
        this['callback_config'] = callbackConfig;
        return this;
    }
    public set callbackConfig(callbackConfig: TtsCallBackConfig  | undefined) {
        this['callback_config'] = callbackConfig;
    }
    public get callbackConfig(): TtsCallBackConfig | undefined {
        return this['callback_config'];
    }
    public withGenSrt(genSrt: boolean): CreateAsyncTtsJobRequestBody {
        this['gen_srt'] = genSrt;
        return this;
    }
    public set genSrt(genSrt: boolean  | undefined) {
        this['gen_srt'] = genSrt;
    }
    public get genSrt(): boolean | undefined {
        return this['gen_srt'];
    }
    public withSrtLen(srtLen: number): CreateAsyncTtsJobRequestBody {
        this['srt_len'] = srtLen;
        return this;
    }
    public set srtLen(srtLen: number  | undefined) {
        this['srt_len'] = srtLen;
    }
    public get srtLen(): number | undefined {
        return this['srt_len'];
    }
    public withSrtLineLimit(srtLineLimit: number): CreateAsyncTtsJobRequestBody {
        this['srt_line_limit'] = srtLineLimit;
        return this;
    }
    public set srtLineLimit(srtLineLimit: number  | undefined) {
        this['srt_line_limit'] = srtLineLimit;
    }
    public get srtLineLimit(): number | undefined {
        return this['srt_line_limit'];
    }
    public withSliceSegments(sliceSegments: boolean): CreateAsyncTtsJobRequestBody {
        this['slice_segments'] = sliceSegments;
        return this;
    }
    public set sliceSegments(sliceSegments: boolean  | undefined) {
        this['slice_segments'] = sliceSegments;
    }
    public get sliceSegments(): boolean | undefined {
        return this['slice_segments'];
    }
    public withChannels(channels: number): CreateAsyncTtsJobRequestBody {
        this['channels'] = channels;
        return this;
    }
    public withOutputExternalUrl(outputExternalUrl: string): CreateAsyncTtsJobRequestBody {
        this['output_external_url'] = outputExternalUrl;
        return this;
    }
    public set outputExternalUrl(outputExternalUrl: string  | undefined) {
        this['output_external_url'] = outputExternalUrl;
    }
    public get outputExternalUrl(): string | undefined {
        return this['output_external_url'];
    }
    public withSrtOutputExternalUrl(srtOutputExternalUrl: string): CreateAsyncTtsJobRequestBody {
        this['srt_output_external_url'] = srtOutputExternalUrl;
        return this;
    }
    public set srtOutputExternalUrl(srtOutputExternalUrl: string  | undefined) {
        this['srt_output_external_url'] = srtOutputExternalUrl;
    }
    public get srtOutputExternalUrl(): string | undefined {
        return this['srt_output_external_url'];
    }
    public withActionOutputExternalUrl(actionOutputExternalUrl: string): CreateAsyncTtsJobRequestBody {
        this['action_output_external_url'] = actionOutputExternalUrl;
        return this;
    }
    public set actionOutputExternalUrl(actionOutputExternalUrl: string  | undefined) {
        this['action_output_external_url'] = actionOutputExternalUrl;
    }
    public get actionOutputExternalUrl(): string | undefined {
        return this['action_output_external_url'];
    }
    public withIsVocabularyConfigEnable(isVocabularyConfigEnable: boolean): CreateAsyncTtsJobRequestBody {
        this['is_vocabulary_config_enable'] = isVocabularyConfigEnable;
        return this;
    }
    public set isVocabularyConfigEnable(isVocabularyConfigEnable: boolean  | undefined) {
        this['is_vocabulary_config_enable'] = isVocabularyConfigEnable;
    }
    public get isVocabularyConfigEnable(): boolean | undefined {
        return this['is_vocabulary_config_enable'];
    }
    public withIsConcurrentResource(isConcurrentResource: boolean): CreateAsyncTtsJobRequestBody {
        this['is_concurrent_resource'] = isConcurrentResource;
        return this;
    }
    public set isConcurrentResource(isConcurrentResource: boolean  | undefined) {
        this['is_concurrent_resource'] = isConcurrentResource;
    }
    public get isConcurrentResource(): boolean | undefined {
        return this['is_concurrent_resource'];
    }
    public withPriority(priority: number): CreateAsyncTtsJobRequestBody {
        this['priority'] = priority;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAsyncTtsJobRequestBodyAudioFormatEnum {
    WAV = 'WAV',
    MP3 = 'MP3'
}
