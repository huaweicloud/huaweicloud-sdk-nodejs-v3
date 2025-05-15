

export class AutoIdDocClassificationAlarmResult {
    private 'detect_blur_result'?: boolean;
    private 'detect_glare_result'?: boolean;
    private 'detect_blocking_within_border_result'?: boolean;
    private 'detect_insufficient_lighting_result'?: boolean;
    private 'detect_copy_result'?: boolean;
    private 'detect_border_integrity_result'?: boolean;
    private 'detect_reproduce_result'?: boolean;
    public constructor() { 
    }
    public withDetectBlurResult(detectBlurResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_blur_result'] = detectBlurResult;
        return this;
    }
    public set detectBlurResult(detectBlurResult: boolean  | undefined) {
        this['detect_blur_result'] = detectBlurResult;
    }
    public get detectBlurResult(): boolean | undefined {
        return this['detect_blur_result'];
    }
    public withDetectGlareResult(detectGlareResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_glare_result'] = detectGlareResult;
        return this;
    }
    public set detectGlareResult(detectGlareResult: boolean  | undefined) {
        this['detect_glare_result'] = detectGlareResult;
    }
    public get detectGlareResult(): boolean | undefined {
        return this['detect_glare_result'];
    }
    public withDetectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
        return this;
    }
    public set detectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean  | undefined) {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
    }
    public get detectBlockingWithinBorderResult(): boolean | undefined {
        return this['detect_blocking_within_border_result'];
    }
    public withDetectInsufficientLightingResult(detectInsufficientLightingResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_insufficient_lighting_result'] = detectInsufficientLightingResult;
        return this;
    }
    public set detectInsufficientLightingResult(detectInsufficientLightingResult: boolean  | undefined) {
        this['detect_insufficient_lighting_result'] = detectInsufficientLightingResult;
    }
    public get detectInsufficientLightingResult(): boolean | undefined {
        return this['detect_insufficient_lighting_result'];
    }
    public withDetectCopyResult(detectCopyResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_copy_result'] = detectCopyResult;
        return this;
    }
    public set detectCopyResult(detectCopyResult: boolean  | undefined) {
        this['detect_copy_result'] = detectCopyResult;
    }
    public get detectCopyResult(): boolean | undefined {
        return this['detect_copy_result'];
    }
    public withDetectBorderIntegrityResult(detectBorderIntegrityResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
        return this;
    }
    public set detectBorderIntegrityResult(detectBorderIntegrityResult: boolean  | undefined) {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
    }
    public get detectBorderIntegrityResult(): boolean | undefined {
        return this['detect_border_integrity_result'];
    }
    public withDetectReproduceResult(detectReproduceResult: boolean): AutoIdDocClassificationAlarmResult {
        this['detect_reproduce_result'] = detectReproduceResult;
        return this;
    }
    public set detectReproduceResult(detectReproduceResult: boolean  | undefined) {
        this['detect_reproduce_result'] = detectReproduceResult;
    }
    public get detectReproduceResult(): boolean | undefined {
        return this['detect_reproduce_result'];
    }
}