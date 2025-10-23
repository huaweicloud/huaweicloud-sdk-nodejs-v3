

export class VehicleLicenseAlarmResult {
    private 'detect_blocking_within_border_result'?: boolean;
    private 'detect_border_integrity_result'?: boolean;
    public constructor() { 
    }
    public withDetectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean): VehicleLicenseAlarmResult {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
        return this;
    }
    public set detectBlockingWithinBorderResult(detectBlockingWithinBorderResult: boolean  | undefined) {
        this['detect_blocking_within_border_result'] = detectBlockingWithinBorderResult;
    }
    public get detectBlockingWithinBorderResult(): boolean | undefined {
        return this['detect_blocking_within_border_result'];
    }
    public withDetectBorderIntegrityResult(detectBorderIntegrityResult: boolean): VehicleLicenseAlarmResult {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
        return this;
    }
    public set detectBorderIntegrityResult(detectBorderIntegrityResult: boolean  | undefined) {
        this['detect_border_integrity_result'] = detectBorderIntegrityResult;
    }
    public get detectBorderIntegrityResult(): boolean | undefined {
        return this['detect_border_integrity_result'];
    }
}