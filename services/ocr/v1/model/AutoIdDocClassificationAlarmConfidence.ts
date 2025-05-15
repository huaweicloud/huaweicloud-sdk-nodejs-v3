

export class AutoIdDocClassificationAlarmConfidence {
    private 'blur_score'?: number;
    private 'glare_score'?: number;
    private 'blocking_within_border_score'?: number;
    private 'insufficient_lighting_score'?: number;
    private 'copy_score'?: number;
    private 'border_integrity_score'?: number;
    private 'reproduce_score'?: number;
    public constructor() { 
    }
    public withBlurScore(blurScore: number): AutoIdDocClassificationAlarmConfidence {
        this['blur_score'] = blurScore;
        return this;
    }
    public set blurScore(blurScore: number  | undefined) {
        this['blur_score'] = blurScore;
    }
    public get blurScore(): number | undefined {
        return this['blur_score'];
    }
    public withGlareScore(glareScore: number): AutoIdDocClassificationAlarmConfidence {
        this['glare_score'] = glareScore;
        return this;
    }
    public set glareScore(glareScore: number  | undefined) {
        this['glare_score'] = glareScore;
    }
    public get glareScore(): number | undefined {
        return this['glare_score'];
    }
    public withBlockingWithinBorderScore(blockingWithinBorderScore: number): AutoIdDocClassificationAlarmConfidence {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
        return this;
    }
    public set blockingWithinBorderScore(blockingWithinBorderScore: number  | undefined) {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
    }
    public get blockingWithinBorderScore(): number | undefined {
        return this['blocking_within_border_score'];
    }
    public withInsufficientLightingScore(insufficientLightingScore: number): AutoIdDocClassificationAlarmConfidence {
        this['insufficient_lighting_score'] = insufficientLightingScore;
        return this;
    }
    public set insufficientLightingScore(insufficientLightingScore: number  | undefined) {
        this['insufficient_lighting_score'] = insufficientLightingScore;
    }
    public get insufficientLightingScore(): number | undefined {
        return this['insufficient_lighting_score'];
    }
    public withCopyScore(copyScore: number): AutoIdDocClassificationAlarmConfidence {
        this['copy_score'] = copyScore;
        return this;
    }
    public set copyScore(copyScore: number  | undefined) {
        this['copy_score'] = copyScore;
    }
    public get copyScore(): number | undefined {
        return this['copy_score'];
    }
    public withBorderIntegrityScore(borderIntegrityScore: number): AutoIdDocClassificationAlarmConfidence {
        this['border_integrity_score'] = borderIntegrityScore;
        return this;
    }
    public set borderIntegrityScore(borderIntegrityScore: number  | undefined) {
        this['border_integrity_score'] = borderIntegrityScore;
    }
    public get borderIntegrityScore(): number | undefined {
        return this['border_integrity_score'];
    }
    public withReproduceScore(reproduceScore: number): AutoIdDocClassificationAlarmConfidence {
        this['reproduce_score'] = reproduceScore;
        return this;
    }
    public set reproduceScore(reproduceScore: number  | undefined) {
        this['reproduce_score'] = reproduceScore;
    }
    public get reproduceScore(): number | undefined {
        return this['reproduce_score'];
    }
}