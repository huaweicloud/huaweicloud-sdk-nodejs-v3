

export class UpdateServerlessScaleToZeroPolicy {
    private 'scale_to_zero'?: boolean;
    private 'idle_duration_seconds'?: number;
    public constructor(scaleToZero?: boolean) { 
        this['scale_to_zero'] = scaleToZero;
    }
    public withScaleToZero(scaleToZero: boolean): UpdateServerlessScaleToZeroPolicy {
        this['scale_to_zero'] = scaleToZero;
        return this;
    }
    public set scaleToZero(scaleToZero: boolean  | undefined) {
        this['scale_to_zero'] = scaleToZero;
    }
    public get scaleToZero(): boolean | undefined {
        return this['scale_to_zero'];
    }
    public withIdleDurationSeconds(idleDurationSeconds: number): UpdateServerlessScaleToZeroPolicy {
        this['idle_duration_seconds'] = idleDurationSeconds;
        return this;
    }
    public set idleDurationSeconds(idleDurationSeconds: number  | undefined) {
        this['idle_duration_seconds'] = idleDurationSeconds;
    }
    public get idleDurationSeconds(): number | undefined {
        return this['idle_duration_seconds'];
    }
}