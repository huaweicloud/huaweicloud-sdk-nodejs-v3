

export class PoliciesSeamlessOptions {
    private 'seamless_apply_path'?: string;
    public constructor() { 
    }
    public withSeamlessApplyPath(seamlessApplyPath: string): PoliciesSeamlessOptions {
        this['seamless_apply_path'] = seamlessApplyPath;
        return this;
    }
    public set seamlessApplyPath(seamlessApplyPath: string  | undefined) {
        this['seamless_apply_path'] = seamlessApplyPath;
    }
    public get seamlessApplyPath(): string | undefined {
        return this['seamless_apply_path'];
    }
}