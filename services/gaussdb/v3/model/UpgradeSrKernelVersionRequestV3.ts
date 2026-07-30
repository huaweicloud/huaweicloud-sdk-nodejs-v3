

export class UpgradeSrKernelVersionRequestV3 {
    public delay?: boolean;
    private 'is_skip_validate'?: boolean;
    public constructor() { 
    }
    public withDelay(delay: boolean): UpgradeSrKernelVersionRequestV3 {
        this['delay'] = delay;
        return this;
    }
    public withIsSkipValidate(isSkipValidate: boolean): UpgradeSrKernelVersionRequestV3 {
        this['is_skip_validate'] = isSkipValidate;
        return this;
    }
    public set isSkipValidate(isSkipValidate: boolean  | undefined) {
        this['is_skip_validate'] = isSkipValidate;
    }
    public get isSkipValidate(): boolean | undefined {
        return this['is_skip_validate'];
    }
}