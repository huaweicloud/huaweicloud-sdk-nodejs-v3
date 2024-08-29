import { ErrorResponse } from './ErrorResponse';


export class VideoAssetMeta {
    private 'video_codec'?: string;
    public width?: number;
    public height?: number;
    private 'frame_rate'?: string;
    private 'video_bit_rate'?: number;
    public duration?: number;
    private 'audio_codec'?: string;
    private 'audio_bit_rate'?: number;
    private 'audio_channels'?: number;
    public sample?: number;
    public mode?: VideoAssetMetaModeEnum | string;
    private 'video_transcoding_status'?: VideoAssetMetaVideoTranscodingStatusEnum | string;
    private 'error_info'?: ErrorResponse;
    public constructor() { 
    }
    public withVideoCodec(videoCodec: string): VideoAssetMeta {
        this['video_codec'] = videoCodec;
        return this;
    }
    public set videoCodec(videoCodec: string  | undefined) {
        this['video_codec'] = videoCodec;
    }
    public get videoCodec(): string | undefined {
        return this['video_codec'];
    }
    public withWidth(width: number): VideoAssetMeta {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoAssetMeta {
        this['height'] = height;
        return this;
    }
    public withFrameRate(frameRate: string): VideoAssetMeta {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: string  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): string | undefined {
        return this['frame_rate'];
    }
    public withVideoBitRate(videoBitRate: number): VideoAssetMeta {
        this['video_bit_rate'] = videoBitRate;
        return this;
    }
    public set videoBitRate(videoBitRate: number  | undefined) {
        this['video_bit_rate'] = videoBitRate;
    }
    public get videoBitRate(): number | undefined {
        return this['video_bit_rate'];
    }
    public withDuration(duration: number): VideoAssetMeta {
        this['duration'] = duration;
        return this;
    }
    public withAudioCodec(audioCodec: string): VideoAssetMeta {
        this['audio_codec'] = audioCodec;
        return this;
    }
    public set audioCodec(audioCodec: string  | undefined) {
        this['audio_codec'] = audioCodec;
    }
    public get audioCodec(): string | undefined {
        return this['audio_codec'];
    }
    public withAudioBitRate(audioBitRate: number): VideoAssetMeta {
        this['audio_bit_rate'] = audioBitRate;
        return this;
    }
    public set audioBitRate(audioBitRate: number  | undefined) {
        this['audio_bit_rate'] = audioBitRate;
    }
    public get audioBitRate(): number | undefined {
        return this['audio_bit_rate'];
    }
    public withAudioChannels(audioChannels: number): VideoAssetMeta {
        this['audio_channels'] = audioChannels;
        return this;
    }
    public set audioChannels(audioChannels: number  | undefined) {
        this['audio_channels'] = audioChannels;
    }
    public get audioChannels(): number | undefined {
        return this['audio_channels'];
    }
    public withSample(sample: number): VideoAssetMeta {
        this['sample'] = sample;
        return this;
    }
    public withMode(mode: VideoAssetMetaModeEnum | string): VideoAssetMeta {
        this['mode'] = mode;
        return this;
    }
    public withVideoTranscodingStatus(videoTranscodingStatus: VideoAssetMetaVideoTranscodingStatusEnum | string): VideoAssetMeta {
        this['video_transcoding_status'] = videoTranscodingStatus;
        return this;
    }
    public set videoTranscodingStatus(videoTranscodingStatus: VideoAssetMetaVideoTranscodingStatusEnum | string  | undefined) {
        this['video_transcoding_status'] = videoTranscodingStatus;
    }
    public get videoTranscodingStatus(): VideoAssetMetaVideoTranscodingStatusEnum | string | undefined {
        return this['video_transcoding_status'];
    }
    public withErrorInfo(errorInfo: ErrorResponse): VideoAssetMeta {
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

/**
    * @export
    * @enum {string}
    */
export enum VideoAssetMetaModeEnum {
    HORIZONTAL = 'Horizontal',
    VERTICAL = 'Vertical'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoAssetMetaVideoTranscodingStatusEnum {
    WAITING = 'WAITING',
    TRANSCODING = 'TRANSCODING',
    FAILED = 'FAILED',
    SUCCEEDED = 'SUCCEEDED'
}
