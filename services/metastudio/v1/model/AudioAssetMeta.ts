import { ErrorResponse } from './ErrorResponse';


export class AudioAssetMeta {
    public duration?: number;
    private 'audio_codec'?: string;
    private 'audio_bit_rate'?: number;
    private 'audio_channels'?: number;
    public sample?: number;
    private 'error_info'?: ErrorResponse;
    public constructor() { 
    }
    public withDuration(duration: number): AudioAssetMeta {
        this['duration'] = duration;
        return this;
    }
    public withAudioCodec(audioCodec: string): AudioAssetMeta {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: string  | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec(): string | undefined {
        return this['audio_codec'];
    }
    public withAudioBitRate(audioBitRate: number): AudioAssetMeta {
        this['audio_bit_rate'] = audioBitRate;
        return this;
    }
    public set audioBitRate(audioBitRate: number  | undefined) {
        this['audio_bit_rate'] = audioBitRate;
    }
    public get audioBitRate(): number | undefined {
        return this['audio_bit_rate'];
    }
    public withAudioChannels(audioChannels: number): AudioAssetMeta {
        this['audio_channels'] = audioChannels;
        return this;
    }
    public set audioChannels(audioChannels: number  | undefined) {
        this['audio_channels'] = audioChannels;
    }
    public get audioChannels(): number | undefined {
        return this['audio_channels'];
    }
    public withSample(sample: number): AudioAssetMeta {
        this['sample'] = sample;
        return this;
    }
    public withErrorInfo(errorInfo: ErrorResponse): AudioAssetMeta {
        this['error_info'] = errorInfo;
        return this;
    }
    public set errorInfo(errorInfo: ErrorResponse  | undefined) {
        this['error_info'] = errorInfo;
    }
    public get errorInfo(): ErrorResponse | undefined {
        return this['error_info'];
    }
}