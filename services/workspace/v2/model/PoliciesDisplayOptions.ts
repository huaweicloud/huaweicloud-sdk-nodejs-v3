import { PoliciesDisplayOptionsDeepCompressionOptions } from './PoliciesDisplayOptionsDeepCompressionOptions';
import { PoliciesDisplayOptionsVideoBitRateOptions } from './PoliciesDisplayOptionsVideoBitRateOptions';
import { PoliciesDisplayOptionsVideoQualityOptions } from './PoliciesDisplayOptionsVideoQualityOptions';


export class PoliciesDisplayOptions {
    private 'display_bandwidth'?: number;
    private 'frame_rate'?: number;
    private 'video_frame_rate'?: number;
    private 'min_image_cache'?: number;
    private 'smoothing_factor'?: number;
    private 'lossless_compression_mode'?: string;
    private 'deep_compression_options'?: PoliciesDisplayOptionsDeepCompressionOptions;
    private 'lossy_compression_quality'?: number;
    private 'color_enhancement_enable'?: boolean;
    private 'quality_bandwidth_first'?: string;
    private 'video_bit_rate_options'?: PoliciesDisplayOptionsVideoBitRateOptions;
    private 'peak_video_bit_rate'?: number;
    private 'video_quality_options'?: PoliciesDisplayOptionsVideoQualityOptions;
    private 'gop_size'?: number;
    private 'encoding_preset'?: string;
    public constructor() { 
    }
    public withDisplayBandwidth(displayBandwidth: number): PoliciesDisplayOptions {
        this['display_bandwidth'] = displayBandwidth;
        return this;
    }
    public set displayBandwidth(displayBandwidth: number  | undefined) {
        this['display_bandwidth'] = displayBandwidth;
    }
    public get displayBandwidth(): number | undefined {
        return this['display_bandwidth'];
    }
    public withFrameRate(frameRate: number): PoliciesDisplayOptions {
        this['frame_rate'] = frameRate;
        return this;
    }
    public set frameRate(frameRate: number  | undefined) {
        this['frame_rate'] = frameRate;
    }
    public get frameRate(): number | undefined {
        return this['frame_rate'];
    }
    public withVideoFrameRate(videoFrameRate: number): PoliciesDisplayOptions {
        this['video_frame_rate'] = videoFrameRate;
        return this;
    }
    public set videoFrameRate(videoFrameRate: number  | undefined) {
        this['video_frame_rate'] = videoFrameRate;
    }
    public get videoFrameRate(): number | undefined {
        return this['video_frame_rate'];
    }
    public withMinImageCache(minImageCache: number): PoliciesDisplayOptions {
        this['min_image_cache'] = minImageCache;
        return this;
    }
    public set minImageCache(minImageCache: number  | undefined) {
        this['min_image_cache'] = minImageCache;
    }
    public get minImageCache(): number | undefined {
        return this['min_image_cache'];
    }
    public withSmoothingFactor(smoothingFactor: number): PoliciesDisplayOptions {
        this['smoothing_factor'] = smoothingFactor;
        return this;
    }
    public set smoothingFactor(smoothingFactor: number  | undefined) {
        this['smoothing_factor'] = smoothingFactor;
    }
    public get smoothingFactor(): number | undefined {
        return this['smoothing_factor'];
    }
    public withLosslessCompressionMode(losslessCompressionMode: string): PoliciesDisplayOptions {
        this['lossless_compression_mode'] = losslessCompressionMode;
        return this;
    }
    public set losslessCompressionMode(losslessCompressionMode: string  | undefined) {
        this['lossless_compression_mode'] = losslessCompressionMode;
    }
    public get losslessCompressionMode(): string | undefined {
        return this['lossless_compression_mode'];
    }
    public withDeepCompressionOptions(deepCompressionOptions: PoliciesDisplayOptionsDeepCompressionOptions): PoliciesDisplayOptions {
        this['deep_compression_options'] = deepCompressionOptions;
        return this;
    }
    public set deepCompressionOptions(deepCompressionOptions: PoliciesDisplayOptionsDeepCompressionOptions  | undefined) {
        this['deep_compression_options'] = deepCompressionOptions;
    }
    public get deepCompressionOptions(): PoliciesDisplayOptionsDeepCompressionOptions | undefined {
        return this['deep_compression_options'];
    }
    public withLossyCompressionQuality(lossyCompressionQuality: number): PoliciesDisplayOptions {
        this['lossy_compression_quality'] = lossyCompressionQuality;
        return this;
    }
    public set lossyCompressionQuality(lossyCompressionQuality: number  | undefined) {
        this['lossy_compression_quality'] = lossyCompressionQuality;
    }
    public get lossyCompressionQuality(): number | undefined {
        return this['lossy_compression_quality'];
    }
    public withColorEnhancementEnable(colorEnhancementEnable: boolean): PoliciesDisplayOptions {
        this['color_enhancement_enable'] = colorEnhancementEnable;
        return this;
    }
    public set colorEnhancementEnable(colorEnhancementEnable: boolean  | undefined) {
        this['color_enhancement_enable'] = colorEnhancementEnable;
    }
    public get colorEnhancementEnable(): boolean | undefined {
        return this['color_enhancement_enable'];
    }
    public withQualityBandwidthFirst(qualityBandwidthFirst: string): PoliciesDisplayOptions {
        this['quality_bandwidth_first'] = qualityBandwidthFirst;
        return this;
    }
    public set qualityBandwidthFirst(qualityBandwidthFirst: string  | undefined) {
        this['quality_bandwidth_first'] = qualityBandwidthFirst;
    }
    public get qualityBandwidthFirst(): string | undefined {
        return this['quality_bandwidth_first'];
    }
    public withVideoBitRateOptions(videoBitRateOptions: PoliciesDisplayOptionsVideoBitRateOptions): PoliciesDisplayOptions {
        this['video_bit_rate_options'] = videoBitRateOptions;
        return this;
    }
    public set videoBitRateOptions(videoBitRateOptions: PoliciesDisplayOptionsVideoBitRateOptions  | undefined) {
        this['video_bit_rate_options'] = videoBitRateOptions;
    }
    public get videoBitRateOptions(): PoliciesDisplayOptionsVideoBitRateOptions | undefined {
        return this['video_bit_rate_options'];
    }
    public withPeakVideoBitRate(peakVideoBitRate: number): PoliciesDisplayOptions {
        this['peak_video_bit_rate'] = peakVideoBitRate;
        return this;
    }
    public set peakVideoBitRate(peakVideoBitRate: number  | undefined) {
        this['peak_video_bit_rate'] = peakVideoBitRate;
    }
    public get peakVideoBitRate(): number | undefined {
        return this['peak_video_bit_rate'];
    }
    public withVideoQualityOptions(videoQualityOptions: PoliciesDisplayOptionsVideoQualityOptions): PoliciesDisplayOptions {
        this['video_quality_options'] = videoQualityOptions;
        return this;
    }
    public set videoQualityOptions(videoQualityOptions: PoliciesDisplayOptionsVideoQualityOptions  | undefined) {
        this['video_quality_options'] = videoQualityOptions;
    }
    public get videoQualityOptions(): PoliciesDisplayOptionsVideoQualityOptions | undefined {
        return this['video_quality_options'];
    }
    public withGopSize(gopSize: number): PoliciesDisplayOptions {
        this['gop_size'] = gopSize;
        return this;
    }
    public set gopSize(gopSize: number  | undefined) {
        this['gop_size'] = gopSize;
    }
    public get gopSize(): number | undefined {
        return this['gop_size'];
    }
    public withEncodingPreset(encodingPreset: string): PoliciesDisplayOptions {
        this['encoding_preset'] = encodingPreset;
        return this;
    }
    public set encodingPreset(encodingPreset: string  | undefined) {
        this['encoding_preset'] = encodingPreset;
    }
    public get encodingPreset(): string | undefined {
        return this['encoding_preset'];
    }
}