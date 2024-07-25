

export class CambodianIdCardScoreInformationResult {
    private 'idcard_type_score'?: number;
    private 'border_integrity_score'?: number;
    private 'blocking_within_border_score'?: number;
    private 'blur_score'?: number;
    private 'glare_score'?: number;
    private 'tampering_score'?: number;
    private 'reproduce_score'?: number;
    public constructor() { 
    }
    public withIdcardTypeScore(idcardTypeScore: number): CambodianIdCardScoreInformationResult {
        this['idcard_type_score'] = idcardTypeScore;
        return this;
    }
    public set idcardTypeScore(idcardTypeScore: number  | undefined) {
        this['idcard_type_score'] = idcardTypeScore;
    }
    public get idcardTypeScore(): number | undefined {
        return this['idcard_type_score'];
    }
    public withBorderIntegrityScore(borderIntegrityScore: number): CambodianIdCardScoreInformationResult {
        this['border_integrity_score'] = borderIntegrityScore;
        return this;
    }
    public set borderIntegrityScore(borderIntegrityScore: number  | undefined) {
        this['border_integrity_score'] = borderIntegrityScore;
    }
    public get borderIntegrityScore(): number | undefined {
        return this['border_integrity_score'];
    }
    public withBlockingWithinBorderScore(blockingWithinBorderScore: number): CambodianIdCardScoreInformationResult {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
        return this;
    }
    public set blockingWithinBorderScore(blockingWithinBorderScore: number  | undefined) {
        this['blocking_within_border_score'] = blockingWithinBorderScore;
    }
    public get blockingWithinBorderScore(): number | undefined {
        return this['blocking_within_border_score'];
    }
    public withBlurScore(blurScore: number): CambodianIdCardScoreInformationResult {
        this['blur_score'] = blurScore;
        return this;
    }
    public set blurScore(blurScore: number  | undefined) {
        this['blur_score'] = blurScore;
    }
    public get blurScore(): number | undefined {
        return this['blur_score'];
    }
    public withGlareScore(glareScore: number): CambodianIdCardScoreInformationResult {
        this['glare_score'] = glareScore;
        return this;
    }
    public set glareScore(glareScore: number  | undefined) {
        this['glare_score'] = glareScore;
    }
    public get glareScore(): number | undefined {
        return this['glare_score'];
    }
    public withTamperingScore(tamperingScore: number): CambodianIdCardScoreInformationResult {
        this['tampering_score'] = tamperingScore;
        return this;
    }
    public set tamperingScore(tamperingScore: number  | undefined) {
        this['tampering_score'] = tamperingScore;
    }
    public get tamperingScore(): number | undefined {
        return this['tampering_score'];
    }
    public withReproduceScore(reproduceScore: number): CambodianIdCardScoreInformationResult {
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