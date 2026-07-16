

export class FuseConfig {
    private 'error_rate_fuse_enable'?: boolean;
    private 'error_rate_threshold'?: number;
    public constructor() { 
    }
    public withErrorRateFuseEnable(errorRateFuseEnable: boolean): FuseConfig {
        this['error_rate_fuse_enable'] = errorRateFuseEnable;
        return this;
    }
    public set errorRateFuseEnable(errorRateFuseEnable: boolean  | undefined) {
        this['error_rate_fuse_enable'] = errorRateFuseEnable;
    }
    public get errorRateFuseEnable(): boolean | undefined {
        return this['error_rate_fuse_enable'];
    }
    public withErrorRateThreshold(errorRateThreshold: number): FuseConfig {
        this['error_rate_threshold'] = errorRateThreshold;
        return this;
    }
    public set errorRateThreshold(errorRateThreshold: number  | undefined) {
        this['error_rate_threshold'] = errorRateThreshold;
    }
    public get errorRateThreshold(): number | undefined {
        return this['error_rate_threshold'];
    }
}