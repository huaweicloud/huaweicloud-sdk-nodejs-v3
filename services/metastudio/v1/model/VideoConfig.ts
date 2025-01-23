import { SubtitleConfig } from './SubtitleConfig';


export class VideoConfig {
    private 'clip_mode'?: VideoConfigClipModeEnum | string;
    public codec?: VideoConfigCodecEnum | string;
    public bitrate?: number;
    public width?: number;
    public height?: number;
    private 'frame_rate'?: VideoConfigFrameRateEnum | string;
    private 'is_subtitle_enable'?: boolean;
    private 'subtitle_config'?: SubtitleConfig;
    public dx?: number;
    public dy?: number;
    private 'is_enable_super_resolution'?: boolean;
    private 'is_end_at_first_frame'?: boolean;
    private 'output_external_url'?: string;
    public constructor(codec?: string, bitrate?: number, width?: number, height?: number) { 
        this['codec'] = codec;
        this['bitrate'] = bitrate;
        this['width'] = width;
        this['height'] = height;
    }
    public withClipMode(clipMode: VideoConfigClipModeEnum | string): VideoConfig {
        this['clip_mode'] = clipMode;
        return this;
    }
    public set clipMode(clipMode: VideoConfigClipModeEnum | string  | undefined) {
        this['clip_mode'] = clipMode;
    }
    public get clipMode(): VideoConfigClipModeEnum | string | undefined {
        return this['clip_mode'];
    }
    public withCodec(codec: VideoConfigCodecEnum | string): VideoConfig {
        this['codec'] = codec;
        return this;
    }
    public withBitrate(bitrate: number): VideoConfig {
        this['bitrate'] = bitrate;
        return this;
    }
    public withWidth(width: number): VideoConfig {
        this['width'] = width;
        return this;
    }
    public withHeight(height: number): VideoConfig {
        this['height'] = height;
        return this;
    }
    public withFrameRate(frameRate: VideoConfigFrameRateEnum | string): VideoConfig {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: VideoConfigFrameRateEnum | string  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): VideoConfigFrameRateEnum | string | undefined {
        return this['frame_rate'];
    }
    public withIsSubtitleEnable(isSubtitleEnable: boolean): VideoConfig {
        this['is_subtitle_enable'] = isSubtitleEnable;
        return this;
    }
    public set isSubtitleEnable(isSubtitleEnable: boolean  | undefined) {
        this['is_subtitle_enable'] = isSubtitleEnable;
    }
    public get isSubtitleEnable(): boolean | undefined {
        return this['is_subtitle_enable'];
    }
    public withSubtitleConfig(subtitleConfig: SubtitleConfig): VideoConfig {
        this['subtitle_config'] = subtitleConfig;
        return this;
    }
    public set subtitleConfig(subtitleConfig: SubtitleConfig  | undefined) {
        this['subtitle_config'] = subtitleConfig;
    }
    public get subtitleConfig(): SubtitleConfig | undefined {
        return this['subtitle_config'];
    }
    public withDx(dx: number): VideoConfig {
        this['dx'] = dx;
        return this;
    }
    public withDy(dy: number): VideoConfig {
        this['dy'] = dy;
        return this;
    }
    public withIsEnableSuperResolution(isEnableSuperResolution: boolean): VideoConfig {
        this['is_enable_super_resolution'] = isEnableSuperResolution;
        return this;
    }
    public set isEnableSuperResolution(isEnableSuperResolution: boolean  | undefined) {
        this['is_enable_super_resolution'] = isEnableSuperResolution;
    }
    public get isEnableSuperResolution(): boolean | undefined {
        return this['is_enable_super_resolution'];
    }
    public withIsEndAtFirstFrame(isEndAtFirstFrame: boolean): VideoConfig {
        this['is_end_at_first_frame'] = isEndAtFirstFrame;
        return this;
    }
    public set isEndAtFirstFrame(isEndAtFirstFrame: boolean  | undefined) {
        this['is_end_at_first_frame'] = isEndAtFirstFrame;
    }
    public get isEndAtFirstFrame(): boolean | undefined {
        return this['is_end_at_first_frame'];
    }
    public withOutputExternalUrl(outputExternalUrl: string): VideoConfig {
        this['output_external_url'] = outputExternalUrl;
        return this;
    }
    public set outputExternalUrl(outputExternalUrl: string  | undefined) {
        this['output_external_url'] = outputExternalUrl;
    }
    public get outputExternalUrl(): string | undefined {
        return this['output_external_url'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum VideoConfigClipModeEnum {
    RESIZE = 'RESIZE',
    CROP = 'CROP'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoConfigCodecEnum {
    H264 = 'H264',
    VP8 = 'VP8',
    VP9 = 'VP9'
}
/**
    * @export
    * @enum {string}
    */
export enum VideoConfigFrameRateEnum {
    E_24 = '24',
    E_25 = '25',
    E_30 = '30'
}
