

export class ShowPatchBaselineRequest {
    private 'baseline_id'?: string;
    public constructor(baselineId?: string) { 
        this['baseline_id'] = baselineId;
    }
    public withBaselineId(baselineId: string): ShowPatchBaselineRequest {
        this['baseline_id'] = baselineId;
        return this;
    }
    public set baselineId(baselineId: string  | undefined) {
        this['baseline_id'] = baselineId;
    }
    public get baselineId(): string | undefined {
        return this['baseline_id'];
    }
}