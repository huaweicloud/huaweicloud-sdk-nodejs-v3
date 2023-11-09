

export class Severity {
    public label?: string;
    private 'normalize_score'?: number;
    private 'original_score'?: number;
    public constructor(label?: string) { 
        this['label'] = label;
    }
    public withLabel(label: string): Severity {
        this['label'] = label;
        return this;
    }
    public withNormalizeScore(normalizeScore: number): Severity {
        this['normalize_score'] = normalizeScore;
        return this;
    }
    public set normalizeScore(normalizeScore: number  | undefined) {
        this['normalize_score'] = normalizeScore;
    }
    public get normalizeScore(): number | undefined {
        return this['normalize_score'];
    }
    public withOriginalScore(originalScore: number): Severity {
        this['original_score'] = originalScore;
        return this;
    }
    public set originalScore(originalScore: number  | undefined) {
        this['original_score'] = originalScore;
    }
    public get originalScore(): number | undefined {
        return this['original_score'];
    }
}