

export class PoliciesDisplayRenderingAccelerationOptions {
    private 'video_acceleration_enhancement_enable'?: boolean;
    private 'video_optimization_enable'?: boolean;
    private 'gpu_color_optimization_enable'?: boolean;
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
}