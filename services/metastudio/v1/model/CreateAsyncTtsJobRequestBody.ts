

export class CreateAsyncTtsJobRequestBody {
    public text?: string;
    private 'voice_asset_id'?: string;
    public speed?: number;
    public pitch?: number;
    public volume?: number;
    private 'audio_format'?: CreateAsyncTtsJobRequestBodyAudioFormatEnum | string;
    private 'need_timestamp'?: boolean;
    private 'silence_flag'?: boolean;
    private 'silence_time_ms'?: number;
    public constructor(text?: string, voiceAssetId?: string) { 
        this['text'] = text;
        this['voice_asset_id'] = voiceAssetId;
    }
    public withText(text: string): CreateAsyncTtsJobRequestBody {
        this['text'] = text;
        return this;
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
}

/**
    * @export
    * @enum {string}
    */
export enum CreateAsyncTtsJobRequestBodyAudioFormatEnum {
    WAV = 'WAV',
    MP3 = 'MP3'
}
