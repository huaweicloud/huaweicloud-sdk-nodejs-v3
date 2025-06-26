import { DisplayOptionsDeepCompressionOptions } from './DisplayOptionsDeepCompressionOptions';
import { DisplayOptionsVideoBitRateOptions } from './DisplayOptionsVideoBitRateOptions';
import { DisplayOptionsVideoQualityOptions } from './DisplayOptionsVideoQualityOptions';


export class DisplayOptions {
    private 'display_bandwidth'?: number;
    private 'frame_rate'?: number;
    private 'video_frame_rate'?: number;
    private 'min_image_cache'?: number;
    private 'smoothing_factor'?: number;
    private 'lossless_compression_mode'?: DisplayOptionsLosslessCompressionModeEnum | string;
    private 'deep_compression_options'?: DisplayOptionsDeepCompressionOptions;
    private 'lossy_compression_quality'?: number;
    private 'color_enhancement_enable'?: boolean;
    private 'quality_bandwidth_first'?: DisplayOptionsQualityBandwidthFirstEnum | string;
    private 'video_bit_rate_options'?: DisplayOptionsVideoBitRateOptions;
    private 'peak_video_bit_rate'?: number;
    private 'video_quality_options'?: DisplayOptionsVideoQualityOptions;
    private 'gop_size'?: number;
    private 'encoding_preset'?: DisplayOptionsEncodingPresetEnum | string;
    public constructor() { 
    }
    public withDisplayBandwidth(displayBandwidth: number): DisplayOptions {
        this['display_bandwidth'] = displayBandwidth;
        return this;
    }
    public set displayBandwidth(displayBandwidth: number  | undefined) {
        this['display_bandwidth'] = displayBandwidth;
    }
    public get displayBandwidth(): number | undefined {
        return this['display_bandwidth'];
    }
    public withFrameRate(frameRate: number): DisplayOptions {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
    public withVideoFrameRate(videoFrameRate: number): DisplayOptions {
        this['video_frame_rate'] = videoFrameRate;
        return this;
    }
    public set videoFrameRate(videoFrameRate: number  | undefined) {
        this['video_frame_rate'] = videoFrameRate;
    }
    public get videoFrameRate(): number | undefined {
        return this['video_frame_rate'];
    }
    public withMinImageCache(minImageCache: number): DisplayOptions {
        this['min_image_cache'] = minImageCache;
        return this;
    }
    public set minImageCache(minImageCache: number  | undefined) {
        this['min_image_cache'] = minImageCache;
    }
    public get minImageCache(): number | undefined {
        return this['min_image_cache'];
    }
    public withSmoothingFactor(smoothingFactor: number): DisplayOptions {
        this['smoothing_factor'] = smoothingFactor;
        return this;
    }
    public set smoothingFactor(smoothingFactor: number  | undefined) {
        this['smoothing_factor'] = smoothingFactor;
    }
    public get smoothingFactor(): number | undefined {
        return this['smoothing_factor'];
    }
    public withLosslessCompressionMode(losslessCompressionMode: DisplayOptionsLosslessCompressionModeEnum | string): DisplayOptions {
        this['lossless_compression_mode'] = losslessCompressionMode;
        return this;
    }
    public set losslessCompressionMode(losslessCompressionMode: DisplayOptionsLosslessCompressionModeEnum | string  | undefined) {
        this['lossless_compression_mode'] = losslessCompressionMode;
    }
    public get losslessCompressionMode(): DisplayOptionsLosslessCompressionModeEnum | string | undefined {
        return this['lossless_compression_mode'];
    }
    public withDeepCompressionOptions(deepCompressionOptions: DisplayOptionsDeepCompressionOptions): DisplayOptions {
        this['deep_compression_options'] = deepCompressionOptions;
        return this;
    }
    public set deepCompressionOptions(deepCompressionOptions: DisplayOptionsDeepCompressionOptions  | undefined) {
        this['deep_compression_options'] = deepCompressionOptions;
    }
    public get deepCompressionOptions(): DisplayOptionsDeepCompressionOptions | undefined {
        return this['deep_compression_options'];
    }
    public withLossyCompressionQuality(lossyCompressionQuality: number): DisplayOptions {
        this['lossy_compression_quality'] = lossyCompressionQuality;
        return this;
    }
    public set lossyCompressionQuality(lossyCompressionQuality: number  | undefined) {
        this['lossy_compression_quality'] = lossyCompressionQuality;
    }
    public get lossyCompressionQuality(): number | undefined {
        return this['lossy_compression_quality'];
    }
    public withColorEnhancementEnable(colorEnhancementEnable: boolean): DisplayOptions {
        this['color_enhancement_enable'] = colorEnhancementEnable;
        return this;
    }
    public set colorEnhancementEnable(colorEnhancementEnable: boolean  | undefined) {
        this['color_enhancement_enable'] = colorEnhancementEnable;
    }
    public get colorEnhancementEnable(): boolean | undefined {
        return this['color_enhancement_enable'];
    }
    public withQualityBandwidthFirst(qualityBandwidthFirst: DisplayOptionsQualityBandwidthFirstEnum | string): DisplayOptions {
        this['quality_bandwidth_first'] = qualityBandwidthFirst;
        return this;
    }
    public set qualityBandwidthFirst(qualityBandwidthFirst: DisplayOptionsQualityBandwidthFirstEnum | string  | undefined) {
        this['quality_bandwidth_first'] = qualityBandwidthFirst;
    }
    public get qualityBandwidthFirst(): DisplayOptionsQualityBandwidthFirstEnum | string | undefined {
        return this['quality_bandwidth_first'];
    }
    public withVideoBitRateOptions(videoBitRateOptions: DisplayOptionsVideoBitRateOptions): DisplayOptions {
        this['video_bit_rate_options'] = videoBitRateOptions;
        return this;
    }
    public set videoBitRateOptions(videoBitRateOptions: DisplayOptionsVideoBitRateOptions  | undefined) {
        this['video_bit_rate_options'] = videoBitRateOptions;
    }
    public get videoBitRateOptions(): DisplayOptionsVideoBitRateOptions | undefined {
        return this['video_bit_rate_options'];
    }
    public withPeakVideoBitRate(peakVideoBitRate: number): DisplayOptions {
        this['peak_video_bit_rate'] = peakVideoBitRate;
        return this;
    }
    public set peakVideoBitRate(peakVideoBitRate: number  | undefined) {
        this['peak_video_bit_rate'] = peakVideoBitRate;
    }
    public get peakVideoBitRate(): number | undefined {
        return this['peak_video_bit_rate'];
    }
    public withVideoQualityOptions(videoQualityOptions: DisplayOptionsVideoQualityOptions): DisplayOptions {
        this['video_quality_options'] = videoQualityOptions;
        return this;
    }
    public set videoQualityOptions(videoQualityOptions: DisplayOptionsVideoQualityOptions  | undefined) {
        this['video_quality_options'] = videoQualityOptions;
    }
    public get videoQualityOptions(): DisplayOptionsVideoQualityOptions | undefined {
        return this['video_quality_options'];
    }
    public withGopSize(gopSize: number): DisplayOptions {
        this['gop_size'] = gopSize;
        return this;
    }
    public set gopSize(gopSize: number  | undefined) {
        this['gop_size'] = gopSize;
    }
    public get gopSize(): number | undefined {
        return this['gop_size'];
    }
    public withEncodingPreset(encodingPreset: DisplayOptionsEncodingPresetEnum | string): DisplayOptions {
        this['encoding_preset'] = encodingPreset;
        return this;
    }
    public set encodingPreset(encodingPreset: DisplayOptionsEncodingPresetEnum | string  | undefined) {
        this['encoding_preset'] = encodingPreset;
    }
    public get encodingPreset(): DisplayOptionsEncodingPresetEnum | string | undefined {
        return this['encoding_preset'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum DisplayOptionsLosslessCompressionModeEnum {
    BASIC_COMPRESSION = 'Basic Compression',
    DEEP_COMPRESSION = 'Deep Compression'
}
/**
    * @export
    * @enum {string}
    */
export enum DisplayOptionsQualityBandwidthFirstEnum {
    QUALITY_FIRST = 'Quality First',
    BANDWIDTH_FIRST = 'Bandwidth First'
}
/**
    * @export
    * @enum {string}
    */
export enum DisplayOptionsEncodingPresetEnum {
    PRESET_1 = 'Preset 1',
    PRESET_2 = 'Preset 2',
    PRESET_3 = 'Preset 3',
    PRESET_4 = 'Preset 4',
    PRESET_5 = 'Preset 5',
    PRESET_6 = 'Preset 6',
    PRESET_7 = 'Preset 7'
}
