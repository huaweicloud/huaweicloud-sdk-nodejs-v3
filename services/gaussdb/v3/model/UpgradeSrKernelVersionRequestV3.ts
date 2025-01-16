

export class UpgradeSrKernelVersionRequestV3 {
    public delay?: string;
    private 'is_skip_validate'?: string;
    public constructor() { 
    }
    public withDelay(delay: string): UpgradeSrKernelVersionRequestV3 {
        this['delay'] = delay;
        return this;
    }
    public withIsSkipValidate(isSkipValidate: string): UpgradeSrKernelVersionRequestV3 {
        this['is_skip_validate'] = isSkipValidate;
        return this;
    }
    public set isSkipValidate(isSkipValidate: string  | undefined) {
        this['is_skip_validate'] = isSkipValidate;
    }
    public get isSkipValidate(): string | undefined {
        return this['is_skip_validate'];
    }
}