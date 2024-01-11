

export class IdcardScoreInfoResult {
    private 'tampering_score'?: number;
    private 'interim_score'?: number;
    private 'reproduce_score'?: number;
    private 'copy_score'?: number;
    private 'border_integrity_score'?: number;
    private 'blur_score'?: number;
    private 'glare_score'?: number;
    private 'blocking_within_border_score'?: number;
    public constructor() { 
    }
    public withTamperingScore(tamperingScore: number): IdcardScoreInfoResult {
        this['tampering_score'] = tamperingScore;
        return this;
    }
    public set tamperingScore(tamperingScore: number  | undefined) {
        this['tampering_score'] = tamperingScore;
    }
    public get tamperingScore(): number | undefined {
        return this['tampering_score'];
    }
    public withInterimScore(interimScore: number): IdcardScoreInfoResult {
        this['interim_score'] = interimScore;
        return this;
    }
    public set interimScore(interimScore: number  | undefined) {
        this['interim_score'] = interimScore;
    }
    public get interimScore(): number | undefined {
        return this['interim_score'];
    }
    public withReproduceScore(reproduceScore: number): IdcardScoreInfoResult {
        this['reproduce_score'] = reproduceScore;
        return this;
    }
    public set reproduceScore(reproduceScore: number  | undefined) {
        this['reproduce_score'] = reproduceScore;
    }
    public get reproduceScore(): number | undefined {
        return this['reproduce_score'];
    }
    public withCopyScore(copyScore: number): IdcardScoreInfoResult {
        this['copy_score'] = copyScore;
        return this;
    }
    public set copyScore(copyScore: number  | undefined) {
        this['copy_score'] = copyScore;
    }
    public get copyScore(): number | undefined {
        return this['copy_score'];
    }
    public withBorderIntegrityScore(borderIntegrityScore: number): IdcardScoreInfoResult {
        this['border_integrity_score'] = borderIntegrityScore;
        return this;
    }
    public set borderIntegrityScore(borderIntegrityScore: number  | undefined) {
        this['border_integrity_score'] = borderIntegrityScore;
    }
    public get borderIntegrityScore(): number | undefined {
        return this['border_integrity_score'];
    }
    public withBlurScore(blurScore: number): IdcardScoreInfoResult {
        this['blur_score'] = blurScore;
        return this;
    }
    public set blurScore(blurScore: number  | undefined) {
        this['blur_score'] = blurScore;
    }
    public get blurScore(): number | undefined {
        return this['blur_score'];
    }
    public withGlareScore(glareScore: number): IdcardScoreInfoResult {
        this['glare_score'] = glareScore;
        return this;
    }
    public set glareScore(glareScore: number  | undefined) {
        this['glare_score'] = glareScore;
    }
    public get glareScore(): number | undefined {
        return this['glare_score'];
    }
    public withBlockingWithinBorderScore(blockingWithinBorderScore: number): IdcardScoreInfoResult {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
        return this;
    }
    public set blockingWithinBorderScore(blockingWithinBorderScore: number  | undefined) {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
    }
    public get blockingWithinBorderScore(): number | undefined {
        return this['blocking_within_border_score'];
    }
}