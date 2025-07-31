

export class ClusterBaselineResponseInfo {
    private 'baseline_desc'?: string;
    private 'baseline_index'?: string;
    private 'baseline_type'?: string;
    public constructor() { 
    }
    public withBaselineDesc(baselineDesc: string): ClusterBaselineResponseInfo {
        this['baseline_desc'] = baselineDesc;
        return this;
    }
    public set baselineDesc(baselineDesc: string  | undefined) {
        this['baseline_desc'] = baselineDesc;
    }
    public get baselineDesc(): string | undefined {
        return this['baseline_desc'];
    }
    public withBaselineIndex(baselineIndex: string): ClusterBaselineResponseInfo {
        this['baseline_index'] = baselineIndex;
        return this;
    }
    public set baselineIndex(baselineIndex: string  | undefined) {
        this['baseline_index'] = baselineIndex;
    }
    public get baselineIndex(): string | undefined {
        return this['baseline_index'];
    }
    public withBaselineType(baselineType: string): ClusterBaselineResponseInfo {
        this['baseline_type'] = baselineType;
        return this;
    }
    public set baselineType(baselineType: string  | undefined) {
        this['baseline_type'] = baselineType;
    }
    public get baselineType(): string | undefined {
        return this['baseline_type'];
    }
}