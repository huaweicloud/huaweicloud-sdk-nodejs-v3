

export class ScaleConfigurationDataAdvanced {
    private 'scaledown_stabilization_seconds'?: number;
    private 'scaledown_rate'?: number;
    private 'scaleup_stabilization_seconds'?: number;
    private 'scaleup_rate'?: number;
    private 'disable_scaledown'?: boolean;
    public constructor() { 
    }
    public withScaledownStabilizationSeconds(scaledownStabilizationSeconds: number): ScaleConfigurationDataAdvanced {
        this['scaledown_stabilization_seconds'] = scaledownStabilizationSeconds;
        return this;
    }
    public set scaledownStabilizationSeconds(scaledownStabilizationSeconds: number  | undefined) {
        this['scaledown_stabilization_seconds'] = scaledownStabilizationSeconds;
    }
    public get scaledownStabilizationSeconds(): number | undefined {
        return this['scaledown_stabilization_seconds'];
    }
    public withScaledownRate(scaledownRate: number): ScaleConfigurationDataAdvanced {
        this['scaledown_rate'] = scaledownRate;
        return this;
    }
    public set scaledownRate(scaledownRate: number  | undefined) {
        this['scaledown_rate'] = scaledownRate;
    }
    public get scaledownRate(): number | undefined {
        return this['scaledown_rate'];
    }
    public withScaleupStabilizationSeconds(scaleupStabilizationSeconds: number): ScaleConfigurationDataAdvanced {
        this['scaleup_stabilization_seconds'] = scaleupStabilizationSeconds;
        return this;
    }
    public set scaleupStabilizationSeconds(scaleupStabilizationSeconds: number  | undefined) {
        this['scaleup_stabilization_seconds'] = scaleupStabilizationSeconds;
    }
    public get scaleupStabilizationSeconds(): number | undefined {
        return this['scaleup_stabilization_seconds'];
    }
    public withScaleupRate(scaleupRate: number): ScaleConfigurationDataAdvanced {
        this['scaleup_rate'] = scaleupRate;
        return this;
    }
    public set scaleupRate(scaleupRate: number  | undefined) {
        this['scaleup_rate'] = scaleupRate;
    }
    public get scaleupRate(): number | undefined {
        return this['scaleup_rate'];
    }
    public withDisableScaledown(disableScaledown: boolean): ScaleConfigurationDataAdvanced {
        this['disable_scaledown'] = disableScaledown;
        return this;
    }
    public set disableScaledown(disableScaledown: boolean  | undefined) {
        this['disable_scaledown'] = disableScaledown;
    }
    public get disableScaledown(): boolean | undefined {
        return this['disable_scaledown'];
    }
}