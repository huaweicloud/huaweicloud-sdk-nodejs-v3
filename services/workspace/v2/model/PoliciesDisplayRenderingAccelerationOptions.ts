

export class PoliciesDisplayRenderingAccelerationOptions {
    private 'video_acceleration_enhancement_enable'?: boolean;
    private 'video_optimization_enable'?: boolean;
    private 'gpu_color_optimization_enable'?: boolean;
    private 'video_recognition_threshold'?: number;
    private 'frame_rate_statistical_length'?: number;
    private 'image_quality_threshold'?: number;
    private 'refresh_frequency_threshold'?: number;
    private 'exiting_video_area_threshold'?: number;
    private 'min_video_width'?: number;
    private 'min_video_length'?: number;
    private 'single_frame_natural_percentage'?: string;
    private 'cyclical_natural_images_number'?: number;
    private 'non_natural_image_percentage'?: string;
    private 'non_natural_images_number'?: number;
    public constructor() { 
    }
    public withVideoAccelerationEnhancementEnable(videoAccelerationEnhancementEnable: boolean): PoliciesDisplayRenderingAccelerationOptions {
        this['video_acceleration_enhancement_enable'] = videoAccelerationEnhancementEnable;
        return this;
    }
    public set videoAccelerationEnhancementEnable(videoAccelerationEnhancementEnable: boolean  | undefined) {
        this['video_acceleration_enhancement_enable'] = videoAccelerationEnhancementEnable;
    }
    public get videoAccelerationEnhancementEnable(): boolean | undefined {
        return this['video_acceleration_enhancement_enable'];
    }
    public withVideoOptimizationEnable(videoOptimizationEnable: boolean): PoliciesDisplayRenderingAccelerationOptions {
        this['video_optimization_enable'] = videoOptimizationEnable;
        return this;
    }
    public set videoOptimizationEnable(videoOptimizationEnable: boolean  | undefined) {
        this['video_optimization_enable'] = videoOptimizationEnable;
    }
    public get videoOptimizationEnable(): boolean | undefined {
        return this['video_optimization_enable'];
    }
    public withGpuColorOptimizationEnable(gpuColorOptimizationEnable: boolean): PoliciesDisplayRenderingAccelerationOptions {
        this['gpu_color_optimization_enable'] = gpuColorOptimizationEnable;
        return this;
    }
    public set gpuColorOptimizationEnable(gpuColorOptimizationEnable: boolean  | undefined) {
        this['gpu_color_optimization_enable'] = gpuColorOptimizationEnable;
    }
    public get gpuColorOptimizationEnable(): boolean | undefined {
        return this['gpu_color_optimization_enable'];
    }
    public withVideoRecognitionThreshold(videoRecognitionThreshold: number): PoliciesDisplayRenderingAccelerationOptions {
        this['video_recognition_threshold'] = videoRecognitionThreshold;
        return this;
    }
    public set videoRecognitionThreshold(videoRecognitionThreshold: number  | undefined) {
        this['video_recognition_threshold'] = videoRecognitionThreshold;
    }
    public get videoRecognitionThreshold(): number | undefined {
        return this['video_recognition_threshold'];
    }
    public withFrameRateStatisticalLength(frameRateStatisticalLength: number): PoliciesDisplayRenderingAccelerationOptions {
        this['frame_rate_statistical_length'] = frameRateStatisticalLength;
        return this;
    }
    public set frameRateStatisticalLength(frameRateStatisticalLength: number  | undefined) {
        this['frame_rate_statistical_length'] = frameRateStatisticalLength;
    }
    public get frameRateStatisticalLength(): number | undefined {
        return this['frame_rate_statistical_length'];
    }
    public withImageQualityThreshold(imageQualityThreshold: number): PoliciesDisplayRenderingAccelerationOptions {
        this['image_quality_threshold'] = imageQualityThreshold;
        return this;
    }
    public set imageQualityThreshold(imageQualityThreshold: number  | undefined) {
        this['image_quality_threshold'] = imageQualityThreshold;
    }
    public get imageQualityThreshold(): number | undefined {
        return this['image_quality_threshold'];
    }
    public withRefreshFrequencyThreshold(refreshFrequencyThreshold: number): PoliciesDisplayRenderingAccelerationOptions {
        this['refresh_frequency_threshold'] = refreshFrequencyThreshold;
        return this;
    }
    public set refreshFrequencyThreshold(refreshFrequencyThreshold: number  | undefined) {
        this['refresh_frequency_threshold'] = refreshFrequencyThreshold;
    }
    public get refreshFrequencyThreshold(): number | undefined {
        return this['refresh_frequency_threshold'];
    }
    public withExitingVideoAreaThreshold(exitingVideoAreaThreshold: number): PoliciesDisplayRenderingAccelerationOptions {
        this['exiting_video_area_threshold'] = exitingVideoAreaThreshold;
        return this;
    }
    public set exitingVideoAreaThreshold(exitingVideoAreaThreshold: number  | undefined) {
        this['exiting_video_area_threshold'] = exitingVideoAreaThreshold;
    }
    public get exitingVideoAreaThreshold(): number | undefined {
        return this['exiting_video_area_threshold'];
    }
    public withMinVideoWidth(minVideoWidth: number): PoliciesDisplayRenderingAccelerationOptions {
        this['min_video_width'] = minVideoWidth;
        return this;
    }
    public set minVideoWidth(minVideoWidth: number  | undefined) {
        this['min_video_width'] = minVideoWidth;
    }
    public get minVideoWidth(): number | undefined {
        return this['min_video_width'];
    }
    public withMinVideoLength(minVideoLength: number): PoliciesDisplayRenderingAccelerationOptions {
        this['min_video_length'] = minVideoLength;
        return this;
    }
    public set minVideoLength(minVideoLength: number  | undefined) {
        this['min_video_length'] = minVideoLength;
    }
    public get minVideoLength(): number | undefined {
        return this['min_video_length'];
    }
    public withSingleFrameNaturalPercentage(singleFrameNaturalPercentage: string): PoliciesDisplayRenderingAccelerationOptions {
        this['single_frame_natural_percentage'] = singleFrameNaturalPercentage;
        return this;
    }
    public set singleFrameNaturalPercentage(singleFrameNaturalPercentage: string  | undefined) {
        this['single_frame_natural_percentage'] = singleFrameNaturalPercentage;
    }
    public get singleFrameNaturalPercentage(): string | undefined {
        return this['single_frame_natural_percentage'];
    }
    public withCyclicalNaturalImagesNumber(cyclicalNaturalImagesNumber: number): PoliciesDisplayRenderingAccelerationOptions {
        this['cyclical_natural_images_number'] = cyclicalNaturalImagesNumber;
        return this;
    }
    public set cyclicalNaturalImagesNumber(cyclicalNaturalImagesNumber: number  | undefined) {
        this['cyclical_natural_images_number'] = cyclicalNaturalImagesNumber;
    }
    public get cyclicalNaturalImagesNumber(): number | undefined {
        return this['cyclical_natural_images_number'];
    }
    public withNonNaturalImagePercentage(nonNaturalImagePercentage: string): PoliciesDisplayRenderingAccelerationOptions {
        this['non_natural_image_percentage'] = nonNaturalImagePercentage;
        return this;
    }
    public set nonNaturalImagePercentage(nonNaturalImagePercentage: string  | undefined) {
        this['non_natural_image_percentage'] = nonNaturalImagePercentage;
    }
    public get nonNaturalImagePercentage(): string | undefined {
        return this['non_natural_image_percentage'];
    }
    public withNonNaturalImagesNumber(nonNaturalImagesNumber: number): PoliciesDisplayRenderingAccelerationOptions {
        this['non_natural_images_number'] = nonNaturalImagesNumber;
        return this;
    }
    public set nonNaturalImagesNumber(nonNaturalImagesNumber: number  | undefined) {
        this['non_natural_images_number'] = nonNaturalImagesNumber;
    }
    public get nonNaturalImagesNumber(): number | undefined {
        return this['non_natural_images_number'];
    }
}